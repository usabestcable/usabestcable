import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import supportImage from "@/assets/customer-support.jpg";

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Chat with our support team in real-time for instant assistance.",
    action: "Start Chat",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us an email and we'll respond within 24 hours.",
    action: "Send Email",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Call us directly for immediate help with your connection.",
    action: "Call Now",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const SupportSection = () => {
  return (
    <section id="support" className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">We're Here to Help</h2>
              <p className="text-muted-foreground text-lg">
                Our dedicated support team is available 24/7 to ensure you have the best experience with USA Best Cable.
              </p>
            </div>

            <div className="space-y-4">
              {supportOptions.map((option, index) => (
                <Card
                  key={index}
                  className="group p-6 hover:shadow-card-hover transition-all border-2 hover:border-primary cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-14 h-14 rounded-xl ${option.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                      <option.icon className={`w-7 h-7 ${option.color}`} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {option.title}
                      </h3>
                      <p className="text-muted-foreground">{option.description}</p>
                      <Button variant="link" className="p-0 h-auto font-semibold">
                        {option.action} →
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Card className="relative overflow-hidden rounded-2xl shadow-2xl border-2">
            <img
              src={supportImage}
              alt="Customer support representative"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="bg-background/90 backdrop-blur-sm rounded-xl p-6 space-y-4">
                <h3 className="text-2xl font-bold">Need Assistance?</h3>
                <p className="text-muted-foreground">
                  Our support specialists are standing by to help you with setup, troubleshooting, or any questions.
                </p>
                <div className="flex gap-3">
                  <Link to="/contact" className="flex-1">
                    <Button variant="hero" className="w-full">
                      Contact Support
                    </Button>
                  </Link>
                  <Button variant="outline" className="flex-1">
                    View FAQs
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;
