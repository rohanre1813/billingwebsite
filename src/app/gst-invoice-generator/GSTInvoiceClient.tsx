"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useState, useRef } from "react";
import { Download, Printer, Eye, PenLine } from "lucide-react";
import type { Metadata } from "next";
import type { InvoiceData } from "@/types";
import InvoiceForm from "@/components/invoice/InvoiceForm";
import InvoicePreview from "@/components/invoice/InvoicePreview";
import AdPlaceholder from "@/components/ui/AdPlaceholder";

const defaultValues: InvoiceData = {
  invoiceNumber: "INV-2024-001",
  invoiceDate: new Date().toISOString().split("T")[0],
  dueDate: "",
  seller: { name: "", gstin: "", address: "", city: "", state: "", pin: "", phone: "", email: "" },
  buyer: { name: "", gstin: "", address: "", city: "", state: "", pin: "", phone: "", email: "" },
  items: [
    { id: "1", description: "", hsn: "", quantity: 1, unit: "Nos", price: 0, taxRate: 18 },
  ],
  supplyType: "intrastate",
  notes: "Thank you for your business!",
  bankDetails: { bankName: "", accountNumber: "", ifsc: "", branch: "" },
};

export default function GSTInvoiceClient() {
  const methods = useForm<InvoiceData>({ defaultValues });
  const [showPreview, setShowPreview] = useState(false);
  const previewRef = useRef<HTMLDivElement>(null);

  const handleDownloadPDF = async () => {
    const element = document.getElementById("invoice-preview");
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

      const invoiceNo = methods.getValues("invoiceNumber") || "invoice";
      pdf.save(`${invoiceNo}.pdf`);
    } catch (error) {
      console.error("PDF generation failed", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <FormProvider {...methods}>
      <form>
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
                <h1 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900">
                  GST Invoice Generator
                </h1>
                <p className="text-gray-500 text-sm mt-1">
                  Create professional GST invoices with CGST, SGST &amp; IGST — free &amp; instant PDF download
                </p>
              </div>
              <div className="flex items-center gap-3 no-print">
                <button
                  type="button"
                  onClick={() => setShowPreview(!showPreview)}
                  className="btn-secondary text-sm"
                >
                  <Eye size={16} />
                  {showPreview ? "Edit Form" : "Preview"}
                </button>
                <button
                  type="button"
                  onClick={handleDownloadPDF}
                  className="btn-primary text-sm"
                >
                  <Download size={16} />
                  Download PDF
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="btn-secondary text-sm"
                >
                  <Printer size={16} />
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container-xl py-8">
          <div className="flex flex-col xl:flex-row gap-8">
            {/* Left: Form */}
            <div className={`flex-1 ${showPreview ? "hidden xl:block" : ""}`}>
              <InvoiceForm isProforma={false} />
            </div>

            {/* Sidebar Ad */}
            <div className="hidden xl:block no-print">
              <div className="sticky top-24 space-y-6">
                <AdPlaceholder size="rectangle" label="Sidebar Ad" />
                <div className="card p-5">
                  <h3 className="font-heading font-semibold text-gray-800 text-sm mb-3">💡 GST Tips</h3>
                  <ul className="space-y-2 text-xs text-gray-600">
                    <li>• CGST + SGST applies for same-state sales</li>
                    <li>• IGST applies for interstate sales</li>
                    <li>• HSN code is mandatory for goods above ₹5 Cr turnover</li>
                    <li>• Invoice must be issued within 30 days of supply</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right: Preview */}
            <div className={`flex-1 ${!showPreview ? "hidden xl:block" : ""}`}>
              <div className="sticky top-24">
                <div className="flex items-center justify-between mb-4 no-print">
                  <h2 className="font-heading font-bold text-gray-800">Live Preview</h2>
                  <button
                    type="button"
                    onClick={() => setShowPreview(false)}
                    className="text-brand-600 text-sm font-semibold flex items-center gap-1 xl:hidden"
                  >
                    <PenLine size={14} /> Edit
                  </button>
                </div>
                <div ref={previewRef}>
                  <InvoicePreview isProforma={false} />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Ad */}
          <div className="mt-10 flex justify-center no-print">
            <AdPlaceholder size="leaderboard" label="Footer Ad" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
