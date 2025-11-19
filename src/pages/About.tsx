import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Shield, Users, Award, Target, Sparkles, Rocket, Heart, Zap, TrendingUp, Globe } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            About Us
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-slide-up">
            Connecting <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">Communities</span> Nationwide
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up-delay">
            Since 2015, we've been more than just an ISP – we're your partner in staying connected, 
            delivering blazing-fast, reliable internet to homes and businesses.
          </p>
        </div>
      </section>

      {/* Mission & Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At USA Best Cable, we believe that fast, reliable internet is no longer a luxury – it's a necessity. 
                Our mission is to provide cutting-edge connectivity solutions that empower individuals, families, 
                and businesses to thrive in the digital age.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We're committed to delivering exceptional service, innovative technology, and unwavering support 
                to every customer, every day.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                {[
                  { icon: Rocket, text: "Innovation" },
                  { icon: Heart, text: "Customer First" },
                  { icon: Shield, text: "Reliability" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Users, value: "500K+", label: "Happy Customers", color: "from-primary to-secondary" },
                { icon: Shield, value: "99.9%", label: "Uptime Guarantee", color: "from-secondary to-accent" },
                { icon: Award, value: "50+", label: "Industry Awards", color: "from-accent to-primary" },
                { icon: Target, value: "24/7", label: "Expert Support", color: "from-primary to-accent" },
              ].map((stat, index) => (
                <Card
                  key={index}
                  className="group p-6 text-center hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary cursor-pointer"
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  style={{
                    transform: hoveredStat === index ? 'scale(1.05) translateY(-8px)' : 'scale(1)',
                  }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold mb-2 text-primary">{stat.value}</h3>
                  <p className="text-muted-foreground font-medium">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Core <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              These principles guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Innovation First",
                desc: "We continuously invest in the latest fiber-optic technology and infrastructure to deliver unmatched speed and reliability.",
                color: "from-primary to-secondary"
              },
              {
                icon: Heart,
                title: "Customer Focus",
                desc: "Your satisfaction is our priority. We provide 24/7 support and transparent pricing with no hidden fees or surprises.",
                color: "from-secondary to-accent"
              },
              {
                icon: Globe,
                title: "Community Driven",
                desc: "We're invested in the communities we serve, supporting local initiatives and bridging the digital divide.",
                color: "from-accent to-primary"
              },
            ].map((value, index) => (
              <Card key={index} className="group p-8 hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all relative z-10`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors relative z-10">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed relative z-10">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Leadership Team</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our experienced leadership team brings decades of telecommunications expertise 
              and a shared passion for connecting people.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Sarah Chen", role: "CEO & Founder", color: "from-primary to-secondary" },
              { name: "Michael Rodriguez", role: "CTO", color: "from-secondary to-accent" },
              { name: "Emily Watson", role: "COO", color: "from-accent to-primary" },
              { name: "David Kim", role: "VP of Customer Success", color: "from-primary to-accent" }
            ].map((member, index) => (
              <Card key={index} className="group p-6 text-center hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary cursor-pointer hover:-translate-y-2">
                <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${member.color} mx-auto mb-4 group-hover:scale-110 transition-transform`}></div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg">A decade of innovation and growth</p>
          </div>
          <div className="space-y-8">
            {[
              { year: "2015", title: "Company Founded", desc: "Started with a vision to revolutionize internet connectivity" },
              { year: "2018", title: "100K Customers", desc: "Reached our first major milestone, expanding to 50 cities" },
              { year: "2021", title: "Fiber Network", desc: "Launched our state-of-the-art fiber-optic infrastructure" },
              { year: "2025", title: "500K+ Customers", desc: "Serving over half a million satisfied customers nationwide" },
            ].map((milestone, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform">
                    {milestone.year}
                  </div>
                  {i < 3 && <div className="w-1 h-full bg-gradient-to-b from-primary to-secondary my-2" />}
                </div>
                <Card className="flex-1 p-6 group-hover:shadow-2xl transition-all border-2 group-hover:border-primary">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.desc}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
