"use client";

import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { Download, Printer, Eye, PenLine } from "lucide-react";
import type { InvoiceData } from "@/types";
import InvoiceForm from "@/components/invoice/InvoiceForm";
import InvoicePreview from "@/components/invoice/InvoicePreview";
import AdPlaceholder from "@/components/ui/AdPlaceholder";

const defaultValues: InvoiceData = {
  invoiceNumber: "PI-2024-001",
  invoiceDate: new Date().toISOString().split("T")[0],
  dueDate: "",
  seller: { name: "", gstin: "", address: "", city: "", state: "", pin: "", phone: "", email: "" },
  buyer: { name: "", gstin: "", address: "", city: "", state: "", pin: "", phone: "", email: "" },
  items: [{ id: "1", description: "", hsn: "", quantity: 1, unit: "Nos", price: 0, taxRate: 18 }],
  supplyType: "intrastate",
  notes: "This is a proforma invoice. Final invoice will be issued upon confirmation.",
  bankDetails: { bankName: "", accountNumber: "", ifsc: "", branch: "" },
};

export default function ProformaWrapper() {
  const methods = useForm<InvoiceData>({ defaultValues });
  const [showPreview, setShowPreview] = useState(false);

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

      const invoiceNo = methods.getValues("invoiceNumber") || "proforma";
      pdf.save(`${invoiceNo}.pdf`);
    } catch (error) {
      console.error("PDF generation failed", error);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  return (
    <FormProvider {...methods}>
      <form>
        <div className="bg-gray-50 border-b border-gray-100 py-3">
          <div className="container-xl flex justify-center">
            <AdPlaceholder size="leaderboard" />
          </div>
        </div>
        <div className="container-xl py-8">
          <div className="flex gap-3 mb-6 no-print">
            <button type="button" onClick={() => setShowPreview(!showPreview)} className="btn-secondary text-sm">
              <Eye size={16} /> {showPreview ? "Edit Form" : "Preview"}
            </button>
            <button type="button" onClick={handleDownloadPDF} className="btn-primary text-sm">
              <Download size={16} /> Download PDF
            </button>
            <button type="button" onClick={() => window.print()} className="btn-secondary text-sm">
              <Printer size={16} /> Print
            </button>
          </div>
          <div className="flex flex-col xl:flex-row gap-8">
            <div className={`flex-1 ${showPreview ? "hidden xl:block" : ""}`}>
              <InvoiceForm isProforma={true} />
            </div>
            <div className={`flex-1 ${!showPreview ? "hidden xl:block" : ""}`}>
              <div className="sticky top-24">
                <h2 className="font-heading font-bold text-gray-800 mb-4 no-print">Proforma Preview</h2>
                <InvoicePreview isProforma={true} />
              </div>
            </div>
          </div>
          <div className="mt-10 flex justify-center no-print">
            <AdPlaceholder size="leaderboard" label="Footer Ad" />
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
