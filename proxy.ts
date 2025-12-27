import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  let cspHeader = "";
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const environment = process.env.NEXT_PUBLIC_ENV || process.env.NODE_ENV;
  const isDevelopment = environment === "development";
  const isPreview = environment === "preview";
  const isProduction = environment === "production";
  const developmentCspHeader = `
    font-src 'self' https://fonts.gstatic.com;
    style-src 'self' 'unsafe-inline';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com;
    connect-src 'self' 
    https://api.stack-auth.com/api/v1/projects/current
    https://api.emailjs.com/
    https://vercel.live
    https://vercel.com
    https://api.stack-auth.com
    https://api.stack-auth.com/
    https://api.stack-auth.com/api/v1/projects/current
    https://api.stack-auth.com/health
    https://app.stack-auth.com
    https://app.stack-auth.com/
    https://va.vercel-scripts.com
    https://va.vercel-scripts.com/v1/script.debug.js
    https://1.1.1.1;
    img-src 'self' data: blob:;
    frame-src https://www.youtube.com/;
  `;
  const previewCspHeader = `
    default-src 'self';
    connect-src 'self' https://api.emailjs.com/ https://vercel.live https://vercel.com https://api.stack-auth.com/api/v1/projects/current;
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://vercel.live https://va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline' https://vercel.live;
    img-src 'self' data: blob: https://vercel.live https://vercel.com;
    font-src 'self' https://vercel.live https://assets.vercel.com https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' https://vercel.live https://www.youtube.com/;
    upgrade-insecure-requests;
  `;
  const productionCspHeader = `
    default-src 'self';
    connect-src 'self' https://api.emailjs.com/ https://vercel.live https://vercel.com https://api.stack-auth.com/api/v1/projects/current;
    script-src 'self' 'nonce-${nonce}' https://vercel.live https://va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline' https://vercel.live;
    img-src 'self' data: blob: https://vercel.live https://vercel.com;
    font-src 'self' https://vercel.live/ https://assets.vercel.com https://fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' https://vercel.live https://www.youtube.com/;
    upgrade-insecure-requests;
  `;

  if (isDevelopment) {
    cspHeader = developmentCspHeader;
  } else if (isPreview) {
    cspHeader = previewCspHeader;
  } else if (isProduction) {
    cspHeader = productionCspHeader;
  }

  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, " ")
    .trim();

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);
  requestHeaders.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
  response.headers.set(
    "Content-Security-Policy",
    contentSecurityPolicyHeaderValue
  );

  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Content-Type-Options", "nosniff");

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};