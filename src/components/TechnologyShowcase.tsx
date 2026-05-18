import { Card } from "@/components/ui/card";
import { Cpu, Database, Lock, Gauge } from "lucide-react";
import networkCenter from "@/assets/network-center.jpg";

const technologies = [
  {
    icon: Cpu,
    title: "Next-Gen Infrastructure",
    description: "State-of-the-art fiber optic network with redundant pathways",
    color: "text-primary",
  },
  {
    icon: Gauge,
    title: "Smart Traffic Management",
    description: "AI-powered routing ensures optimal speeds 24/7",
    color: "text-secondary",
  },
  {
    icon: Lock,
    title: "Military-Grade Encryption",
    description: "Your data is protected with advanced security protocols",
    color: "text-accent",
  },
  {
    icon: Database,
    title: "Distributed Network",
    description: "Multiple data centers for maximum reliability and uptime",
    color: "text-primary",
  },
];

const TechnologyShowcase = () => {
  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
              Technology
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Powered by Advanced Infrastructure</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our cutting-edge network technology delivers unmatched speed and reliability
          </p>
        </div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="group p-8 hover:shadow-card-hover transition-all duration-300 border-2 hover:border-primary"
            >
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <tech.icon className={`w-8 h-8 ${tech.color}`} />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {tech.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="relative overflow-hidden rounded-2xl shadow-2xl border-2">
          <div className="relative h-[500px]">
            <img
              src={networkCenter}
              alt="Network operations center"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-6 p-8 max-w-3xl">
                <h3 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                  Network Operations Center
                </h3>
                <p className="text-xl text-white/90 drop-shadow-md">
                  Our dedicated team monitors network performance around the clock, 
                  ensuring you always get the fastest, most reliable connection possible
                </p>
                <div className="flex flex-wrap justify-center gap-6 pt-4">
                  <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 min-w-[140px]">
                    <div className="text-3xl font-bold text-primary mb-1">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 min-w-[140px]">
                    <div className="text-3xl font-bold text-secondary mb-1">&lt;5ms</div>
                    <div className="text-sm text-muted-foreground">Latency</div>
                  </div>
                  <div className="bg-background/90 backdrop-blur-sm rounded-xl p-4 min-w-[140px]">
                    <div className="text-3xl font-bold text-accent mb-1">24/7</div>
                    <div className="text-sm text-muted-foreground">Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TechnologyShowcase;
