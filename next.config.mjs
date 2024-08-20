import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPWA({
    dest: "public",         // destination directory for the PWA files
    disable: false,        // disable PWA in the development environment
    register: true,         // register the PWA service worker
    skipWaiting: true,      // skip waiting for service worker activation
})
// export default nextConfig;
