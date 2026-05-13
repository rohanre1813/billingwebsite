"use client";

import { useFieldArray, useFormContext } from "react-hook-form";
import { Plus, Trash2 } from "lucide-react";
import type { InvoiceData } from "@/types";
import { GST_RATES } from "@/lib/gst";

export default function ItemRow() {
  const { register, control, watch } = useFormContext<InvoiceData>();
  const { fields, append, remove } = useFieldArray({ control, name: "items" });

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-heading font-semibold text-gray-800 text-sm">
          Items / Services
        </h3>
        <button
          type="button"
          onClick={() =>
            append({
              id: crypto.randomUUID(),
              description: "",
              hsn: "",
              quantity: 1,
              unit: "Nos",
              price: 0,
              taxRate: 18,
            })
          }
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-50 text-brand-600 text-xs font-semibold hover:bg-brand-100 transition-colors"
        >
          <Plus size={14} /> Add Item
        </button>
      </div>

      <div className="overflow-x-auto rounded-xl border border-gray-200">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-50 border-b border-gray-200">
              <th className="text-left px-3 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide w-8">#</th>
              <th className="text-left px-3 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide min-w-[180px]">Description</th>
              <th className="text-left px-3 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide w-24">HSN/SAC</th>
              <th className="text-left px-3 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide w-16">Qty</th>
              <th className="text-left px-3 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide w-20">Unit</th>
              <th className="text-left px-3 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide w-28">Price (₹)</th>
              <th className="text-left px-3 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide w-24">GST %</th>
              <th className="text-left px-3 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide w-28">Amount (₹)</th>
              <th className="px-3 py-3 w-10"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {fields.map((field, index) => {
              const qty = Number(watch(`items.${index}.quantity`) || 0);
              const price = Number(watch(`items.${index}.price`) || 0);
              const taxRate = Number(watch(`items.${index}.taxRate`) || 0);
              const taxable = qty * price;
              const total = taxable + (taxable * taxRate) / 100;

              return (
                <tr key={field.id} className="bg-white hover:bg-gray-50 transition-colors">
                  <td className="px-3 py-3 text-gray-400 text-xs">{index + 1}</td>
                  <td className="px-3 py-2">
                    <input
                      {...register(`items.${index}.description`)}
                      placeholder="Item description"
                      className="form-input py-1.5 text-xs"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      {...register(`items.${index}.hsn`)}
                      placeholder="HSN/SAC"
                      className="form-input py-1.5 text-xs"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      {...register(`items.${index}.quantity`, { valueAsNumber: true })}
                      type="number"
                      min={0}
                      step="0.01"
                      className="form-input py-1.5 text-xs"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <select {...register(`items.${index}.unit`)} className="form-select py-1.5 text-xs">
                      {["Nos", "Kg", "Ltr", "Mtr", "Box", "Pcs", "Set", "Hr", "Day", "Job"].map((u) => (
                        <option key={u}>{u}</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-3 py-2">
                    <input
                      {...register(`items.${index}.price`, { valueAsNumber: true })}
                      type="number"
                      min={0}
                      step="0.01"
                      placeholder="0.00"
                      className="form-input py-1.5 text-xs"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <select {...register(`items.${index}.taxRate`, { valueAsNumber: true })} className="form-select py-1.5 text-xs">
                      {GST_RATES.map((r) => (
                        <option key={r} value={r}>{r}%</option>
                      ))}
                    </select>
                  </td>
                  <td className="px-3 py-2 text-right font-medium text-gray-800 text-xs">
                    ₹{total.toFixed(2)}
                  </td>
                  <td className="px-3 py-2">
                    {fields.length > 1 && (
                      <button
                        type="button"
                        onClick={() => remove(index)}
                        className="p-1.5 rounded-lg text-red-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
