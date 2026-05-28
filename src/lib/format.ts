export const UNIT_PRICE_IDR = 1_399_000;
export const ORIGINAL_PRICE_IDR = 1_899_000;

export const formatIDR = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(n);
