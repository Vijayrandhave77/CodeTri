"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX } from "react-icons/fi";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-3xl text-[#064268]"
      >
        <FiMenu />
      </button>

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        ></div>
      )}

      <aside
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-xl z-50 md:hidden transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b-[0.5px] border-black/10">
          <Image
            src="/sublogo.png"
            width={90}
            height={45}
            alt="KodeTri Logo"
            className="object-contain"
          />

          <button
            onClick={() => setOpen(false)}
            className="text-3xl text-[#064268]"
          >
            <FiX />
          </button>
        </div>

        <nav className="flex flex-col gap-6 p-6 text-lg font-medium">
          <Link
            onClick={() => setOpen(false)}
            href="/"
            className="hover:text-[#064268]"
          >
            Home
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/about"
            className="hover:text-[#064268]"
          >
            About
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/services"
            className="hover:text-[#064268]"
          >
            Services
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/portfolio"
            className="hover:text-[#064268]"
          >
            Portfolio
          </Link>
          <Link
            onClick={() => setOpen(false)}
            href="/blog"
            className="hover:text-[#064268]"
          >
            Blog
          </Link>

          <Link
            onClick={() => setOpen(false)}
            href="/contact"
            className="relative px-5 py-2 font-medium group rounded-lg overflow-hidden w-fit"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-[#064268] to-[#4DB7FF] rounded-lg"></span>
            <span className="absolute inset-[2px] bg-gradient-to-r from-[#E9F3FA] to-white rounded-lg"></span>
            <span className="relative text-[#064268]">Contact</span>
          </Link>
        </nav>
      </aside>
    </>
  );
};

export default MobileMenu;
