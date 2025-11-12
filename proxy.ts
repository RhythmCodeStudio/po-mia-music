import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  let cspHeader = "";
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");
  const environment = process.env.NEXT_PUBLIC_ENV || process.env.NODE_ENV;
  const isDevelopment = environment === "development";
  const isPreview = environment === "preview";
  const isProduction = environment === "production";
  const developmentCspHeader = `
    font-src 'self';
    style-src 'self' 'unsafe-inline';
    script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com;
    connect-src 'self' https://api.emailjs.com/;
    img-src 'self' data: blob:;
    frame-src 'none';
  `;
  const previewCspHeader = `
    default-src 'self';
    connect-src 'self' https://api.emailjs.com/ https://vercel.live;
    script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https://vercel.live/ wss://ws-us3.pusher.com https://va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline' https://vercel.live;
    img-src 'self' data: blob: https://vercel.live https://vercel.com;
    font-src 'self' https://vercel.live https://assets.vercel.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self' https://vercel.live;
    upgrade-insecure-requests;
  `;
  const productionCspHeader = `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}';
    connect-src 'self' https://api.emailjs.com/;
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: blob:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    frame-src 'self';
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