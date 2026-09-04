import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { ToolStack } from "@/components/tool-stack";
import { Services } from "@/components/services";
import { Process } from "@/components/process";
import { WhyUs } from "@/components/why-us";
import { UseCases } from "@/components/use-cases";
import { Team } from "@/components/team";
import { Faq, faqs } from "@/components/faq";
import { ContactSection } from "@/components/contact-section";
import { SiteFooter } from "@/components/site-footer";
import { WhatsappFloatButton } from "@/components/whatsapp-float-button";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <SiteHeader />
      <main className="flex flex-col">
        <Hero />
        <ToolStack />
        <Services />
        <Process />
        <WhyUs />
        <UseCases />
        <Team />
        <Faq />
        <ContactSection />
      </main>
      <SiteFooter />
      <WhatsappFloatButton />
    </>
  );
}
