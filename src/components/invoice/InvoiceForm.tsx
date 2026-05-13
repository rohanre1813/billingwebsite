"use client";

import { useFormContext } from "react-hook-form";
import type { InvoiceData } from "@/types";
import { INDIAN_STATES } from "@/lib/gst";
import ItemRow from "./ItemRow";

interface InvoiceFormProps {
  isProforma?: boolean;
}

export default function InvoiceForm({ isProforma = false }: InvoiceFormProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext<InvoiceData>();

  return (
    <div className="space-y-8">
      {/* Invoice Details */}
      <section className="card p-6">
        <h2 className="font-heading font-bold text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-brand-100 text-brand-600 text-xs font-bold flex items-center justify-center">1</span>
          Invoice Details
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div>
            <label className="form-label">
              {isProforma ? "Proforma Invoice No." : "Invoice Number"} *
            </label>
            <input
              {...register("invoiceNumber", { required: "Required" })}
              placeholder={isProforma ? "PI-2024-001" : "INV-2024-001"}
              className="form-input"
            />
            {errors.invoiceNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.invoiceNumber.message}</p>
            )}
          </div>
          <div>
            <label className="form-label">Invoice Date *</label>
            <input
              {...register("invoiceDate", { required: "Required" })}
              type="date"
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">Due Date</label>
            <input {...register("dueDate")} type="date" className="form-input" />
          </div>
          <div>
            <label className="form-label">Supply Type</label>
            <select {...register("supplyType")} className="form-select">
              <option value="intrastate">Intrastate (CGST + SGST)</option>
              <option value="interstate">Interstate (IGST)</option>
            </select>
          </div>
        </div>
      </section>

      {/* Seller Details */}
      <section className="card p-6">
        <h2 className="font-heading font-bold text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-brand-100 text-brand-600 text-xs font-bold flex items-center justify-center">2</span>
          Seller Details (Your Business)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="form-label">Business / Company Name *</label>
            <input
              {...register("seller.name", { required: "Required" })}
              placeholder="Your Business Name"
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">GSTIN</label>
            <input
              {...register("seller.gstin")}
              placeholder="22AAAAA0000A1Z5"
              className="form-input uppercase"
              maxLength={15}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="form-label">Address</label>
            <input
              {...register("seller.address")}
              placeholder="Street address"
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">City</label>
            <input {...register("seller.city")} placeholder="City" className="form-input" />
          </div>
          <div>
            <label className="form-label">State</label>
            <select {...register("seller.state")} className="form-select">
              <option value="">Select State</option>
              {INDIAN_STATES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="form-label">PIN Code</label>
            <input
              {...register("seller.pin")}
              placeholder="400001"
              maxLength={6}
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">Phone</label>
            <input {...register("seller.phone")} placeholder="+91 98765 43210" className="form-input" />
          </div>
          <div>
            <label className="form-label">Email</label>
            <input {...register("seller.email")} type="email" placeholder="you@business.com" className="form-input" />
          </div>
        </div>
      </section>

      {/* Buyer Details */}
      <section className="card p-6">
        <h2 className="font-heading font-bold text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-brand-100 text-brand-600 text-xs font-bold flex items-center justify-center">3</span>
          Buyer Details (Client)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="form-label">Client / Company Name *</label>
            <input
              {...register("buyer.name", { required: "Required" })}
              placeholder="Client Name"
              className="form-input"
            />
          </div>
          {!isProforma && (
            <div>
              <label className="form-label">GSTIN</label>
              <input
                {...register("buyer.gstin")}
                placeholder="22AAAAA0000A1Z5 (optional)"
                className="form-input uppercase"
                maxLength={15}
              />
            </div>
          )}
          <div className="sm:col-span-2">
            <label className="form-label">Address</label>
            <input
              {...register("buyer.address")}
              placeholder="Client address"
              className="form-input"
            />
          </div>
          <div>
            <label className="form-label">City</label>
            <input {...register("buyer.city")} placeholder="City" className="form-input" />
          </div>
          <div>
            <label className="form-label">State</label>
            <select {...register("buyer.state")} className="form-select">
              <option value="">Select State</option>
              {INDIAN_STATES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="form-label">Phone</label>
            <input {...register("buyer.phone")} placeholder="+91 98765 43210" className="form-input" />
          </div>
          <div>
            <label className="form-label">Email</label>
            <input {...register("buyer.email")} type="email" placeholder="client@email.com" className="form-input" />
          </div>
        </div>
      </section>

      {/* Items */}
      <section className="card p-6">
        <h2 className="font-heading font-bold text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-brand-100 text-brand-600 text-xs font-bold flex items-center justify-center">4</span>
          Items / Services
        </h2>
        <ItemRow />
      </section>

      {/* Bank Details */}
      <section className="card p-6">
        <h2 className="font-heading font-bold text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-brand-100 text-brand-600 text-xs font-bold flex items-center justify-center">5</span>
          Bank Details (Optional)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="form-label">Bank Name</label>
            <input {...register("bankDetails.bankName")} placeholder="State Bank of India" className="form-input" />
          </div>
          <div>
            <label className="form-label">Account Number</label>
            <input {...register("bankDetails.accountNumber")} placeholder="XXXXXXXX1234" className="form-input" />
          </div>
          <div>
            <label className="form-label">IFSC Code</label>
            <input {...register("bankDetails.ifsc")} placeholder="SBIN0001234" className="form-input uppercase" />
          </div>
          <div>
            <label className="form-label">Branch</label>
            <input {...register("bankDetails.branch")} placeholder="Branch name" className="form-input" />
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="card p-6">
        <h2 className="font-heading font-bold text-gray-900 mb-5 flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-brand-100 text-brand-600 text-xs font-bold flex items-center justify-center">6</span>
          Notes / Terms
        </h2>
        <textarea
          {...register("notes")}
          rows={3}
          placeholder="Payment terms, thank you note, or any other information..."
          className="form-textarea w-full"
        />
      </section>
    </div>
  );
}
