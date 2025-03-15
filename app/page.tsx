import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <div className={`h-screen relative flex flex-col`}>
      <Navbar />
      <Hero />
    </div>
  );
}
