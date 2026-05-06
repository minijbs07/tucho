import HeroSection from "@/components/HeroSection";
import StorySection from "@/components/StorySection";
import MenuPreview from "@/components/MenuPreview";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full flex flex-col min-h-screen">
      <HeroSection />
      <StorySection />
      <MenuPreview />
      <Footer />
    </main>
  );
}
