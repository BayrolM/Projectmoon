import { Hero } from "./components/Hero";
import { WhyUs } from "./components/WhyUs";
import { HowItWorks } from "./components/HowItWorks";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Destinations } from "./components/Destinations";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { ContactForm } from "./components/ContactForm";
import { PackagesSection } from "./components/PackagesSection";
import { CruisesSection } from "./components/CruisesSection";

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section - Adding padding-top to account for fixed navbar */}
      <div className="pt-24">
        <Hero />
      </div>

      {/* Destinations Section with Tabs */}
      <Destinations />

      {/* Packages Section (Modularizado) */}
      <PackagesSection />

      {/* Cruises Section (Modularizado) */}
      <CruisesSection />

      {/* Gallery Section */}
      <Gallery />

      {/* Why Us Section */}
      <WhyUs />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Contact Form */}
      <ContactForm />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
