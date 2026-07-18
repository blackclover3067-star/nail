import Hero from "@/components/marketing/Hero";
import BrandStory from "@/components/marketing/BrandStory";
import Services from "@/components/marketing/Services";
import Gallery from "@/components/marketing/Gallery";
import BeforeAfter from "@/components/marketing/BeforeAfter";
import TrendingDesigns from "@/components/marketing/TrendingDesigns";
import MeetTheArtist from "@/components/marketing/MeetTheArtist";
import Testimonials from "@/components/marketing/Testimonials";
import InstagramFeed from "@/components/marketing/InstagramFeed";
import Pricing from "@/components/marketing/Pricing";
import Membership from "@/components/marketing/Membership";
import BookingSection from "@/components/marketing/BookingSection";
import Location from "@/components/marketing/Location";
import FAQ from "@/components/marketing/FAQ";
import Footer from "@/components/marketing/Footer";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen">
      <Hero />
      <BrandStory />
      <Services />
      <Gallery />
      <BeforeAfter />
      <TrendingDesigns />
      <MeetTheArtist />
      <Testimonials />
      <InstagramFeed />
      <Pricing />
      <Membership />
      <BookingSection />
      <Location />
      <FAQ />
      <Footer />
    </div>
  );
}
