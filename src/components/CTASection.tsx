import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Zap, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* USA-themed animated backgrounds */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 usa-star-pattern opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>
      
      {/* Floating stars */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-usa-flag-gradient rounded-full animate-float opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        />
      ))}
      
      <div className="container mx-auto relative z-10">
        <Card className="relative overflow-hidden border-2 hover:border-primary transition-all duration-500 hover:shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5" />
          <div className="relative p-12 md:p-20 text-center space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 via-white/30 to-secondary/20 backdrop-blur-sm border-2 border-primary/30 px-6 py-3 rounded-full mb-4 animate-fade-in shadow-lg">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <span className="font-bold text-primary">Limited Time Offer - 50% Off First Month</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto leading-tight animate-slide-up">
              Ready to Experience{" "}
              <span className="bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
                Lightning-Fast Internet?
              </span>
            </h2>
            
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto animate-slide-up-delay">
              Join over <span className="font-bold text-primary">500,000+</span> satisfied customers and upgrade to USA Best Cable today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 sm:pt-6">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="text-lg px-12 py-6 hover:scale-105 transition-transform">
                  <Zap className="w-5 h-5 mr-2" />
                  Get Started Now
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="text-lg px-12 py-6 hover:scale-105 transition-transform">
                  Check Availability
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 pt-8 sm:pt-12 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-muted/50 backdrop-blur-sm hover:bg-muted transition-colors">
                <div className="w-12 h-12 rounded-full bg-usa-red-gradient flex items-center justify-center shadow-lg">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold">No Contracts</span>
                <span className="text-sm text-muted-foreground text-center">Cancel anytime, no hassle</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-muted/50 backdrop-blur-sm hover:bg-muted transition-colors">
                <div className="w-12 h-12 rounded-full bg-usa-blue-gradient flex items-center justify-center shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold">Free Installation</span>
                <span className="text-sm text-muted-foreground text-center">Professional setup included</span>
              </div>
              <div className="flex flex-col items-center gap-3 p-4 rounded-xl bg-muted/50 backdrop-blur-sm hover:bg-muted transition-colors">
                <div className="w-12 h-12 rounded-full bg-usa-red-gradient flex items-center justify-center shadow-lg">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="font-semibold">30-Day Guarantee</span>
                <span className="text-sm text-muted-foreground text-center">Full money-back promise</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;
