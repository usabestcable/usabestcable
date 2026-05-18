import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Wrench, Wifi, CheckCircle, ArrowDown, Sparkles } from "lucide-react";
import installationImage from "@/assets/installation.jpg";
import { useState } from "react";

const steps = [
  {
    icon: Calendar,
    title: "Schedule Online",
    description: "Pick a time that works for you - even same-day installation available",
    number: "01",
    color: "from-primary to-secondary",
  },
  {
    icon: Wrench,
    title: "Professional Installation",
    description: "Our certified technicians handle everything from start to finish",
    number: "02",
    color: "from-secondary to-accent",
  },
  {
    icon: Wifi,
    title: "Network Setup",
    description: "We configure your router and connect all your devices",
    number: "03",
    color: "from-accent to-primary",
  },
  {
    icon: CheckCircle,
    title: "Quality Check",
    description: "Speed test and optimization to ensure perfect performance",
    number: "04",
    color: "from-primary to-accent",
  },
];

const InstallationProcess = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 px-4 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-3 rounded-full text-sm font-semibold mb-4 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Easy Setup
            <Sparkles className="w-4 h-4" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 animate-slide-up">
            Get Connected in{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              4 Simple Steps
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-slide-up-delay">
            Professional installation with zero hassle. We'll have you online in no time.
          </p>
        </div>

        {/* Vertical Timeline with Cards */}
        <div className="max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Timeline Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-1/2 top-32 w-0.5 h-24 bg-gradient-to-b from-primary/50 to-primary/20 -ml-px animate-pulse" />
              )}

              <div className={`grid md:grid-cols-2 gap-8 items-center mb-12 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                {/* Step Number & Icon - Left/Right alternating */}
                <div className={`flex ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start md:order-2'} justify-center`}>
                  <div className="relative">
                    <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl animate-float`}
                      style={{ animationDelay: `${index * 0.2}s` }}>
                      <step.icon className="w-16 h-16 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-background border-4 border-border flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Content Card - Right/Left alternating */}
                <Card
                  className={`group p-8 hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary cursor-pointer ${index % 2 === 0 ? '' : 'md:order-1'}`}
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                  style={{
                    transform: activeStep === index ? 'scale(1.05)' : 'scale(1)',
                  }}
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} opacity-20 group-hover:opacity-100 transition-opacity`} />
                    </div>
                    <p className="text-muted-foreground text-lg leading-relaxed group-hover:text-foreground transition-colors">
                      {step.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more
                      <ArrowDown className="w-4 h-4 animate-bounce" />
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Feature Card */}
        <Card className="relative overflow-hidden rounded-3xl shadow-2xl border-2 hover:shadow-primary/20 transition-all duration-500">
          <div className="grid lg:grid-cols-2">
            <div className="relative h-[400px] lg:h-auto">
              <img
                src={installationImage}
                alt="Professional installation service"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/30 to-transparent lg:from-transparent lg:via-transparent lg:to-transparent" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <CheckCircle className="w-4 h-4" />
                  Professional Service
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Installation{" "}
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    Included Free
                  </span>
                </h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  Every installation comes with a certified technician who will set up your 
                  equipment, optimize your network, and ensure everything works perfectly.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {[
                    "Free professional installation",
                    "Equipment setup included",
                    "Same-day available",
                    "90-day warranty"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <Button variant="hero" size="lg" className="w-full group">
                  <span className="flex items-center gap-2">
                    Schedule Installation
                    <Calendar className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default InstallationProcess;
