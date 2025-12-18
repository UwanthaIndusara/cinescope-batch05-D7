import { MainNav } from "@/components/main-nav";
import HeroBanner from "@/components/landing/hero-banner";
import FeaturedMovies from "@/components/landing/featured-movies";
import Footer from "@/components/shared/footer";

// RSC - React Server Component
// SSR - Enabled by default
export default function HomePage() {
  return (
    <div className="flex flex-col main-h-screen">
      <MainNav />
      <main className="flex-1">
        <HeroBanner />
        <FeaturedMovies />
      </main>
      <Footer />
    </div>
  );
}
