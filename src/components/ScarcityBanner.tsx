"use client";

import { scarcityBannerCopy } from "@/lib/scarcity";

/** Top blue strip — external Calendly link uses `<a>` (not Next `Link`) */
export function ScarcityBanner() {
  const { text, href } = scarcityBannerCopy();

  return (
    <div
      className="relative z-[60] border-b border-white/10 px-4 py-2.5 text-center text-sm font-semibold text-white"
      style={{ backgroundColor: "#2E4BDB" }}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block transition hover:underline"
      >
        {text}
      </a>
    </div>
  );
}
