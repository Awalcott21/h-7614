
import Header from "../components/Header";
import Hero from "../components/Hero";
import Showroom from "../components/Showroom";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import WebsiteComparison from "../components/WebsiteComparison";
import PackageComparison from "../components/PackageComparison";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <PackageComparison />
        <Showroom />
        <WebsiteComparison />
        <Stats />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
