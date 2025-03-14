import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className="flex flex-col bg-[#e5ece9]">
      <Navbar />
      <Hero />
    </div>
  );
}
