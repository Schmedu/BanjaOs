/** @type {import('next').NextConfig} */
const nextSafe = require('next-safe')

const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  reactStrictMode: true,
  async headers () {
    return [
      {
        source: '/:path*',
        headers: nextSafe({ isDev,
          contentSecurityPolicy: {
            "font-src": ["'self'", "data:"],
            "style-src": ["'self'", "'unsafe-inline'"], // TODO: fix that...
            "script-src": ["'self'", "https://cdn.vercel-insights.com", "https://vitals.vercel-insights.com"],
            "connect-src": ["'self'", "https://cdn.vercel-insights.com", "https://vitals.vercel-insights.com"]
          },
          permissionsPolicy: {
            "geolocation": "'self'"
          }
        }),
      },
    ]
  },
}

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })
// module.exports = withBundleAnalyzer({})
