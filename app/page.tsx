import AboutSection from '@/components/AboutSection';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className={`h-auto relative flex flex-col`}>
      <Navbar />
      <Hero />
      <AboutSection />
    </div>
  );
}
