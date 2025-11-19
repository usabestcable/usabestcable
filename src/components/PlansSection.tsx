import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Zap, Trophy, Check, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import homeImage from "@/assets/home-internet.jpg";
import businessImage from "@/assets/business-internet.jpg";
import fiberImage from "@/assets/fiber-optic.jpg";

const plans = [
  {
    title: "Home Essential",
    icon: Home,
    speed: "Up to 500 Mbps",
    price: "$49.99/mo",
    features: ["Perfect for streaming", "Connect 10+ devices", "Unlimited data"],
    image: homeImage,
    badge: "Popular",
    badgeColor: "bg-accent",
    gradient: "from-accent/20 to-primary/20",
  },
  {
    title: "Business Pro",
    icon: Building2,
    speed: "Up to 2 Gbps",
    price: "$99.99/mo",
    features: ["Priority support", "Static IP included", "99.9% uptime SLA"],
    image: businessImage,
    badge: "Best Value",
    badgeColor: "bg-primary",
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    title: "Fiber Ultra",
    icon: Zap,
    speed: "Up to 5 Gbps",
    price: "$149.99/mo",
    features: ["Lightning speeds", "Advanced security", "WiFi 6E router"],
    image: fiberImage,
    badge: "Fastest",
    badgeColor: "bg-secondary",
    gradient: "from-secondary/20 to-accent/20",
  },
  {
    title: "Enterprise",
    icon: Trophy,
    speed: "Up to 10 Gbps",
    price: "Custom",
    features: ["Dedicated support", "Custom solutions", "Scalable bandwidth"],
    image: businessImage,
    badge: "Premium",
    badgeColor: "bg-gradient-to-r from-accent to-primary",
    gradient: "from-accent/20 to-primary/20",
  },
];

const PlansSection = () => {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  return (
    <section id="plans" className="py-16 sm:py-20 px-4 bg-muted/30 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 backdrop-blur-sm border border-primary/30 px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <TrendingUp className="w-4 h-4" />
            Pricing Plans
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 animate-slide-up">
            Choose Your <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Perfect Plan</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-slide-up-delay">
            Find the perfect internet speed for your needs with flexible, affordable options
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary cursor-pointer"
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              style={{
                transform: hoveredPlan === index ? 'scale(1.05) translateY(-12px)' : 'scale(1)',
              }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative h-48 overflow-hidden">
                <img
                  src={plan.image}
                  alt={plan.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className={`${plan.badgeColor} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg`}>
                    {plan.badge}
                  </span>
                </div>
              </div>
              
              <div className="p-6 space-y-4 relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all">
                    <plan.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl group-hover:text-primary transition-colors">{plan.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium">{plan.speed}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                        <Check className="w-3 h-3 text-primary group-hover:text-white" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
                    {plan.price}
                  </div>
                  <Link to="/contact" className="w-full block">
                    <Button variant="default" className="w-full group-hover:scale-105 transition-transform">
                      Get Started
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlansSection;
