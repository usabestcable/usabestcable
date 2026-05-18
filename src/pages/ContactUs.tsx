import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MessageCircle, Mail, Phone, Clock, Sparkles, Send, Headphones } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm border border-primary/30 px-6 py-3 rounded-full text-sm font-semibold mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Get In Touch
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              We're Here to Help
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up-delay">
            Have questions? Our team is ready to assist you. Reach out and we'll respond quickly.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Form */}
            <Card className="p-6 sm:p-8 border-2 hover:shadow-2xl transition-all duration-500">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                <Send className="w-8 h-8 text-primary" />
                Send Us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input type="email" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number (Optional)</label>
                  <Input type="tel" placeholder="(555) 123-4567" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">How Can We Help?</label>
                  <Textarea 
                    placeholder="Tell us about your inquiry..." 
                    rows={6}
                    className="resize-none"
                  />
                </div>
                <Button className="w-full" size="lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4">Multiple Ways to Connect</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Choose your preferred method and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="space-y-4">
                <Card className="group p-6 hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-7 h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-primary transition-colors">Call Us</h3>
                      <p className="text-muted-foreground mb-2">Available 24/7 for your convenience</p>
                      <a href="tel:8888719118" className="font-bold text-lg hover:text-primary transition-colors">888-871-9118</a>
                    </div>
                  </div>
                </Card>

                <Card className="group p-6 hover:shadow-2xl transition-all duration-300 border-2 hover:border-secondary cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-7 h-7 text-secondary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-2 group-hover:text-secondary transition-colors">Live Chat</h3>
                      <p className="text-muted-foreground mb-2">Chat with our support team in real-time</p>
                      <Button variant="outline" size="sm" className="mt-2">Start Chat Now</Button>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Support Hours Card */}
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 border-2">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">24/7 Support Available</h3>
                    <p className="text-muted-foreground">
                      Our customer support team is always ready to help you with any questions or technical issues.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Emergency Support */}
              <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5 border-2 border-accent/30">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center shrink-0">
                    <Headphones className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">Need Urgent Help?</h3>
                    <p className="text-muted-foreground mb-3">
                      For critical technical issues or service outages, contact our emergency support line.
                    </p>
                    <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-white">
                      Emergency Support
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Quick Answers</h2>
            <p className="text-muted-foreground text-lg">Looking for immediate help? Check out these resources</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Help Center", desc: "Browse our knowledge base", link: "Visit Help Center" },
              { title: "Service Status", desc: "Check for outages in your area", link: "Check Status" },
              { title: "Account Portal", desc: "Manage your account online", link: "Go to Portal" }
            ].map((item, i) => (
              <Card key={i} className="p-6 text-center hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground mb-4">{item.desc}</p>
                <Button variant="link" className="group-hover:underline">{item.link} →</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
