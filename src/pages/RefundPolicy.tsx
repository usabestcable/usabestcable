import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { RotateCcw, CheckCircle2, Clock, DollarSign } from "lucide-react";

const RefundPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/20 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <RotateCcw className="w-4 h-4" />
            Legal
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Refund Policy</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your satisfaction is our priority. Learn about our flexible refund and cancellation policies.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last Updated: November 19, 2025</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Clock, title: "30-Day", desc: "Money back guarantee" },
              { icon: CheckCircle2, title: "Easy Process", desc: "Simple cancellation" },
              { icon: DollarSign, title: "Full Refund", desc: "No questions asked" },
              { icon: RotateCcw, title: "Quick Processing", desc: "5-7 business days" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-muted/50 rounded-lg">
                <item.icon className="w-8 h-8 mx-auto mb-3 text-secondary" />
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">30-Day Money-Back Guarantee</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We stand behind our service with a 30-day money-back guarantee. If you're not completely satisfied 
                with your USA Best Cable internet service within the first 30 days, you can cancel and receive a full refund.
                No questions asked, no hassle.
              </p>
              <div className="bg-accent/10 p-6 rounded-lg">
                <p className="font-semibold mb-2">What's Covered:</p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Full refund of monthly service fees</li>
                  <li>• Installation fees (if applicable)</li>
                  <li>• Equipment rental charges</li>
                  <li>• Any add-on services purchased</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">How to Request a Refund</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Requesting a refund is simple and straightforward:
              </p>
              <ol className="space-y-4 text-muted-foreground ml-6">
                <li className="flex gap-3">
                  <span className="font-bold text-primary">1.</span>
                  <span>Contact our customer support team via phone (888-871-9118), email (refunds@usabestcable.com), or live chat</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <span>Provide your account information and reason for cancellation (optional)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">3.</span>
                  <span>Schedule equipment return (if applicable)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">4.</span>
                  <span>Receive confirmation of your refund within 24 hours</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">5.</span>
                  <span>Refund processed to your original payment method within 5-7 business days</span>
                </li>
              </ol>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Cancellation After 30 Days</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can cancel your service at any time with no early termination fees. Here's what you need to know:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• No contracts or commitments required</li>
                <li>• Cancel anytime without penalty</li>
                <li>• Service continues until the end of your billing cycle</li>
                <li>• No refund for partial month usage after 30 days</li>
                <li>• Equipment must be returned within 14 days of cancellation</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Equipment Returns</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                If you've rented equipment from USA Best Cable:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Return equipment within 14 days of cancellation</li>
                <li>• We'll provide a prepaid shipping label</li>
                <li>• Equipment must be in good working condition</li>
                <li>• Unreturned equipment may result in a charge of up to $300</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Prorated Refunds</h2>
              <p className="text-muted-foreground leading-relaxed">
                In certain circumstances, we may provide prorated refunds:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6 mt-4">
                <li>• Extended service outages (more than 48 hours)</li>
                <li>• Technical issues that cannot be resolved</li>
                <li>• Service unavailability due to infrastructure problems</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">Non-Refundable Items</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                The following items are not eligible for refund:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Custom installation fees for special requests</li>
                <li>• Third-party service charges</li>
                <li>• Purchased equipment (not rented)</li>
                <li>• Service fees after the 30-day guarantee period</li>
              </ul>
            </div>

            <div className="bg-secondary/10 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Questions About Refunds?</h3>
              <p className="text-muted-foreground mb-4">
                Our customer support team is here to help with any questions about refunds or cancellations.
              </p>
              <p className="font-medium">Email: refunds@usabestcable.com</p>
              <p className="font-medium">Phone: 888-871-9118</p>
              <p className="font-medium">Live Chat: Available 24/7 on our website</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RefundPolicy;
