import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Eye, Lock, Database } from "lucide-react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/20 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Shield className="w-4 h-4" />
            Legal
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last Updated: November 19, 2025</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: Shield, title: "Secure", desc: "Your data is encrypted" },
              { icon: Eye, title: "Transparent", desc: "Clear data practices" },
              { icon: Lock, title: "Protected", desc: "Industry standards" },
              { icon: Database, title: "Control", desc: "You own your data" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-muted/50 rounded-lg">
                <item.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">1. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We collect information that you provide directly to us, including when you create an account, 
                subscribe to our services, or contact customer support.
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Personal information (name, email, phone number, address)</li>
                <li>• Payment and billing information</li>
                <li>• Service usage data and network information</li>
                <li>• Communications with customer support</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">2. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to provide, maintain, and improve our services:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• To process your orders and deliver internet services</li>
                <li>• To communicate with you about your account and services</li>
                <li>• To provide customer support and technical assistance</li>
                <li>• To improve our network performance and service quality</li>
                <li>• To detect and prevent fraud or unauthorized access</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">3. Information Sharing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• With your consent or at your direction</li>
                <li>• With service providers who assist in our operations</li>
                <li>• To comply with legal obligations</li>
                <li>• Legal obligations and compliance</li>
                <li>• To protect the rights and safety of USA Best Cable and our users</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate technical and organizational measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. This includes encryption, 
                secure servers, and regular security assessments.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">5. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Access your personal information</li>
                <li>• Correct inaccurate data</li>
                <li>• Request deletion of your data</li>
                <li>• Opt-out of marketing communications</li>
                <li>• Export your data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">6. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to improve your experience, analyze usage patterns, 
                and provide personalized content. You can control cookies through your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">7. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any material changes 
                by posting the new policy on this page and updating the "Last Updated" date.
              </p>
            </div>

            <div className="bg-primary/10 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Questions About Privacy?</h3>
              <p className="text-muted-foreground mb-4">
                If you have any questions or concerns about our privacy practices, please contact us:
              </p>
              <p className="font-medium">Email: privacy@usabestcable.com</p>
              <p className="font-medium">Phone: 888-871-9118</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
