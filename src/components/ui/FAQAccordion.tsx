"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "@/types";

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-gray-800 text-sm sm:text-base">
              {item.question}
            </span>
            <ChevronDown
              size={18}
              className={`text-brand-500 shrink-0 transition-transform duration-200 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5 bg-white">
              <div className="h-px bg-gray-100 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
