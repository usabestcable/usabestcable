import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Wifi, Shield, Cloud, Lock, Package } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import smartHomeImage from "@/assets/smart-home.jpg";

const CustomizeSection = () => {
  const [hoveredAddon, setHoveredAddon] = useState<number | null>(null);

  const addons = [
    { name: "Premium WiFi 6E Router", price: "+$10/mo", popular: true, icon: Wifi, gradient: "from-primary to-secondary" },
    { name: "Static IP Address", price: "+$15/mo", popular: false, icon: Shield, gradient: "from-secondary to-accent" },
    { name: "Unlimited Cloud Storage", price: "+$8/mo", popular: true, icon: Cloud, gradient: "from-accent to-primary" },
    { name: "Advanced Security Suite", price: "+$12/mo", popular: false, icon: Lock, gradient: "from-primary to-accent" },
  ];

  const features = [
    "Mix and match any plan with add-ons",
    "No contracts or commitments",
    "Change your package anytime",
    "24/7 priority support included",
  ];

  return (
    <section className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Animated backgrounds */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/10 rounded-full animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        />
      ))}
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <Card className="group relative overflow-hidden rounded-2xl shadow-2xl border-2 bg-gradient-to-br from-primary/5 to-secondary/5 p-6 sm:p-8 lg:p-12 hover:shadow-3xl hover:border-primary transition-all duration-500">
            <div className="space-y-6">
              <div className="inline-block animate-fade-in">
                <span className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 w-fit">
                  <Sparkles className="w-4 h-4 animate-pulse" />
                  Customize It
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold animate-slide-up">
                Build Your Perfect{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Internet Package
                </span>
              </h2>
              
              <p className="text-muted-foreground text-lg leading-relaxed animate-slide-up-delay">
                Tailor your internet service to match your lifestyle. Add premium features and services to create the perfect connectivity solution for your home or business.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group/feature">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0 group-hover/feature:scale-110 transition-transform">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground font-medium group-hover/feature:text-primary transition-colors">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {addons.map((addon, index) => (
                  <Card 
                    key={index} 
                    className="p-4 border-2 hover:border-primary transition-all duration-300 cursor-pointer group/addon relative overflow-hidden"
                    onMouseEnter={() => setHoveredAddon(index)}
                    onMouseLeave={() => setHoveredAddon(null)}
                    style={{
                      transform: hoveredAddon === index ? 'scale(1.05)' : 'scale(1)',
                    }}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${addon.gradient} opacity-0 group-hover/addon:opacity-10 transition-opacity`} />
                    <div className="relative space-y-3">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${addon.gradient} flex items-center justify-center group-hover/addon:scale-110 group-hover/addon:rotate-6 transition-all`}>
                        <addon.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-sm font-bold group-hover/addon:text-primary transition-colors">
                        {addon.name}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-primary font-bold">{addon.price}</div>
                        {addon.popular && (
                          <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded-full font-semibold">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Link to="/contact" className="w-full block">
                <Button variant="hero" size="lg" className="w-full hover:scale-105 transition-transform">
                  Customize Your Plan
                </Button>
              </Link>
            </div>
          </Card>

          <Card className="group relative overflow-hidden rounded-2xl shadow-2xl border-2 h-full hover:shadow-3xl hover:border-primary transition-all duration-500">
            <img
              src={smartHomeImage}
              alt="Smart home with connected devices"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-white">Smart Home Ready</h3>
                <p className="text-white/90 text-lg">
                  Connect all your devices seamlessly with our advanced network technology
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30 hover:bg-white/30 transition-colors">
                    50+ Devices
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30 hover:bg-white/30 transition-colors">
                    WiFi 6E
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold border border-white/30 hover:bg-white/30 transition-colors">
                    IoT Support
                  </span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CustomizeSection;
