import type { InvoiceItem, InvoiceTotals } from "@/types";

export function calculateItemTotal(item: InvoiceItem): {
  taxableAmount: number;
  cgst: number;
  sgst: number;
  igst: number;
  totalTax: number;
  total: number;
} {
  const taxableAmount = item.quantity * item.price;
  const taxAmount = (taxableAmount * item.taxRate) / 100;
  const halfTax = taxAmount / 2;

  return {
    taxableAmount,
    cgst: halfTax,
    sgst: halfTax,
    igst: taxAmount,
    totalTax: taxAmount,
    total: taxableAmount + taxAmount,
  };
}

export function calculateInvoiceTotals(
  items: InvoiceItem[],
  supplyType: "intrastate" | "interstate"
): InvoiceTotals {
  let taxableAmount = 0;
  let totalCgst = 0;
  let totalSgst = 0;
  let totalIgst = 0;

  items.forEach((item) => {
    const calc = calculateItemTotal(item);
    taxableAmount += calc.taxableAmount;
    if (supplyType === "intrastate") {
      totalCgst += calc.cgst;
      totalSgst += calc.sgst;
    } else {
      totalIgst += calc.igst;
    }
  });

  const totalTax =
    supplyType === "intrastate" ? totalCgst + totalSgst : totalIgst;
  const grandTotal = taxableAmount + totalTax;
  const roundOff = Math.round(grandTotal) - grandTotal;

  return {
    taxableAmount,
    cgst: totalCgst,
    sgst: totalSgst,
    igst: totalIgst,
    totalTax,
    grandTotal: grandTotal + roundOff,
    roundOff,
  };
}

export function calculateGST(
  amount: number,
  rate: number,
  mode: "add" | "remove"
): {
  baseAmount: number;
  cgst: number;
  sgst: number;
  igst: number;
  totalGST: number;
  totalAmount: number;
} {
  let baseAmount: number;
  let totalGST: number;

  if (mode === "add") {
    baseAmount = amount;
    totalGST = (amount * rate) / 100;
  } else {
    baseAmount = (amount * 100) / (100 + rate);
    totalGST = amount - baseAmount;
  }

  return {
    baseAmount: Math.round(baseAmount * 100) / 100,
    cgst: Math.round((totalGST / 2) * 100) / 100,
    sgst: Math.round((totalGST / 2) * 100) / 100,
    igst: Math.round(totalGST * 100) / 100,
    totalGST: Math.round(totalGST * 100) / 100,
    totalAmount: Math.round((baseAmount + totalGST) * 100) / 100,
  };
}

export function numberToWords(num: number): string {
  const ones = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  const convertHundreds = (n: number): string => {
    if (n >= 100) {
      return (
        ones[Math.floor(n / 100)] +
        " Hundred " +
        convertHundreds(n % 100)
      ).trim();
    } else if (n >= 20) {
      return (tens[Math.floor(n / 10)] + " " + ones[n % 10]).trim();
    } else {
      return ones[n];
    }
  };

  if (num === 0) return "Zero";

  const integer = Math.floor(num);
  const decimal = Math.round((num - integer) * 100);

  let result = "";
  if (integer >= 10000000) {
    result += convertHundreds(Math.floor(integer / 10000000)) + " Crore ";
  }
  if (integer >= 100000) {
    result += convertHundreds(Math.floor((integer % 10000000) / 100000)) + " Lakh ";
  }
  if (integer >= 1000) {
    result += convertHundreds(Math.floor((integer % 100000) / 1000)) + " Thousand ";
  }
  result += convertHundreds(integer % 1000);

  result = result.trim() + " Rupees";
  if (decimal > 0) {
    result += " and " + convertHundreds(decimal) + " Paise";
  }
  result += " Only";

  return result;
}

export const GST_RATES = [0, 3, 5, 12, 18, 28] as const;

export const INDIAN_STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman and Nicobar Islands",
  "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu",
  "Delhi",
  "Jammu and Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];
