import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className="bg-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 flex justify-between items-center h-20">
        <Link href="/">
          <Image
            src="/sublogo.png"
            alt="KodeTri Logo"
            width={100}
            height={50}
            className="object-contain"
          />
        </Link>

        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="hover:text-[#064268] font-medium">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#064268] font-medium">
            About
          </Link>
          <Link href="/services" className="hover:text-[#064268] font-medium">
            Services
          </Link>
          <Link href="/portfolio" className="hover:text-[#064268] font-medium">
            Portfolio
          </Link>
          <Link href="/blog" className="hover:text-[#064268] font-medium">
            Blog
          </Link>
           <Link href="/contact" className="hover:text-[#064268] font-medium">
            Contact Us
          </Link>
          <Link
            href="/contact"
            className="relative px-5 py-2 font-medium group"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#064268] to-[#4DB7FF] rounded-lg"></span>

            <span className="absolute inset-[2px] bg-gradient-to-r from-[#E9F3FA] to-white rounded-lg group-hover:brightness-95 transition duration-300"></span>

            <span className="relative text-[#064268] group-hover:text-[#0A58CD] transition duration-300">
              Contact
            </span>
          </Link>
        </nav>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
