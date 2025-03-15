import Image from 'next/image';
import hero_bg from '@/public/hero-bg.jpg';
import hero_1 from '@/public/hero-1.jpg';

const Hero = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2 p-2 mx-auto gap-10">
      <div className="w-full h-full">
        <Image
          className="w-full h-full object-cover"
          src={hero_bg}
          alt="hero-bg"
          width={1000}
          height={1000}
        />
      </div>
      <Image src={hero_1} alt="hero-bg" width={1000} height={1000} />
    </div>
  );
};

export default Hero;
