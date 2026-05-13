"use client";

import { useState } from "react";
import { Calculator, ArrowRight, RefreshCw } from "lucide-react";
import { calculateGST, GST_RATES } from "@/lib/gst";
import type { GSTRate, GSTMode } from "@/types";
import AdPlaceholder from "@/components/ui/AdPlaceholder";

export default function GSTCalculatorPage() {
  const [amount, setAmount] = useState<string>("");
  const [rate, setRate] = useState<GSTRate>(18);
  const [mode, setMode] = useState<GSTMode>("add");

  const numAmount = parseFloat(amount) || 0;
  const result = numAmount > 0 ? calculateGST(numAmount, rate, mode) : null;

  const fmt = (n: number) =>
    n.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

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
          <h1 className="text-2xl sm:text-3xl font-heading font-bold text-gray-900">GST Calculator</h1>
          <p className="text-gray-500 text-sm mt-1">
            Calculate GST instantly — add or remove GST with CGST, SGST &amp; IGST breakdown
          </p>
        </div>
      </div>

      <div className="container-xl py-10">
        <div className="flex flex-col lg:flex-row gap-8 max-w-5xl mx-auto">
          {/* Calculator Card */}
          <div className="flex-1">
            <div className="card p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <Calculator size={20} className="text-purple-600" />
                </div>
                <h2 className="font-heading font-bold text-gray-900 text-lg">GST Calculator</h2>
              </div>

              <div className="space-y-6">
                {/* Amount */}
                <div>
                  <label className="form-label">Enter Amount (₹)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-semibold">₹</span>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      min={0}
                      step="0.01"
                      className="form-input pl-8 text-lg font-semibold"
                      id="gst-amount-input"
                    />
                  </div>
                </div>

                {/* GST Rate */}
                <div>
                  <label className="form-label">Select GST Rate</label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {GST_RATES.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => setRate(r as GSTRate)}
                        className={`py-3 rounded-xl text-sm font-semibold transition-all ${
                          rate === r
                            ? "bg-brand-600 text-white shadow-md"
                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                      >
                        {r}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mode Toggle */}
                <div>
                  <label className="form-label">Calculation Mode</label>
                  <div className="flex rounded-xl overflow-hidden border border-gray-200">
                    <button
                      type="button"
                      onClick={() => setMode("add")}
                      className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                        mode === "add" ? "bg-brand-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      ➕ Add GST
                    </button>
                    <button
                      type="button"
                      onClick={() => setMode("remove")}
                      className={`flex-1 py-3 text-sm font-semibold transition-colors ${
                        mode === "remove" ? "bg-brand-600 text-white" : "bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      ➖ Remove GST
                    </button>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    {mode === "add"
                      ? "Calculates GST on top of your base amount"
                      : "Extracts GST from a GST-inclusive amount"}
                  </p>
                </div>

                {/* Reset */}
                <button
                  type="button"
                  onClick={() => { setAmount(""); setRate(18); setMode("add"); }}
                  className="btn-secondary w-full text-sm"
                >
                  <RefreshCw size={15} /> Reset Calculator
                </button>
              </div>
            </div>
          </div>

          {/* Result Panel */}
          <div className="flex-1">
            {result ? (
              <div className="space-y-4">
                <div className="card p-8 bg-gradient-to-br from-brand-50 to-accent-50 border-brand-100">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-5">GST Breakdown</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="text-sm font-medium text-gray-600">
                        {mode === "add" ? "Base Amount (Before GST)" : "Base Amount (Extracted)"}
                      </span>
                      <span className="font-bold text-gray-900 text-lg">₹{fmt(result.baseAmount)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">CGST ({rate / 2}%)</span>
                      <span className="font-semibold text-brand-700">₹{fmt(result.cgst)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">SGST ({rate / 2}%)</span>
                      <span className="font-semibold text-brand-700">₹{fmt(result.sgst)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm text-gray-600">IGST ({rate}%) — Interstate</span>
                      <span className="font-semibold text-purple-700">₹{fmt(result.igst)}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-sm font-medium text-gray-600">Total GST</span>
                      <span className="font-bold text-gray-800">₹{fmt(result.totalGST)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="font-bold text-gray-900">
                        {mode === "add" ? "Total Amount (with GST)" : "Original GST-inclusive Amount"}
                      </span>
                      <span className="text-2xl font-extrabold text-brand-700">₹{fmt(result.totalAmount)}</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="card p-5">
                  <h3 className="font-semibold text-gray-800 text-sm mb-3">📌 How it works</h3>
                  {mode === "add" ? (
                    <p className="text-xs text-gray-600 leading-relaxed">
                      You entered ₹{fmt(numAmount)} as the base amount (excluding GST). Adding {rate}% GST
                      gives a total of ₹{fmt(result.totalAmount)}. For intrastate sales, CGST ({rate/2}%) and SGST ({rate/2}%)
                      each apply. For interstate, only IGST ({rate}%) applies.
                    </p>
                  ) : (
                    <p className="text-xs text-gray-600 leading-relaxed">
                      You entered ₹{fmt(numAmount)} as a GST-inclusive amount. The original base amount
                      (before {rate}% GST) is ₹{fmt(result.baseAmount)}. The GST component is ₹{fmt(result.totalGST)}.
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="card p-8 flex flex-col items-center justify-center text-center h-full min-h-[300px]">
                <Calculator size={48} className="text-gray-300 mb-4" />
                <p className="text-gray-400 font-medium">Enter an amount to see the GST breakdown</p>
                <p className="text-gray-300 text-sm mt-2">Supports all GST rates: 0%, 3%, 5%, 12%, 18%, 28%</p>
              </div>
            )}

            {/* Rate Reference */}
            <div className="card p-5 mt-4">
              <h3 className="font-semibold text-gray-800 text-sm mb-3">Common GST Rates in India</h3>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex justify-between"><span>0%</span><span>Essential food items, fresh produce</span></div>
                <div className="flex justify-between"><span>5%</span><span>Household necessities, transport</span></div>
                <div className="flex justify-between"><span>12%</span><span>Processed food, computers</span></div>
                <div className="flex justify-between"><span>18%</span><span>IT services, most goods &amp; services</span></div>
                <div className="flex justify-between"><span>28%</span><span>Luxury goods, automobiles, tobacco</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* Ad */}
        <div className="mt-10 flex justify-center">
          <AdPlaceholder size="leaderboard" label="Footer Ad" />
        </div>
      </div>
    </div>
  );
}
