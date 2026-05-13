// Invoice types
export interface InvoiceItem {
  id: string;
  description: string;
  hsn: string;
  quantity: number;
  unit: string;
  price: number;
  taxRate: number;
}

export interface InvoiceData {
  invoiceNumber: string;
  invoiceDate: string;
  dueDate: string;
  seller: {
    name: string;
    gstin: string;
    address: string;
    city: string;
    state: string;
    pin: string;
    phone: string;
    email: string;
  };
  buyer: {
    name: string;
    gstin: string;
    address: string;
    city: string;
    state: string;
    pin: string;
    phone: string;
    email: string;
  };
  items: InvoiceItem[];
  supplyType: "intrastate" | "interstate";
  notes: string;
  bankDetails: {
    bankName: string;
    accountNumber: string;
    ifsc: string;
    branch: string;
  };
}

export interface InvoiceTotals {
  taxableAmount: number;
  cgst: number;
  sgst: number;
  igst: number;
  totalTax: number;
  grandTotal: number;
  roundOff: number;
}

// Receipt types
export interface ReceiptData {
  receiptNumber: string;
  date: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  amount: number;
  paymentMethod: string;
  description: string;
  notes: string;
  businessName: string;
  businessAddress: string;
  businessPhone: string;
}

// Salary slip types
export interface EarningItem {
  label: string;
  amount: number;
}

export interface DeductionItem {
  label: string;
  amount: number;
}

export interface SalaryData {
  companyName: string;
  companyAddress: string;
  companyLogo: string;
  employeeName: string;
  employeeId: string;
  designation: string;
  department: string;
  payPeriod: string;
  joiningDate: string;
  panNumber: string;
  pfNumber: string;
  bankName: string;
  accountNumber: string;
  workingDays: number;
  presentDays: number;
  earnings: EarningItem[];
  deductions: DeductionItem[];
}

// Blog types
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  readingTime: string;
  tags: string[];
  coverImage?: string;
}

// FAQ types
export interface FAQItem {
  question: string;
  answer: string;
}

// GST Calculator types
export type GSTRate = 0 | 3 | 5 | 12 | 18 | 28;
export type GSTMode = "add" | "remove";
