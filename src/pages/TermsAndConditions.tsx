import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Scale, AlertCircle, Users } from "lucide-react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-primary/10 to-secondary/10">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <FileText className="w-4 h-4" />
            Legal
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-sm text-muted-foreground mt-4">Last Updated: November 19, 2025</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { icon: FileText, title: "Agreement", desc: "Binding contract" },
              { icon: Scale, title: "Fair Terms", desc: "Clear and balanced" },
              { icon: AlertCircle, title: "Your Rights", desc: "Protected" },
              { icon: Users, title: "Mutual Respect", desc: "Both parties" },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-muted/50 rounded-lg">
                <item.icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                <h3 className="font-bold mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing or using USA Best Cable services, you agree to be bound by these Terms and Conditions. 
                If you do not agree to these terms, please do not use our services. These terms constitute a legally 
                binding agreement between you and USA Best Cable.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">2. Service Description</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                USA Best Cable provides high-speed internet access and related services:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Residential and business internet connectivity</li>
                <li>• Fiber-optic and cable internet services</li>
                <li>• Equipment rental and technical support</li>
                <li>• Optional add-on services and features</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">3. Service Plans and Billing</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>3.1 Service Plans:</strong> We offer various service plans with different speeds and features. 
                You agree to pay the fees for the plan you select.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>3.2 Billing:</strong> Monthly charges are billed in advance. Payment is due upon receipt of invoice.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>3.3 Late Payments:</strong> Late payments may result in service suspension and a reconnection fee.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>3.4 Price Changes:</strong> We reserve the right to change prices with 30 days written notice.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">4. Acceptable Use Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use our services in compliance with all applicable laws and regulations. Prohibited activities include:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Illegal activities or distribution of illegal content</li>
                <li>• Harassment, threats, or abuse of others</li>
                <li>• Spam or unsolicited commercial communications</li>
                <li>• Network attacks or attempts to gain unauthorized access</li>
                <li>• Excessive bandwidth usage that impacts other users</li>
                <li>• Reselling services without written authorization</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">5. Equipment</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>5.1 Rental Equipment:</strong> Equipment provided by USA Best Cable remains our property and must be 
                returned upon service termination.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>5.2 Care and Maintenance:</strong> You are responsible for proper care of equipment and must 
                protect it from damage.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>5.3 Lost or Damaged Equipment:</strong> You may be charged for lost, stolen, or damaged equipment.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">6. Service Availability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                While we strive for 99.9% uptime, service may be interrupted for:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Scheduled maintenance (notice will be provided)</li>
                <li>• Emergency repairs</li>
                <li>• Force majeure events (natural disasters, power failures, etc.)</li>
                <li>• Third-party network issues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">7. Privacy and Data</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your use of our services is also governed by our Privacy Policy. We collect and use data as described 
                in our Privacy Policy to provide and improve our services.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• USA Best Cable is not liable for indirect, incidental, or consequential damages</li>
                <li>• Our liability is limited to the amount you paid in the past 12 months</li>
                <li>• We are not responsible for content accessed through our services</li>
                <li>• We are not liable for damages caused by viruses or malicious software</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">9. Termination</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>9.1 By You:</strong> You may cancel service at any time subject to our refund policy.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>9.2 By Us:</strong> We may suspend or terminate service for violations of these terms, 
                non-payment, or fraudulent activity.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                <strong>9.3 Effect:</strong> Upon termination, you must return all equipment and pay any outstanding charges.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">10. Dispute Resolution</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Any disputes will be resolved through:
              </p>
              <ol className="space-y-2 text-muted-foreground ml-6">
                <li>1. Good faith negotiations</li>
                <li>2. Mediation if negotiations fail</li>
                <li>3. Binding arbitration as a last resort</li>
              </ol>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">11. Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update these terms from time to time. Material changes will be communicated via email or 
                account notification at least 30 days in advance. Continued use of services constitutes acceptance 
                of updated terms.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-4">12. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                For questions about these Terms and Conditions:
              </p>
              <ul className="space-y-2 text-muted-foreground ml-6">
                <li>• Email: legal@usabestcable.com</li>
                <li>• Phone: 888-871-9118</li>
                <li>• Mail: USA Best Cable Legal Department, 123 Tech Boulevard, San Francisco, CA 94105</li>
              </ul>
            </div>

            <div className="bg-accent/10 p-8 rounded-lg mt-12">
              <h3 className="text-2xl font-bold mb-4">Agreement Acknowledgment</h3>
              <p className="text-muted-foreground">
                By using USA Best Cable services, you acknowledge that you have read, understood, and agree to be 
                bound by these Terms and Conditions. If you do not agree, you must discontinue use of our services immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
