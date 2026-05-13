"use client";

import { useFormContext } from "react-hook-form";
import type { InvoiceData } from "@/types";
import { calculateInvoiceTotals, calculateItemTotal, numberToWords } from "@/lib/gst";

interface InvoicePreviewProps {
  isProforma?: boolean;
}

export default function InvoicePreview({ isProforma = false }: InvoicePreviewProps) {
  const { watch } = useFormContext<InvoiceData>();
  const data = watch();
  const totals = calculateInvoiceTotals(data.items || [], data.supplyType || "intrastate");

  return (
    <div id="invoice-preview" className="bg-white border border-gray-200 rounded-2xl p-8 text-sm font-sans">
      {/* Header */}
      <div className="flex items-start justify-between border-b-2 border-brand-600 pb-6 mb-6">
        <div>
          <h1 className="text-3xl font-heading font-extrabold text-brand-700 mb-1">
            {isProforma ? "PROFORMA INVOICE" : "TAX INVOICE"}
          </h1>
          <p className="text-xs text-gray-500">GST Invoice as per Indian Tax Laws</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-gray-900 text-lg">
            {data.seller?.name || "Your Business Name"}
          </p>
          <p className="text-gray-500 text-xs mt-0.5">
            {data.seller?.address && `${data.seller.address}, `}
            {data.seller?.city} {data.seller?.state}
          </p>
          {data.seller?.gstin && (
            <p className="text-xs text-gray-600 mt-1">
              GSTIN: <span className="font-mono font-semibold">{data.seller.gstin}</span>
            </p>
          )}
          {data.seller?.phone && <p className="text-xs text-gray-500">{data.seller.phone}</p>}
        </div>
      </div>

      {/* Invoice Meta */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Bill To</p>
          <p className="font-bold text-gray-900">{data.buyer?.name || "Client Name"}</p>
          <p className="text-gray-500 text-xs mt-0.5">
            {data.buyer?.address && `${data.buyer.address}, `}
            {data.buyer?.city} {data.buyer?.state}
          </p>
          {data.buyer?.gstin && (
            <p className="text-xs mt-1">
              GSTIN: <span className="font-mono font-semibold">{data.buyer.gstin}</span>
            </p>
          )}
          {data.buyer?.phone && <p className="text-xs text-gray-500 mt-0.5">{data.buyer.phone}</p>}
        </div>
        <div className="bg-gray-50 rounded-xl p-4 text-right">
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs">
              <span className="text-gray-400 font-medium">Invoice No.</span>
              <span className="font-bold text-gray-800">{data.invoiceNumber || "INV-001"}</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-400 font-medium">Date</span>
              <span className="font-semibold text-gray-700">{data.invoiceDate || "—"}</span>
            </div>
            {data.dueDate && (
              <div className="flex justify-between text-xs">
                <span className="text-gray-400 font-medium">Due Date</span>
                <span className="font-semibold text-gray-700">{data.dueDate}</span>
              </div>
            )}
            <div className="flex justify-between text-xs">
              <span className="text-gray-400 font-medium">Supply Type</span>
              <span className="font-semibold text-gray-700 capitalize">{data.supplyType || "Intrastate"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Items Table */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-brand-600 text-white">
              <th className="px-3 py-2.5 text-left font-semibold rounded-l-lg">#</th>
              <th className="px-3 py-2.5 text-left font-semibold">Description</th>
              <th className="px-3 py-2.5 text-left font-semibold">HSN</th>
              <th className="px-3 py-2.5 text-right font-semibold">Qty</th>
              <th className="px-3 py-2.5 text-right font-semibold">Rate</th>
              <th className="px-3 py-2.5 text-right font-semibold">Taxable</th>
              {data.supplyType === "interstate" ? (
                <th className="px-3 py-2.5 text-right font-semibold">IGST</th>
              ) : (
                <>
                  <th className="px-3 py-2.5 text-right font-semibold">CGST</th>
                  <th className="px-3 py-2.5 text-right font-semibold">SGST</th>
                </>
              )}
              <th className="px-3 py-2.5 text-right font-semibold rounded-r-lg">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {(data.items || []).map((item, i) => {
              const calc = calculateItemTotal(item);
              return (
                <tr key={item.id || i} className="hover:bg-gray-50">
                  <td className="px-3 py-2.5 text-gray-400">{i + 1}</td>
                  <td className="px-3 py-2.5 font-medium text-gray-800">{item.description || "—"}</td>
                  <td className="px-3 py-2.5 text-gray-500">{item.hsn || "—"}</td>
                  <td className="px-3 py-2.5 text-right text-gray-700">{item.quantity} {item.unit}</td>
                  <td className="px-3 py-2.5 text-right text-gray-700">₹{Number(item.price).toFixed(2)}</td>
                  <td className="px-3 py-2.5 text-right text-gray-700">₹{calc.taxableAmount.toFixed(2)}</td>
                  {data.supplyType === "interstate" ? (
                    <td className="px-3 py-2.5 text-right text-gray-700">
                      ₹{calc.igst.toFixed(2)}<br/>
                      <span className="text-gray-400">({item.taxRate}%)</span>
                    </td>
                  ) : (
                    <>
                      <td className="px-3 py-2.5 text-right text-gray-700">
                        ₹{calc.cgst.toFixed(2)}<br/>
                        <span className="text-gray-400">({item.taxRate / 2}%)</span>
                      </td>
                      <td className="px-3 py-2.5 text-right text-gray-700">
                        ₹{calc.sgst.toFixed(2)}<br/>
                        <span className="text-gray-400">({item.taxRate / 2}%)</span>
                      </td>
                    </>
                  )}
                  <td className="px-3 py-2.5 text-right font-bold text-gray-900">₹{calc.total.toFixed(2)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Totals */}
      <div className="flex flex-col sm:flex-row gap-6 justify-between">
        {/* Amount in words */}
        <div className="flex-1">
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Amount in Words</p>
            <p className="text-sm font-semibold text-gray-800 capitalize">
              {numberToWords(totals.grandTotal)}
            </p>
          </div>
          {data.bankDetails?.bankName && (
            <div className="mt-4 bg-gray-50 rounded-xl p-4">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Bank Details</p>
              <div className="space-y-1 text-xs text-gray-700">
                <p><span className="text-gray-400">Bank:</span> {data.bankDetails.bankName}</p>
                <p><span className="text-gray-400">A/C No:</span> {data.bankDetails.accountNumber}</p>
                <p><span className="text-gray-400">IFSC:</span> {data.bankDetails.ifsc}</p>
                {data.bankDetails.branch && <p><span className="text-gray-400">Branch:</span> {data.bankDetails.branch}</p>}
              </div>
            </div>
          )}
        </div>

        {/* Summary */}
        <div className="w-full sm:w-64">
          <div className="bg-gray-50 rounded-xl p-4 space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Taxable Amount</span>
              <span className="font-semibold text-gray-800">₹{totals.taxableAmount.toFixed(2)}</span>
            </div>
            {data.supplyType === "interstate" ? (
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">IGST</span>
                <span className="font-semibold text-gray-800">₹{totals.igst.toFixed(2)}</span>
              </div>
            ) : (
              <>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">CGST</span>
                  <span className="font-semibold text-gray-800">₹{totals.cgst.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-gray-500">SGST</span>
                  <span className="font-semibold text-gray-800">₹{totals.sgst.toFixed(2)}</span>
                </div>
              </>
            )}
            {totals.roundOff !== 0 && (
              <div className="flex justify-between text-xs">
                <span className="text-gray-500">Round Off</span>
                <span className="font-semibold text-gray-800">₹{totals.roundOff.toFixed(2)}</span>
              </div>
            )}
            <div className="border-t border-gray-200 pt-2 mt-2 flex justify-between">
              <span className="font-bold text-gray-900 text-sm">Grand Total</span>
              <span className="font-extrabold text-brand-700 text-base">₹{totals.grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Notes */}
      {data.notes && (
        <div className="mt-6 border-t border-gray-100 pt-5">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Notes / Terms</p>
          <p className="text-xs text-gray-600 leading-relaxed">{data.notes}</p>
        </div>
      )}

      {/* Footer */}
      <div className="mt-8 border-t border-gray-100 pt-5 flex justify-between items-end">
        <p className="text-xs text-gray-400">
          Generated by <span className="text-brand-600 font-semibold">JusBill.online</span>
        </p>
        <div className="text-right">
          <div className="h-10 border-b border-gray-300 w-40 mb-1" />
          <p className="text-xs text-gray-400">Authorised Signatory</p>
        </div>
      </div>
    </div>
  );
}
