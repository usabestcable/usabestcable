import { Card } from "@/components/ui/card";
import { Zap, Shield, Headphones, Wifi, Clock, Award, ArrowRight } from "lucide-react";
import { useState } from "react";

const features = [
  {
    icon: Zap,
    title: "Lightning Speed",
    description: "Experience blazing-fast internet with speeds up to 10 Gbps for seamless streaming and gaming.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description: "Built-in security features to protect your network and keep your data safe from threats.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our expert team is always ready to help with any questions or technical issues you may have.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    gradient: "from-secondary/20 to-secondary/5",
  },
  {
    icon: Wifi,
    title: "Wide Coverage",
    description: "Available in 500+ cities nationwide with expanding coverage to reach more communities.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description: "Reliable connectivity you can count on with industry-leading uptime guarantees.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: Award,
    title: "Award-Winning",
    description: "Recognized for exceptional service quality and customer satisfaction year after year.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    gradient: "from-secondary/20 to-secondary/5",
  },
];

const FeaturesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* USA-themed Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 usa-wave-pattern opacity-30" />
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="bg-usa-red-gradient text-white px-6 py-2 rounded-full text-sm font-semibold animate-fade-in shadow-lg">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 animate-slide-up">
            Experience the{" "}
            <span className="block bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
              USA Best Cable Difference
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-slide-up-delay">
            Cutting-edge technology meets exceptional service for an unmatched internet experience
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`group relative p-8 hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary cursor-pointer overflow-hidden
                ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
                ${index === 2 ? 'lg:row-span-2' : ''}
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === index ? 'translateY(-8px)' : 'translateY(0)',
              }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Floating Icon Background */}
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />

              <div className="relative space-y-4">
                {/* Icon with Animation */}
                <div className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color} group-hover:scale-110 transition-transform`} />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold group-hover:text-primary transition-colors flex items-center gap-2">
                    {feature.title}
                    <ArrowRight className="w-5 h-5 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Indicator */}
                <div className="flex items-center gap-2 text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <ArrowRight className="w-4 h-4 animate-pulse" />
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-primary/10 to-transparent rounded-tl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Join thousands of satisfied customers
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-background/50 backdrop-blur-sm border border-border px-6 py-3 rounded-full">
              <span className="text-2xl font-bold text-primary">500+</span>
              <span className="text-sm text-muted-foreground ml-2">Cities</span>
            </div>
            <div className="bg-background/50 backdrop-blur-sm border border-border px-6 py-3 rounded-full">
              <span className="text-2xl font-bold text-secondary">10Gbps</span>
              <span className="text-sm text-muted-foreground ml-2">Max Speed</span>
            </div>
            <div className="bg-background/50 backdrop-blur-sm border border-border px-6 py-3 rounded-full">
              <span className="text-2xl font-bold text-accent">99.9%</span>
              <span className="text-sm text-muted-foreground ml-2">Uptime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
