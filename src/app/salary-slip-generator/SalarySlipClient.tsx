"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { Download, Printer, Plus, Trash2 } from "lucide-react";
import type { SalaryData } from "@/types";
import AdPlaceholder from "@/components/ui/AdPlaceholder";

const defaultValues: SalaryData = {
  companyName: "",
  companyAddress: "",
  companyLogo: "",
  employeeName: "",
  employeeId: "EMP-001",
  designation: "",
  department: "",
  payPeriod: "",
  joiningDate: "",
  panNumber: "",
  pfNumber: "",
  bankName: "",
  accountNumber: "",
  workingDays: 30,
  presentDays: 30,
  earnings: [
    { label: "Basic Salary", amount: 0 },
    { label: "HRA", amount: 0 },
    { label: "Conveyance Allowance", amount: 0 },
    { label: "Special Allowance", amount: 0 },
  ],
  deductions: [
    { label: "Provident Fund (PF)", amount: 0 },
    { label: "Professional Tax", amount: 0 },
    { label: "TDS", amount: 0 },
  ],
};

export default function SalarySlipClient() {
  const { register, watch, setValue, getValues } = useForm<SalaryData>({ defaultValues });
  const data = watch();

  const totalEarnings = (data.earnings || []).reduce((s, e) => s + Number(e.amount || 0), 0);
  const totalDeductions = (data.deductions || []).reduce((s, d) => s + Number(d.amount || 0), 0);
  const netPay = totalEarnings - totalDeductions;

  const fmt = (n: number) =>
    n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  const addEarning = () => {
    const current = getValues("earnings") || [];
    setValue("earnings", [...current, { label: "", amount: 0 }]);
  };
  const removeEarning = (i: number) => {
    const current = getValues("earnings") || [];
    setValue("earnings", current.filter((_, idx) => idx !== i));
  };
  const addDeduction = () => {
    const current = getValues("deductions") || [];
    setValue("deductions", [...current, { label: "", amount: 0 }]);
  };
  const removeDeduction = (i: number) => {
    const current = getValues("deductions") || [];
    setValue("deductions", current.filter((_, idx) => idx !== i));
  };

  const handleDownloadPDF = async () => {
    const originalElement = document.getElementById("salary-preview");
    if (!originalElement) return;

    try {
      const tempContainer = document.createElement("div");
      tempContainer.style.position = "absolute";
      tempContainer.style.left = "-9999px";
      tempContainer.style.top = "-9999px";
      tempContainer.style.width = "800px";
      document.body.appendChild(tempContainer);

      const clonedElement = originalElement.cloneNode(true) as HTMLElement;
      clonedElement.classList.remove("hidden");
      clonedElement.style.display = "block";
      tempContainer.appendChild(clonedElement);

      const { default: html2canvas } = await import("html2canvas");
      const jsPDFModule = await import("jspdf");
      const PDFClass = jsPDFModule.jsPDF || jsPDFModule.default;

      const canvas = await html2canvas(clonedElement, {
        scale: 2,
        useCORS: true,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new PDFClass("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      
      pdf.save(`salary-slip-${data.employeeName || "employee"}.pdf`);

      document.body.removeChild(tempContainer);
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
              <h1 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900">Salary Slip Generator</h1>
              <p className="text-gray-500 text-sm mt-1">
                Generate professional salary slips with earnings &amp; deductions — free PDF download
              </p>
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
            {/* Company */}
            <div className="card p-6">
              <h2 className="font-heading font-bold text-gray-900 mb-5">Company Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <label className="form-label">Company Name *</label>
                  <input {...register("companyName")} placeholder="Your Company Name" className="form-input" />
                </div>
                <div className="sm:col-span-2">
                  <label className="form-label">Company Address</label>
                  <input {...register("companyAddress")} placeholder="Company address" className="form-input" />
                </div>
              </div>
            </div>

            {/* Employee */}
            <div className="card p-6">
              <h2 className="font-heading font-bold text-gray-900 mb-5">Employee Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="form-label">Employee Name *</label>
                  <input {...register("employeeName")} placeholder="Employee Full Name" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Employee ID</label>
                  <input {...register("employeeId")} placeholder="EMP-001" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Designation</label>
                  <input {...register("designation")} placeholder="Software Engineer" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Department</label>
                  <input {...register("department")} placeholder="Engineering" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Pay Period</label>
                  <input {...register("payPeriod")} placeholder="January 2024" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Date of Joining</label>
                  <input {...register("joiningDate")} type="date" className="form-input" />
                </div>
                <div>
                  <label className="form-label">PAN Number</label>
                  <input {...register("panNumber")} placeholder="AAAAA0000A" className="form-input uppercase" />
                </div>
                <div>
                  <label className="form-label">PF Number</label>
                  <input {...register("pfNumber")} placeholder="MH/BAN/0000000/000/0000000" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Working Days</label>
                  <input {...register("workingDays", { valueAsNumber: true })} type="number" min={0} max={31} className="form-input" />
                </div>
                <div>
                  <label className="form-label">Present Days</label>
                  <input {...register("presentDays", { valueAsNumber: true })} type="number" min={0} max={31} className="form-input" />
                </div>
                <div>
                  <label className="form-label">Bank Name</label>
                  <input {...register("bankName")} placeholder="HDFC Bank" className="form-input" />
                </div>
                <div>
                  <label className="form-label">Account Number</label>
                  <input {...register("accountNumber")} placeholder="XXXXXXXX1234" className="form-input" />
                </div>
              </div>
            </div>

            {/* Earnings */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-heading font-bold text-gray-900">Earnings</h2>
                <button type="button" onClick={addEarning} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 text-green-600 text-xs font-semibold hover:bg-green-100 transition-colors">
                  <Plus size={14} /> Add Row
                </button>
              </div>
              <div className="space-y-3">
                {(data.earnings || []).map((_, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <input
                      {...register(`earnings.${i}.label`)}
                      placeholder="Earning type"
                      className="form-input flex-1"
                    />
                    <div className="relative w-36">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">₹</span>
                      <input
                        {...register(`earnings.${i}.amount`, { valueAsNumber: true })}
                        type="number"
                        min={0}
                        step="0.01"
                        placeholder="0"
                        className="form-input pl-7"
                      />
                    </div>
                    {(data.earnings?.length || 0) > 1 && (
                      <button type="button" onClick={() => removeEarning(i)} className="p-2 rounded-lg text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                        <Trash2 size={15} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                <span className="font-semibold text-gray-700 text-sm">Total Earnings</span>
                <span className="font-bold text-green-600">₹{fmt(totalEarnings)}</span>
              </div>
            </div>

            {/* Deductions */}
            <div className="card p-6">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-heading font-bold text-gray-900">Deductions</h2>
                <button type="button" onClick={addDeduction} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-50 text-red-600 text-xs font-semibold hover:bg-red-100 transition-colors">
                  <Plus size={14} /> Add Row
                </button>
              </div>
              <div className="space-y-3">
                {(data.deductions || []).map((_, i) => (
                  <div key={i} className="flex gap-3 items-center">
                    <input
                      {...register(`deductions.${i}.label`)}
                      placeholder="Deduction type"
                      className="form-input flex-1"
                    />
                    <div className="relative w-36">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">₹</span>
                      <input
                        {...register(`deductions.${i}.amount`, { valueAsNumber: true })}
                        type="number"
                        min={0}
                        step="0.01"
                        placeholder="0"
                        className="form-input pl-7"
                      />
                    </div>
                    {(data.deductions?.length || 0) > 1 && (
                      <button type="button" onClick={() => removeDeduction(i)} className="p-2 rounded-lg text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors">
                        <Trash2 size={15} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between">
                <span className="font-semibold text-gray-700 text-sm">Total Deductions</span>
                <span className="font-bold text-red-600">₹{fmt(totalDeductions)}</span>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="flex-1">
            <h2 className="font-heading font-bold text-gray-800 mb-4 no-print">Salary Slip Preview</h2>
            <div id="salary-preview" className="bg-white border border-gray-200 rounded-2xl p-8 text-sm">
              {/* Header */}
              <div className="border-b-2 border-brand-600 pb-6 mb-6 text-center">
                <h1 className="text-2xl font-heading font-extrabold text-brand-700 mb-1">SALARY SLIP</h1>
                <p className="font-bold text-gray-900 text-xl">{data.companyName || "Company Name"}</p>
                {data.companyAddress && <p className="text-gray-500 text-xs mt-1">{data.companyAddress}</p>}
              </div>

              {/* Pay Period */}
              <div className="bg-brand-50 rounded-xl px-5 py-3 mb-6 flex justify-between items-center">
                <span className="text-sm font-medium text-gray-600">Pay Period</span>
                <span className="font-bold text-brand-700">{data.payPeriod || "—"}</span>
              </div>

              {/* Employee Details */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-2 mb-6 text-xs">
                {[
                  ["Employee Name", data.employeeName],
                  ["Employee ID", data.employeeId],
                  ["Designation", data.designation],
                  ["Department", data.department],
                  ["Date of Joining", data.joiningDate],
                  ["PAN Number", data.panNumber],
                  ["PF Number", data.pfNumber],
                  ["Bank Name", data.bankName],
                  ["Account Number", data.accountNumber],
                  ["Working Days", data.workingDays],
                  ["Present Days", data.presentDays],
                  ["LOP Days", (data.workingDays || 0) - (data.presentDays || 0)],
                ].filter(([, v]) => v).map(([label, value]) => (
                  <div key={String(label)} className="flex justify-between border-b border-gray-50 py-1">
                    <span className="text-gray-400">{label}</span>
                    <span className="font-medium text-gray-800">{String(value)}</span>
                  </div>
                ))}
              </div>

              {/* Earnings & Deductions */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <div className="bg-green-600 text-white px-4 py-2 rounded-t-xl text-xs font-bold">EARNINGS</div>
                  <div className="border border-green-200 rounded-b-xl overflow-hidden">
                    {(data.earnings || []).map((e, i) => (
                      <div key={i} className="flex justify-between px-4 py-2 text-xs border-b border-gray-50">
                        <span className="text-gray-600">{e.label || `Earning ${i + 1}`}</span>
                        <span className="font-medium">₹{fmt(Number(e.amount || 0))}</span>
                      </div>
                    ))}
                    <div className="flex justify-between px-4 py-2 bg-green-50">
                      <span className="font-bold text-xs text-gray-800">Total Earnings</span>
                      <span className="font-bold text-xs text-green-600">₹{fmt(totalEarnings)}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-red-500 text-white px-4 py-2 rounded-t-xl text-xs font-bold">DEDUCTIONS</div>
                  <div className="border border-red-200 rounded-b-xl overflow-hidden">
                    {(data.deductions || []).map((d, i) => (
                      <div key={i} className="flex justify-between px-4 py-2 text-xs border-b border-gray-50">
                        <span className="text-gray-600">{d.label || `Deduction ${i + 1}`}</span>
                        <span className="font-medium">₹{fmt(Number(d.amount || 0))}</span>
                      </div>
                    ))}
                    <div className="flex justify-between px-4 py-2 bg-red-50">
                      <span className="font-bold text-xs text-gray-800">Total Deductions</span>
                      <span className="font-bold text-xs text-red-600">₹{fmt(totalDeductions)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Net Pay */}
              <div className="bg-brand-600 text-white rounded-xl px-6 py-4 flex justify-between items-center mb-6">
                <span className="font-bold">NET PAY (Take Home)</span>
                <span className="text-2xl font-extrabold">₹{fmt(netPay)}</span>
              </div>

              <div className="border-t border-gray-100 pt-5 flex justify-between items-end">
                <p className="text-xs text-gray-400">Generated by <span className="text-brand-600 font-semibold">JusBill.online</span></p>
                <div className="text-right">
                  <div className="h-10 border-b border-gray-300 w-36 mb-1" />
                  <p className="text-xs text-gray-400">Employer Signature</p>
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
