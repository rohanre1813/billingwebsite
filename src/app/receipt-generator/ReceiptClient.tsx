"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Download, Printer } from "lucide-react";
import type { ReceiptData } from "@/types";
import AdPlaceholder from "@/components/ui/AdPlaceholder";

const defaultValues: ReceiptData = {
  receiptNumber: "REC-2024-001",
  date: new Date().toISOString().split("T")[0],
  customerName: "",
  customerPhone: "",
  customerEmail: "",
  amount: 0,
  paymentMethod: "Cash",
  description: "",
  notes: "",
  businessName: "",
  businessAddress: "",
  businessPhone: "",
};

const PAYMENT_METHODS = ["Cash", "UPI", "NEFT", "RTGS", "IMPS", "Cheque", "Card", "Bank Transfer", "Other"];

export default function ReceiptPage() {
  const { register, watch, getValues, formState: { errors } } = useForm<ReceiptData>({ defaultValues });
  const data = watch();

  const handleDownloadPDF = async () => {
    const element = document.getElementById("receipt-preview");
    if (!element) return;

    try {
      const { toPng } = await import("html-to-image");
      const jsPDFModule = await import("jspdf");
      const PDFClass = jsPDFModule.jsPDF || jsPDFModule.default;

      const dataUrl = await toPng(element, {
        quality: 1,
        pixelRatio: 2,
        backgroundColor: "#ffffff",
      });

      const img = new Image();
      img.src = dataUrl;
      await new Promise((resolve) => { img.onload = resolve; });

      const pdf = new PDFClass("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (img.height * pdfWidth) / img.width;
      pdf.addImage(dataUrl, "PNG", 0, 0, pdfWidth, pdfHeight);

      const receiptNo = getValues("receiptNumber") || "receipt";
      pdf.save(`${receiptNo}.pdf`);
    } catch (error) {
      console.error("PDF generation failed", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  return (
    <div>
      {/* Header Ad */}
      <div className="bg-gray-50 border-b border-gray-100 py-3">
        <div className="container-xl flex justify-center">
          <AdPlaceholder size="leaderboard" />
        </div>
      </div>

      {/* Page Header */}
      <div className="bg-white border-b border-gray-100 py-6">
        <div className="container-xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900">Receipt Generator</h1>
              <p className="text-gray-500 text-sm mt-1">Create payment receipts and download as PDF — free &amp; instant</p>
            </div>
            <div className="flex items-center gap-3 no-print">
              <button type="button" onClick={handleDownloadPDF} className="btn-primary text-sm">
                <Download size={16} /> Download PDF
              </button>
              <button type="button" onClick={() => window.print()} className="btn-secondary text-sm">
                <Printer size={16} /> Print
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-xl py-8">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Form */}
          <div className="flex-1 space-y-6 no-print">
            <div className="card p-6">
              <h2 className="font-heading font-bold text-gray-900 mb-5">Business Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className="form-label">Business Name *</label>
                  <input {...register("businessName", { required: true })} placeholder="Your Business Name" className="form-input" />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Business Address</label>
                  <input {...register("businessAddress")} placeholder="Business address" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Phone</label>
                  <input {...register("businessPhone")} placeholder="+91 98765 43210" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Receipt Number</label>
                  <input {...register("receiptNumber")} placeholder="REC-001" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Date</label>
                  <input {...register("date")} type="date" className="form-input" />
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h2 className="font-heading font-bold text-gray-900 mb-5">Customer Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className="form-label">Customer Name *</label>
                  <input {...register("customerName", { required: true })} placeholder="Customer Name" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Phone</label>
                  <input {...register("customerPhone")} placeholder="+91 98765 43210" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Email</label>
                  <input {...register("customerEmail")} type="email" placeholder="customer@email.com" className="form-input" />
                </div>
              </div>
            </div>

            <div className="card p-6">
              <h2 className="font-heading font-bold text-gray-900 mb-5">Payment Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">Amount (₹) *</label>
                  <input {...register("amount", { required: true, valueAsNumber: true })} type="number" step="0.01" min={0} placeholder="0.00" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Payment Method</label>
                  <select {...register("paymentMethod")} className="form-select">
                    {PAYMENT_METHODS.map(m => <option key={m}>{m}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Description / Purpose</label>
                  <input {...register("description")} placeholder="Payment for services / goods" className="form-input" />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Notes</label>
                  <textarea {...register("notes")} rows={2} placeholder="Thank you for your payment!" className="form-textarea w-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="flex-1">
            <h2 className="font-heading font-bold text-gray-800 mb-4 no-print">Live Preview</h2>
            <div id="receipt-preview" className="bg-white border border-gray-200 rounded-2xl p-8">
              <div className="text-center border-b-2 border-brand-600 pb-6 mb-6">
                <h1 className="text-3xl font-heading font-extrabold text-brand-700 mb-1">RECEIPT</h1>
                <p className="font-bold text-gray-900 text-xl mt-4">{data.businessName || "Business Name"}</p>
                {data.businessAddress && <p className="text-gray-500 text-sm mt-1">{data.businessAddress}</p>}
                {data.businessPhone && <p className="text-gray-500 text-sm">{data.businessPhone}</p>}
              </div>
              <div className="flex justify-between mb-6 text-sm">
                <div>
                  <p className="text-xs text-gray-400 font-semibold uppercase mb-1">Received From</p>
                  <p className="font-bold text-gray-900">{data.customerName || "Customer Name"}</p>
                  {data.customerPhone && <p className="text-gray-500 text-xs">{data.customerPhone}</p>}
                  {data.customerEmail && <p className="text-gray-500 text-xs">{data.customerEmail}</p>}
                </div>
                <div className="text-right">
                  <div className="space-y-1">
                    <div className="flex justify-between gap-8 text-xs">
                      <span className="text-gray-400">Receipt No.</span>
                      <span className="font-bold">{data.receiptNumber}</span>
                    </div>
                    <div className="flex justify-between gap-8 text-xs">
                      <span className="text-gray-400">Date</span>
                      <span className="font-semibold">{data.date}</span>
                    </div>
                    <div className="flex justify-between gap-8 text-xs">
                      <span className="text-gray-400">Method</span>
                      <span className="font-semibold">{data.paymentMethod}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-brand-50 rounded-2xl p-6 text-center mb-6">
                <p className="text-xs text-gray-500 mb-1">Amount Received</p>
                <p className="text-4xl font-extrabold text-brand-700">₹{Number(data.amount || 0).toLocaleString("en-IN", { minimumFractionDigits: 2 })}</p>
                {data.description && <p className="text-sm text-gray-600 mt-3 italic">{data.description}</p>}
              </div>
              {data.notes && <p className="text-xs text-gray-500 text-center mb-6 italic">{data.notes}</p>}
              <div className="border-t border-gray-100 pt-5 flex justify-between items-end">
                <p className="text-xs text-gray-400">Generated by <span className="text-brand-600 font-semibold">JusBill.online</span></p>
                <div className="text-right">
                  <div className="h-10 border-b border-gray-300 w-36 mb-1" />
                  <p className="text-xs text-gray-400">Authorised Signature</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center no-print">
          <AdPlaceholder size="leaderboard" label="Footer Ad" />
        </div>
      </div>
    </div>
  );
}
