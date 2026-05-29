export type NewsletterResponse = { email: string; source: string };

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

export async function subscribeNewsletter(email: string, source = "footer") {
  await delay(450);
  return { data: { email, source } satisfies NewsletterResponse };
}
