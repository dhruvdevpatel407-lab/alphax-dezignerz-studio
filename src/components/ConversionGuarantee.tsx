import { CheckCircle2, Clock, Shield } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { Section } from "@/components/Section";
import { conversionGuarantee } from "@/content/conversion";
import { PrimaryCta } from "@/components/PrimaryCta";
import { BookingCta } from "@/components/BookingCta";

const icons = [Shield, Clock, CheckCircle2] as const;

export function ConversionGuarantee() {
  return (
    <Section variant="surface" id="guarantee">
      <FadeIn>
        <span className="label-accent">{conversionGuarantee.eyebrow}</span>
        <h2 className="mt-2 max-w-3xl text-3xl font-bold text-navy sm:text-4xl">
          {conversionGuarantee.headline}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-navy/90 sm:text-lg">
          {conversionGuarantee.subheadline}
        </p>
      </FadeIn>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {conversionGuarantee.points.map((point, i) => {
          const Icon = icons[i] ?? Shield;
          return (
            <FadeIn key={point.title} delay={i * 0.06}>
              <article className="h-full rounded-2xl border border-navy/10 bg-white p-6 shadow-soft">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-bold text-navy">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/85">{point.body}</p>
              </article>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.12}>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <PrimaryCta className="btn-cta px-8 py-3.5 text-sm" />
          <BookingCta className="inline-flex items-center justify-center rounded-full border-2 border-navy px-8 py-3.5 text-sm font-semibold text-navy transition hover:bg-white" />
        </div>
      </FadeIn>
    </Section>
  );
}
