import type { AstroIntegration, AstroUserConfig } from 'astro';
import { spawn } from 'node:child_process';
import react from '@astrojs/react';

export default function netlifyCMS() {
  const NetlifyCMSIntegration: AstroIntegration = {
    name: 'netlify-cms',
    hooks: {
      'astro:server:start': () => {
        const proxy = spawn('netlify-cms-proxy-server', {
          stdio: 'inherit',
          // Run in shell on Windows to make sure the npm package can be found.
          shell: process.platform === 'win32',
        });
        process.on('exit', () => proxy.kill());
      },
    },
  };
  return [react(), NetlifyCMSIntegration];
}
