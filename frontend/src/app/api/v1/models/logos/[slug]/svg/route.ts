import { NextRequest, NextResponse } from "next/server";
import { EMBEDDED_BRAND_SVGS } from "@/lib/brandLogosData";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ slug: string }> }
) {
  const { slug } = await context.params;
  const slugLower = (slug || "").toLowerCase().trim();

  const svg = EMBEDDED_BRAND_SVGS[slugLower];

  if (svg) {
    return new NextResponse(svg, {
      status: 200,
      headers: {
        "Content-Type": "image/svg+xml; charset=utf-8",
        "Cache-Control": "public, max-age=86400, s-maxage=86400, stale-while-revalidate=604800",
      },
    });
  }

  // Graceful fallback SVG if specific brand is unregistered
  const initial = slug ? slug.charAt(0).toUpperCase() : "?";
  const fallbackSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100"><rect width="100" height="100" rx="20" fill="#18181B"/><text x="50" y="55" fill="#E4E4E7" font-family="sans-serif" font-size="44" font-weight="bold" text-anchor="middle" dominant-baseline="central">${initial}</text></svg>`;

  return new NextResponse(fallbackSvg, {
    status: 200,
    headers: {
      "Content-Type": "image/svg+xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
