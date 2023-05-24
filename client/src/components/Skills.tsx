"use client";

import { useRef, useEffect } from "react";

import Link from "next/link";
import Image from "next/dist/client/image";

const Skills = () => {
  const paragraph = useRef<HTMLDivElement | null>(null);
  const skills = useRef<HTMLUListElement | null>(null);
  const langagues = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("translate-x-[0]", "opacity-100");
        }
      });
    });

    observer.observe(paragraph.current!);

    skills.current!.querySelectorAll("li").forEach((li) => {
      observer.observe(li);
    });

    langagues.current!.querySelectorAll("li").forEach((li) => {
      observer.observe(li);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <h2 className="title text-shadow flex w-full items-center justify-center pb-10 pt-2 text-4xl text-primary-text">
        Skills
      </h2>
      <div id="langagues" className="mb-10 leading-8 text-primary-text">
        <p
          ref={paragraph}
          id="typewriter"
          className="mb-6 translate-x-[-100%] text-xl opacity-0 transition duration-500 sm:text-2xl"
        >
          I have expertise in a range of programming languages and technologies,
          including:{" "}
        </p>
        <ul
          ref={skills}
          className="flex list-disc flex-col gap-4 overflow-hidden pl-8 text-lg sm:text-xl"
        >
          <li className="translate-x-[-100%] opacity-0 transition duration-1000">
            JavaScript, with a focus on Node.js and Express.js for server-side
            development
          </li>
          <li className="translate-x-[-100%] opacity-0 transition duration-1000">
            React, tailwind and Next.js, with a focus on building dynamic and
            responsive user interfaces
          </li>
          <li className="translate-x-[-100%] opacity-0 transition duration-1000">
            TypeScript, with a focus on improving code quality
          </li>
          <li className="translate-x-[-100%] opacity-0 transition duration-1000">
            MongoDB, with a focus on implementing a scalable database
          </li>
          <li className="translate-x-[-100%] opacity-0 transition duration-1000">
            Python, with a focus on data analysis
          </li>
          <li className="translate-x-[-100%] opacity-0 transition duration-1000">
            Web3, with a focus on building decentralized applications using
            Motoko
          </li>
        </ul>
      </div>
      <ul
        ref={langagues}
        className="item-center flex flex-wrap justify-center gap-6"
      >
        <li
          data-lang={"TypeScript"}
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[500ms]'
        >
          <Link
            replace={true}
            scroll
            target={"_blank"}
            href={"https://www.typescriptlang.org/"}
            className={
              "flex rounded-lg p-2 transition duration-300 hover:bg-dark-hover-secondary-bg lg:p-4"
            }
          >
            <Image
              width={1200}
              height={1200}
              src="/images/typescript.png"
              alt="typescript"
              className="h-[50px] w-[50px] sm:h-[64px] sm:w-[64px] lg:h-[80px] lg:w-[80px]"
            />
          </Link>
        </li>
        <li
          data-lang={"Next.js"}
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[700ms]'
        >
          <Link
            replace={true}
            scroll
            target={"_blank"}
            href={"https://nextjs.org/"}
            className={
              "flex rounded-lg p-2 transition duration-300 hover:bg-dark-hover-secondary-bg lg:p-4"
            }
          >
            <Image
              width={1200}
              height={1200}
              src="/images/nextjs.png"
              alt="nextjs"
              className="h-[50px] w-[50px] sm:h-[64px] sm:w-[64px] lg:h-[80px] lg:w-[80px]"
            />
          </Link>
        </li>
        <li
          data-lang={"Node.js"}
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[800ms]'
        >
          <Link
            replace={true}
            scroll
            target={"_blank"}
            href={"https://nodejs.org/"}
            className="flex rounded-lg px-[10.5px] py-2 transition duration-300 hover:bg-dark-hover-secondary-bg lg:px-[18.5px] lg:py-4"
          >
            <Image
              width={1200}
              height={1200}
              src="/images/nodejs.png"
              alt="nodejs"
              className="h-[50px] w-[45px] sm:h-[64px] sm:w-[59px] lg:h-[80px] lg:w-[75px]"
            />
          </Link>
        </li>
        <li
          data-lang={"Motoko"}
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[1000ms]'
        >
          <Link
            replace={true}
            scroll
            target={"_blank"}
            href={"https://internetcomputer.org/"}
            className={
              "flex rounded-lg p-2 transition duration-300 hover:bg-dark-hover-secondary-bg lg:p-4"
            }
          >
            <Image
              width={1200}
              height={1200}
              src="/images/motoko.png"
              alt="motoko"
              className="h-[50px] w-[50px] sm:h-[64px] sm:w-[64px] lg:h-[80px] lg:w-[80px]"
            />
          </Link>
        </li>
        <li
          data-lang={"MongoDB"}
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[1200ms]'
        >
          <Link
            replace={true}
            scroll
            target={"_blank"}
            href={"https://www.mongodb.com/"}
            className="flex rounded-lg px-[18px] py-2 transition duration-300 hover:bg-dark-hover-secondary-bg lg:px-[26px] lg:py-4"
          >
            <Image
              width={1200}
              height={1200}
              src="/images/mongodb.png"
              alt="mondodb"
              className="h-[50px] w-[30px] sm:h-[64px] sm:w-[44px] lg:h-[80px] lg:w-[60px]"
            />
          </Link>
        </li>
        <li
          data-lang={"web3"}
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[1400ms]'
        >
          <Link
            replace={true}
            scroll
            target={"_blank"}
            href={"https://web3.foundation/"}
            className="flex rounded-lg p-2 transition duration-300 hover:bg-dark-hover-secondary-bg lg:p-4"
          >
            <Image
              width={1200}
              height={1200}
              src="/images/web3.png"
              alt="web3"
              className="h-[50px] w-[50px] sm:h-[64px] sm:w-[64px] lg:h-[80px] lg:w-[80px]"
            />
          </Link>
        </li>
        <li
          data-lang={"Tailwindcss"}
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[1600ms]'
        >
          <Link
            replace={true}
            scroll
            target={"_blank"}
            href={"https://tailwindcss.com"}
            className={
              "flex rounded-lg p-2 transition duration-300 hover:bg-dark-hover-secondary-bg lg:p-4"
            }
          >
            <Image
              width={1200}
              height={1200}
              src="/images/tailwind.png"
              alt="tailwindcss"
              className="h-[50px] w-[50px] sm:h-[64px] sm:w-[64px] lg:h-[80px] lg:w-[80px]"
            />
          </Link>
        </li>
        <li
          data-lang={"React"}
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[1800ms]'
        >
          <Link
            replace={true}
            scroll
            target={"_blank"}
            href={"https://react.dev"}
            className={
              "flex rounded-lg p-2 transition duration-300 hover:bg-dark-hover-secondary-bg lg:p-4"
            }
          >
            <Image
              width={1200}
              height={1200}
              src="/images/react.png"
              alt="react"
              className="h-[50px] w-[50px] sm:h-[64px] sm:w-[64px] lg:h-[80px] lg:w-[80px]"
            />
          </Link>
        </li>
        <li
          data-lang={"Python"}
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border  border-dark-border font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[2000ms]'
        >
          <Link
            replace={true}
            scroll
            target={"_blank"}
            href={"https://www.python.org/"}
            className={
              "flex rounded-lg p-2 transition duration-300 hover:bg-dark-hover-secondary-bg lg:p-4"
            }
          >
            <Image
              width={1200}
              height={1200}
              src="/images/python.png"
              alt="python"
              className="h-[50px] w-[50px] sm:h-[64px] sm:w-[64px] lg:h-[80px] lg:w-[80px]"
            />
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Skills;
