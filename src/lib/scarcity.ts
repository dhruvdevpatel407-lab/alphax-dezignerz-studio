import { discoveryBookingCta } from "@/content/cta";

/** Rolling month label for scarcity strip — stays current without redeploying each month */
export function scarcityBannerCopy(): { text: string; href: string } {
  const month = new Intl.DateTimeFormat("en-IN", {
    month: "long",
    year: "numeric",
  }).format(new Date());

  return {
    text: `Only 2 retainer slots open for ${month} — book a discovery call today →`,
    href: discoveryBookingCta.href,
  };
}
