import { Dancing_Script, Raleway } from 'next/font/google';
import Image from 'next/image';
import about from '@/public/about.jpg';

const d_script = Dancing_Script({
  weight: ['400'],
  subsets: ['latin'],
});

const raleway = Raleway({
  weight: ['400'],
  subsets: ['latin'],
});

const AboutSection = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center gap-10 bg-gradient-to-r from-[#986433] to-[#663413]">
      <div className="w-[500px] p-5 flex flex-col gap-5">
        <span
          className={`${d_script.className} antialiased text-6xl text-white`}
        >
          A Cozy Retreat for Coffee Lovers
        </span>
        <p className={`${raleway.className} antialiased text-xl`}>
          Nestled in the heart of the city, Kafa is a warm and inviting coffee
          shop where rich aromas and cozy ambiance create the perfect escape
          from the daily grind. We take pride in crafting expertly brewed coffee
          from the finest ethically sourced beans, offering everything from
          velvety lattes to bold espresso shots. Whether you&apos;re looking for
          a quiet corner to work, a lively spot to catch up with friends, or
          just a comforting cup to start your day, Kafa welcomes you with open
          arms and the perfect brew.
        </p>
      </div>
      <div className="p-5">
        <Image
          className="rounded-md"
          src={about}
          alt="about"
          width={500}
          height={1000}
        />{' '}
      </div>
    </div>
  );
};

export default AboutSection;
