import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/sublogo.png" width={110} height={40} alt="logo" />
        </Link>

        <nav className="hidden md:flex space-x-8">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-gray-700 font-medium hover:text-blue-600 transition"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <nav className="md:hidden flex gap-4 text-sm">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-gray-700 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
