"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, FileText, Receipt, Calculator, FileSpreadsheet, DollarSign } from "lucide-react";

const tools = [
  { label: "GST Invoice Generator", href: "/gst-invoice-generator", icon: FileText },
  { label: "Receipt Generator", href: "/receipt-generator", icon: Receipt },
  { label: "GST Calculator", href: "/gst-calculator", icon: Calculator },
  { label: "Proforma Invoice", href: "/proforma-invoice-generator", icon: FileSpreadsheet },
  { label: "Salary Slip Generator", href: "/salary-slip-generator", icon: DollarSign },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container-xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-brand-gradient flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <span className="text-white font-heading font-bold text-sm">JB</span>
            </div>
            <span className="font-heading font-bold text-xl text-gray-900">
              Jus<span className="text-brand-600">Bill</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-colors">
              Home
            </Link>

            {/* Tools Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-colors"
                onMouseEnter={() => setToolsOpen(true)}
                onMouseLeave={() => setToolsOpen(false)}
              >
                Tools <ChevronDown size={14} className="transition-transform group-hover:rotate-180" />
              </button>
              {toolsOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 py-2 z-50"
                  onMouseEnter={() => setToolsOpen(true)}
                  onMouseLeave={() => setToolsOpen(false)}
                >
                  {tools.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-600 transition-colors"
                    >
                      <tool.icon size={15} className="text-brand-500 shrink-0" />
                      {tool.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-colors">
              Blog
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-colors">
              About
            </Link>
            <Link href="/contact" className="px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:text-brand-600 hover:bg-brand-50 transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/gst-invoice-generator" className="btn-primary text-sm px-5 py-2.5">
              Create Invoice Free
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <div className="container-xl py-4 flex flex-col gap-1">
            <Link href="/" onClick={() => setIsOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 transition-colors">
              Home
            </Link>
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Tools</p>
              {tools.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 px-2 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-600 transition-colors"
                >
                  <tool.icon size={15} className="text-brand-500 shrink-0" />
                  {tool.label}
                </Link>
              ))}
            </div>
            <Link href="/blog" onClick={() => setIsOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 transition-colors">
              Blog
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 transition-colors">
              About
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-600 transition-colors">
              Contact
            </Link>
            <div className="mt-2 pt-3 border-t border-gray-100">
              <Link href="/gst-invoice-generator" onClick={() => setIsOpen(false)} className="btn-primary w-full">
                Create Invoice Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
