import Link from "next/link";
import { primaryCta } from "@/content/cta";
import { whatsappHref } from "@/lib/whatsapp";

type WhatsappCtaProps = {
  message?: string;
  label?: string;
  className?: string;
};

export function WhatsappCta({
  message,
  label = primaryCta.label,
  className = "btn-cta",
}: WhatsappCtaProps) {
  const href = message ? whatsappHref(message) : primaryCta.href;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {label}
    </Link>
  );
}
