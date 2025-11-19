import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
  {
    question: "What internet speeds do you offer?",
    answer: "We offer a wide range of speeds from 500 Mbps up to 10 Gbps, suitable for everything from casual browsing to heavy business use and streaming.",
  },
  {
    question: "Is there a data cap on my plan?",
    answer: "No! All USA Best Cable plans come with unlimited data. Stream, download, and browse as much as you want without worrying about data limits.",
  },
  {
    question: "How long does installation take?",
    answer: "Professional installation typically takes 2-4 hours. Our technicians will ensure everything is set up perfectly and answer any questions you have.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Absolutely! You can change your plan at any time. Upgrades are immediate, and downgrades take effect at the start of your next billing cycle.",
  },
  {
    question: "What if I experience connectivity issues?",
    answer: "Our 24/7 support team is always available to help. We also offer remote diagnostics and can dispatch a technician if needed, usually within 24 hours.",
  },
  {
    question: "Do you offer business internet plans?",
    answer: "Yes! We have specialized business plans with features like static IPs, priority support, and custom bandwidth solutions. Contact our business sales team for details.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Animated backgrounds */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 animate-slide-up">
            Frequently Asked <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg animate-slide-up-delay">
            Find answers to common questions about USA Best Cable services
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="group bg-card border-2 border-border rounded-xl px-6 hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-semibold text-lg group-hover:text-primary transition-colors py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-16 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl border-2 border-border hover:border-primary transition-all">
          <MessageCircle className="w-12 h-12 mx-auto mb-4 text-primary" />
          <p className="text-xl font-semibold mb-2">Still have questions?</p>
          <p className="text-muted-foreground mb-6">Our support team is here to help 24/7</p>
          <Link to="/contact">
            <Button variant="hero" size="lg" className="hover:scale-105 transition-transform">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Our Team
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
