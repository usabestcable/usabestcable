import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Wifi, Shield, Smartphone, Building2, Wrench, TrendingUp, Sparkles, ArrowRight, Zap } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Wifi,
      title: "Residential Internet",
      description: "Lightning-fast fiber internet for your home with speeds up to 5 Gbps. Perfect for streaming, gaming, and working from home.",
      features: ["Unlimited data", "Free installation", "No contracts", "24/7 support"],
      color: "from-primary to-red-600",
      bgColor: "bg-primary/10"
    },
    {
      icon: Building2,
      title: "Business Solutions",
      description: "Reliable, high-speed internet tailored for businesses of all sizes with dedicated support and guaranteed uptime.",
      features: ["Static IP addresses", "Priority support", "99.9% uptime SLA", "Scalable bandwidth"],
      color: "from-secondary to-blue-700",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Smartphone,
      title: "Mobile Internet",
      description: "Stay connected on the go with our 5G mobile hotspot solutions and unlimited data plans.",
      features: ["5G connectivity", "Nationwide coverage", "Portable devices", "No data caps"],
      color: "from-primary to-secondary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Protect your network with advanced cybersecurity features including firewall, antivirus, and parental controls.",
      features: ["Network firewall", "Malware protection", "Parental controls", "VPN included"],
      color: "from-secondary to-primary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: Wrench,
      title: "Technical Support",
      description: "Expert technical assistance available 24/7 via phone, chat, or on-site visits for complex issues.",
      features: ["24/7 availability", "On-site visits", "Remote assistance", "Free diagnostics"],
      color: "from-primary to-red-700",
      bgColor: "bg-primary/10"
    },
    {
      icon: TrendingUp,
      title: "Managed Services",
      description: "Let our experts manage your entire network infrastructure so you can focus on your business.",
      features: ["Network monitoring", "Proactive maintenance", "Performance optimization", "Regular updates"],
      color: "from-secondary to-blue-600",
      bgColor: "bg-secondary/10"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Services
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Comprehensive Solutions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up-delay">
            From residential to enterprise, we have the perfect connectivity solution for every need
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative p-8 hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary overflow-hidden cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  transform: hoveredIndex === index ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative space-y-6">
                  <div className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <service.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                      {service.title}
                      <ArrowRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm group-hover:translate-x-1 transition-transform" style={{ transitionDelay: `${idx * 50}ms` }}>
                        <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mr-3 shrink-0`}>
                          <Zap className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button className="w-full mt-4 group-hover:shadow-lg transition-shadow">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Popular <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Add-Ons</span>
            </h2>
            <p className="text-muted-foreground text-lg">Enhance your experience with premium features</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Premium Support", price: "$9.99/mo", desc: "Priority 24/7 assistance" },
              { name: "Mesh WiFi System", price: "$14.99/mo", desc: "Whole-home coverage" },
              { name: "Smart Home Bundle", price: "$19.99/mo", desc: "IoT device management" },
              { name: "Cloud Backup", price: "$7.99/mo", desc: "Unlimited storage" }
            ].map((addon, index) => (
              <Card key={index} className="group p-6 text-center hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary cursor-pointer hover:-translate-y-2">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{addon.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{addon.desc}</p>
                <p className="text-3xl font-bold text-primary mb-4">{addon.price}</p>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Add to Plan
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="p-12 text-center bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Choose the perfect plan for your needs and experience the USA Best Cable difference today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="group">
                  View Plans
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">Contact Sales</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
