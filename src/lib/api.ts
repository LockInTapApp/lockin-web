export type NewsletterResponse = { email: string; source: string };

export type OrderPayload = {
  email: string;
  name: string;
  phone: string;
  address_line: string;
  city: string;
  province: string;
  postal_code: string;
  payment_method: string;
  quantity: number;
  variant: string;
  promo_code?: string;
  country: string;
};

export type OrderResponse = {
  id: string;
  email: string;
  total: number;
  payment_method: string;
  city: string;
  province: string;
};

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

function randomId() {
  return crypto.randomUUID().replace(/-/g, "");
}

export async function subscribeNewsletter(email: string, source = "footer") {
  await delay(450);
  return { data: { email, source } satisfies NewsletterResponse };
}

export async function createOrder(payload: OrderPayload) {
  await delay(700);
  const { UNIT_PRICE_IDR } = await import("./format");
  let total = UNIT_PRICE_IDR * payload.quantity;
  if (payload.promo_code === "LOCKIN10") total = Math.round(total * 0.9);
  else if (payload.promo_code === "FOCUS20") total = Math.round(total * 0.8);

  return {
    data: {
      id: randomId(),
      email: payload.email,
      total,
      payment_method: payload.payment_method,
      city: payload.city,
      province: payload.province,
    } satisfies OrderResponse,
  };
}
