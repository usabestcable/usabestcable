import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Zap, Shield, Users, Wifi, Activity, Globe, ArrowRight, Sparkles, Star, CheckCircle2, Rocket, TrendingUp, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fiberOpticImage from "@/assets/fiber-optic.jpg";

const Hero = () => {
  const [count, setCount] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [activeCard, setActiveCard] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 500) {
          clearInterval(timer);
          return 500;
        }
        return prev + 10;
      });
    }, 30);

    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { 
      icon: Zap, 
      title: "Lightning Fast", 
      desc: "Up to 10 Gbps speeds",
      gradient: "from-primary to-red-600",
      stat: "10 Gbps"
    },
    { 
      icon: Shield, 
      title: "Ultra Secure", 
      desc: "Enterprise protection",
      gradient: "from-secondary to-blue-600",
      stat: "99.9%"
    },
    { 
      icon: Users, 
      title: "24/7 Support", 
      desc: "Always here for you",
      gradient: "from-primary to-secondary",
      stat: "24/7"
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20 sm:pt-24 pb-12 sm:pb-16 px-4">
      {/* Dynamic Background with USA Wave Pattern */}
      <div className="absolute inset-0">
        <img 
          src={fiberOpticImage} 
          alt="Fiber network" 
          className="w-full h-full object-cover"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95" />
        {/* USA Wave Pattern Overlay */}
        <div className="absolute inset-0 usa-wave-pattern opacity-50" />
        {/* Subtle Star Pattern */}
        <div className="absolute inset-0 usa-star-pattern opacity-30" />
        {/* Abstract Wave Shapes */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-secondary/5 to-transparent" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8 mb-16">
            {/* Badge with USA Stars */}
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-primary/20 via-white/40 to-secondary/20 backdrop-blur-md border-2 border-primary/30 px-8 py-4 rounded-full shadow-2xl animate-fade-in">
              <Star className="w-5 h-5 text-primary fill-primary animate-star-twinkle" />
              <span className="font-bold text-lg">Rated #1 Internet Provider 2025</span>
              <Star className="w-5 h-5 text-secondary fill-secondary animate-star-twinkle" style={{ animationDelay: '0.5s' }} />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-none animate-slide-up">
              <span className="block mb-2 sm:mb-4">Internet That</span>
              <span className="block bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                Never Slows Down
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up-delay">
              Experience blazing-fast fiber-optic speeds up to <span className="font-bold text-primary">10 Gbps</span>. 
              Perfect for gaming, streaming, work, and everything in between.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-fade-in-delay w-full sm:w-auto">
              <Link to="/contact">
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden bg-usa-red-gradient hover:shadow-glow text-white px-8 sm:px-10 py-5 sm:py-7 text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started Now
                    <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Button>
              </Link>
              <a href="tel:8888719118">
                <Button 
                  size="lg"
                  variant="outline"
                  className="group px-8 sm:px-10 py-5 sm:py-7 text-base sm:text-lg font-bold rounded-xl sm:rounded-2xl border-2 border-secondary hover:border-primary hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                  888-871-9118
                </Button>
              </a>
            </div>

            {/* Trust Bar */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-6 sm:pt-8 animate-fade-in-delay text-sm sm:text-base">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <span className="font-semibold">5.0 Rating</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-usa-blue-gradient flex items-center justify-center shadow-lg">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold">{count}K+ Customers</span>
              </div>
              <div className="hidden sm:block h-8 w-px bg-border\" />
              <div className="hidden sm:block h-8 w-px bg-border" />
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
                <span className="font-semibold">No Contracts</span>
              </div>
            </div>
          </div>

          {/* Interactive Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto animate-slide-up-delay">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  onMouseEnter={() => setActiveCard(index)}
                  className={`group relative p-6 sm:p-8 border-2 transition-all duration-500 cursor-pointer overflow-hidden ${
                    activeCard === index 
                      ? 'border-primary shadow-2xl shadow-primary/20 scale-105' 
                      : 'border-border hover:border-primary/50 hover:shadow-xl'
                  }`}
                  style={{
                    transform: activeCard === index ? 'translateY(-8px)' : '',
                  }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Animated Corner Accent */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                  
                  <div className="relative space-y-6">
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-lg">{feature.desc}</p>
                    </div>

                    {/* Stat Badge */}
                    <div className="inline-flex items-center gap-2 bg-background/50 backdrop-blur-sm border border-border px-4 py-2 rounded-full">
                      <TrendingUp className="w-4 h-4 text-green-500" />
                      <span className="font-bold text-lg">{feature.stat}</span>
                    </div>

                    {/* Arrow Indicator */}
                    <div className={`flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                      <span>Learn more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>

                  {/* Active Indicator */}
                  {activeCard === index && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-usa-flag-gradient" />
                  )}
                </Card>
              );
            })}
          </div>

          {/* Quick Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mt-8 sm:mt-12 animate-fade-in-delay">
            {[
              { icon: Globe, label: "Cities Covered", value: "500+", color: "text-blue-500" },
              { icon: Zap, label: "Max Speed", value: "10 Gbps", color: "text-yellow-500" },
              { icon: Activity, label: "Uptime", value: "99.9%", color: "text-green-500" },
              { icon: Wifi, label: "WiFi 6E", value: "Included", color: "text-purple-500" },
            ].map((stat, i) => (
              <Card key={i} className="group p-4 sm:p-6 text-center border-2 hover:border-primary hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1">
                <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
                <div className="text-2xl sm:text-3xl font-bold mb-1 bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
              </Card>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-16 animate-bounce">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <span className="text-sm font-medium">Scroll to explore</span>
              <ArrowRight className="w-5 h-5 rotate-90" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
