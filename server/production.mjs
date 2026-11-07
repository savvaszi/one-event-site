import { spawn } from 'node:child_process';
import { createInquiryServer } from './inquiry-assistant.mjs';
import { loadSiteChat } from './site-chat.mjs';

const allowedOrigins = process.env.INQUIRY_ALLOWED_ORIGINS?.split(',').map((origin) => origin.trim());
const server = createInquiryServer({ allowedOrigins, siteIndex: await loadSiteChat() });

server.listen(4322, '127.0.0.1', () => {
  // Give nginx a reduced environment. Only the Node handler uses the API key.
  const nginx = spawn('nginx', ['-g', 'daemon off;'], {
    stdio: 'inherit',
    env: { PATH: process.env.PATH },
  });
  nginx.on('error', (error) => {
    console.error('Failed to start nginx:', error.message);
    process.exitCode = 1;
    server.close();
  });
  nginx.on('exit', (code) => {
    process.exitCode = code ?? 1;
    server.close();
  });
  process.on('SIGTERM', () => nginx.kill('SIGQUIT'));
  process.on('SIGINT', () => nginx.kill('SIGQUIT'));
});
