import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import News from "@/components/News";
import Forum from "@/components/Forum";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-rever-black">
      <Header />
      <Hero />
      <Features />
      <News />
      <Forum />
      <Footer />
    </div>
  );
};

export default Index;
