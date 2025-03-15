import Image from 'next/image';
import logo from '@/public/logo.png';
import Link from 'next/link';
import { Search } from 'lucide-react';
import { Inter } from 'next/font/google';

const inter = Inter({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
});

const links = [
  {
    id: 1,
    to: '/',
    label: 'HOME',
  },
  {
    id: 2,
    to: '/coffee',
    label: 'COFFEE',
  },
  {
    id: 3,
    to: '/bakery',
    label: 'BAKERY',
  },
  {
    id: 4,
    to: '/shop',
    label: 'SHOP',
  },
  {
    id: 5,
    to: '/about',
    label: 'ABOUT',
  },
];

const Navbar = () => {
  return (
    <nav className="w-full h-[7vh] flex items-center">
      <div className="flex-1 flex justify-center">
        <Image src={logo} alt="logo" width={80} height={80} />
      </div>
      <div className="flex-1 flex justify-center">
        <ul className="flex space-x-6">
          {links.map((link) => (
            <li
              key={link.id}
              className={`${inter.className} antialiased text-sm md:text-md`}
            >
              <Link
                className="hover:border-b-2 hover:border-red-500 transition-discrete"
                href={link.to}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex justify-center">
        <Search size={20} />
      </div>
    </nav>
  );
};

export default Navbar;
