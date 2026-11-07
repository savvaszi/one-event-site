import { createInquiryServer } from './inquiry-assistant.mjs';

const allowedOrigins = process.env.INQUIRY_ALLOWED_ORIGINS?.split(',').map((origin) => origin.trim());
const port = Number(process.env.INQUIRY_PORT ?? 4322);
const host = process.env.INQUIRY_HOST ?? '127.0.0.1';

createInquiryServer({ allowedOrigins }).listen(port, host, () => {
  console.log(`Inquiry assistant listening on ${host}:${port}`);
});
