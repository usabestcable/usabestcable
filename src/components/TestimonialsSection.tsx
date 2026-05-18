import { Card } from "@/components/ui/card";
import { Star, Quote, TrendingUp, Users, Award } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    location: "Austin, TX",
    rating: 5,
    text: "Absolutely love USA Best Cable! The speeds are incredible and the installation was seamless. Best decision for our smart home.",
    avatar: "SJ",
    color: "from-primary to-red-600",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    location: "San Francisco, CA",
    rating: 5,
    text: "Our business relies on stable internet, and USA Best Cable delivers every time. The priority support has been invaluable.",
    avatar: "MC",
    color: "from-secondary to-blue-600",
  },
  {
    name: "Emily Rodriguez",
    role: "Content Creator",
    location: "Miami, FL",
    rating: 5,
    text: "As a streamer, I need fast and reliable internet. USA Best Cable's fiber connection has transformed my workflow completely.",
    avatar: "ER",
    color: "from-primary to-secondary",
  },
  {
    name: "David Park",
    role: "Remote Developer",
    location: "Seattle, WA",
    rating: 5,
    text: "Zero downtime, incredible speeds, and responsive support. USA Best Cable is the gold standard for home internet service.",
    avatar: "DP",
    color: "from-secondary to-primary",
  },
  {
    name: "Lisa Thompson",
    role: "Educator",
    location: "Boston, MA",
    rating: 5,
    text: "Teaching online requires reliable connectivity. USA Best Cable has never let me down. Highly recommended for educators!",
    avatar: "LT",
    color: "from-primary to-red-700",
  },
  {
    name: "James Wilson",
    role: "Gamer",
    location: "Dallas, TX",
    rating: 5,
    text: "Low latency, high speeds, no lag. Perfect for competitive gaming. Finally found an ISP that understands gamers!",
    avatar: "JW",
    color: "from-secondary to-blue-700",
  },
];

const stats = [
  { icon: Users, value: "50K+", label: "Happy Customers", color: "text-primary" },
  { icon: Star, value: "4.9", label: "Average Rating", color: "text-secondary" },
  { icon: Award, value: "15+", label: "Industry Awards", color: "text-accent" },
  { icon: TrendingUp, value: "99.9%", label: "Satisfaction Rate", color: "text-primary" },
];

const TestimonialsSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 px-4">
      {/* USA-themed Background Decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 usa-star-pattern opacity-20" />
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-semibold mb-4 animate-fade-in border-2 border-primary/20 shadow-lg">
            <Star className="w-4 h-4 fill-primary" />
            Customer Reviews
            <Star className="w-4 h-4 fill-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 animate-slide-up">
            Loved by{" "}
            <span className="bg-gradient-to-r from-red-600 via-yellow-400 to-blue-600 bg-clip-text text-transparent">
              Thousands
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-slide-up-delay">
            See what our satisfied customers have to say about their experience
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="group p-6 text-center hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary cursor-pointer hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className={`w-7 h-7 ${stat.color}`} />
              </div>
              <div className={`text-3xl font-bold mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials Masonry Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={`group relative p-8 hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary cursor-pointer overflow-hidden
                ${index === 1 || index === 4 ? 'md:translate-y-8' : ''}
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                transform: hoveredIndex === index ? 'scale(1.05) translateY(0)' : '',
              }}
            >
              {/* Quote Icon Background */}
              <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-24 h-24" />
              </div>

              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

              <div className="relative space-y-4">
                {/* Rating Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent group-hover:scale-125 transition-transform"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground leading-relaxed text-lg group-hover:text-foreground transition-colors">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                    {testimonial.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg group-hover:text-primary transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-primary/20 to-transparent rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </Card>
          ))}
        </div>

        {/* Bottom Trust Badges */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
          <Card className="relative p-8 border-2 hover:border-primary transition-all">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Join Our Growing Community</h3>
                <p className="text-muted-foreground">
                  Trusted by leading companies and thousands of satisfied customers
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-8">
                {["TechCorp", "DataFlow", "CloudNet", "StreamPro"].map((company, i) => (
                  <div
                    key={i}
                    className="font-bold text-xl text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                  >
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
