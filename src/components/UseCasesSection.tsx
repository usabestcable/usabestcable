import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gamepad2, Video, Briefcase, Home } from "lucide-react";
import gamingImage from "@/assets/gaming.jpg";
import remoteWorkImage from "@/assets/remote-work.jpg";
import homeImage from "@/assets/home-internet.jpg";

const useCases = [
  {
    icon: Gamepad2,
    title: "Gaming",
    subtitle: "Zero lag, maximum performance",
    features: ["<5ms latency", "Dedicated gaming QoS", "Port forwarding"],
    image: gamingImage,
    badge: "Pro Gamers",
    badgeColor: "bg-accent",
  },
  {
    icon: Video,
    title: "Streaming",
    subtitle: "4K & 8K ready",
    features: ["Unlimited bandwidth", "No throttling", "Multi-device support"],
    image: homeImage,
    badge: "Content Creators",
    badgeColor: "bg-primary",
  },
  {
    icon: Briefcase,
    title: "Remote Work",
    subtitle: "Reliable video conferencing",
    features: ["Static IP option", "VPN compatible", "Priority routing"],
    image: remoteWorkImage,
    badge: "Work From Home",
    badgeColor: "bg-secondary",
  },
];

const perks = [
  {
    icon: Home,
    title: "Smart Home Integration",
    description: "Seamlessly connect all your IoT devices",
  },
  {
    icon: Video,
    title: "Free Streaming Perks",
    description: "Get 6 months of premium streaming services",
  },
  {
    icon: Briefcase,
    title: "Business Tools",
    description: "Productivity suite and cloud storage included",
  },
  {
    icon: Gamepad2,
    title: "Gaming Optimizations",
    description: "Automatic gaming traffic prioritization",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Perfect for Every Need</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you're gaming, streaming, working from home, or running a business - 
            we have the perfect solution for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {useCases.map((useCase, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-card-hover transition-all duration-300 border-2 hover:border-primary cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`${useCase.badgeColor} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                    {useCase.badge}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="w-12 h-12 rounded-xl bg-background/90 backdrop-blur-sm flex items-center justify-center mb-3">
                    <useCase.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{useCase.title}</h3>
                  <p className="text-white/80 text-sm">{useCase.subtitle}</p>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  {useCase.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Included Perks & Benefits</h3>
            <p className="text-muted-foreground">
              Get more value with every plan
            </p>
          </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {perks.map((perk, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-card-hover transition-all border-2 hover:border-primary group cursor-pointer"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <perk.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {perk.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {perk.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
