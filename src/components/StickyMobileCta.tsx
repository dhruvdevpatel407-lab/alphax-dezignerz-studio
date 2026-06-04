"use client";

import Link from "next/link";
import { Calendar, MessageCircle } from "lucide-react";
import { discoveryBookingCta, primaryCta } from "@/content/cta";

/** Persistent dual CTA on mobile — lifts conversion on long scroll pages */
export function StickyMobileCta() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[45] border-t border-navy/10 bg-white/95 px-3 py-2.5 shadow-[0_-8px_32px_-8px_rgba(26,59,93,0.2)] backdrop-blur-md sm:hidden"
      aria-label="Quick actions"
    >
      <div className="mx-auto flex max-w-lg gap-2">
        <Link
          href={primaryCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-cta flex flex-1 items-center justify-center gap-2 py-3 text-xs font-semibold"
        >
          <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
          Free sample
        </Link>
        <Link
          href={discoveryBookingCta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-navy bg-white py-3 text-xs font-semibold text-navy transition hover:bg-surfaceMuted"
        >
          <Calendar className="h-4 w-4 shrink-0" aria-hidden />
          Book call
        </Link>
      </div>
    </div>
  );
}
