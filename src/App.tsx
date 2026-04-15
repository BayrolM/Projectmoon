import { Hero } from "./components/sections/Hero";
import { WhyUs } from "./components/sections/WhyUs";
import { HowItWorks } from "./components/sections/HowItWorks";
import { CTASection } from "./components/sections/CTASection";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { Destinations } from "./components/sections/Destinations";
import { Gallery } from "./components/sections/Gallery";
import { Testimonials } from "./components/sections/Testimonials";
import { FAQ } from "./components/sections/FAQ";
import { ContactForm } from "./components/sections/ContactForm";
import { PackagesSection } from "./components/sections/PackagesSection";
import { CruisesSection } from "./components/sections/CruisesSection";

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
