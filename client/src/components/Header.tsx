"use client";

import Link from "next/link";
import Image from "next/image";
import { FC, useRef } from "react";

const Header: FC = () => {
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLTableSectionElement>(null);
  const toggleMenu = () => {
    menuButtonRef.current!.classList.toggle("toggle-btn");
    menuRef.current!.classList.toggle("hidden");
  };

  return (
    <header
      className={`sticky top-0 z-[1000] border-b-[1px] border-[#333] bg-dark-header font-roboto backdrop-blur-lg duration-300`}
    >
      <section className="container flex items-center justify-between gap-12 py-2">
        <Link href="/">
          <Image
            src={"/images/logo.svg"}
            className="h-[40px] w-[40px]"
            width={90}
            height={90}
            alt={"logo"}
            priority={true}
          />
        </Link>
        <nav
          className="hidden items-center gap-4 space-x-8 text-xl sm:flex"
          aria-label="navigation"
        >
          <ul className="flex gap-10 tracking-wide">
            <li>
              <Link
                replace={true}
                href="#skills"
                className={`text-xl text-secondary-text transition duration-300 hover:text-primary-text`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                replace={true}
                href="#projects"
                className={`text-xl text-secondary-text transition duration-300 hover:text-primary-text`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                replace={true}
                href="#contact"
                className={`text-xl text-secondary-text transition duration-300 hover:text-primary-text`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button
          ref={menuButtonRef}
          className="relative h-6 w-6 cursor-pointer text-3xl sm:hidden"
          onClick={toggleMenu}
          aria-label="menu"
        >
          <div className="top-50% after:transition-`all absolute h-[1.5px] w-6 translate-y-[-50%] rounded bg-primary-text transition-all before:absolute before:h-[1.5px] before:w-6 before:-translate-x-3 before:-translate-y-2 before:rounded before:bg-primary-text before:transition-all before:duration-500 before:content-[''] after:absolute after:h-[1.5px] after:w-6 after:-translate-x-3 after:translate-y-2 after:rounded after:bg-primary-text after:duration-500 after:content-['']"></div>
        </button>
      </section>
      <section
        ref={menuRef}
        className={`absolute hidden h-[100vh] w-full origin-top text-primary-text`}
        onClick={toggleMenu}
      >
        <nav className="container bg-dark-links pt-4" aria-label="navigation">
          <ul className="flex flex-col items-start">
            <li className="w-full">
              <Link
                replace={true}
                href="#skills"
                className={`flex w-full py-8  text-lg font-medium transition-colors duration-300 hover:text-secondary-text`}
              >
                Skills
              </Link>
            </li>
            <li className="w-full">
              <Link
                replace={true}
                href="#projects"
                className={`flex w-full py-8 text-lg font-medium transition-colors duration-300 hover:text-secondary-text`}
              >
                Projects
              </Link>
            </li>
            <li className="w-full">
              <Link
                replace={true}
                href="#contact"
                className={`flex w-full py-8 text-lg font-medium transition-colors duration-300 hover:text-secondary-text`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </header>
  );
};

export default Header;
