"use client";

import { useRef, useEffect } from "react";

import Link from "next/link";
import Image from "next/dist/client/image";
import axios from "axios";
import { FC } from "react";

interface ContactProps {
  URL: string;
}

const Skills: FC<ContactProps>= ({ URL }) => {
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

  const request = async () => {
    try {
      const response = await axios.post(`${URL}/ip`)
    } catch(err) {}
  }
  request()
  return (
    <section id="skills" className="container mb-20 md:min-h-[100vh] relative">
      <div className="absolute top-[140px] z-[-1] right-[100px] hidden lg:block w-[160px]">
        <Image width={140} height={140} src='/images/skills.png' alt="skills icon" className="w-full h-full"/>
      </div>
      <h2 className="title text-shadow flex w-full items-center justify-center pb-10 pt-2 text-4xl tracking-wider text-primary-text">
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
          className="flex list-disc flex-col gap-4 overflow-hidden pl-8 text-lg"
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
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border font-roboto-mono font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[500ms]'
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
              src="/images/typescript.svg"
              alt="typescript"
              className="h-[50px] w-[50px] sm:h-[64px] sm:w-[64px] lg:h-[80px] lg:w-[80px]"
            />
          </Link>
        </li>
        <li
          data-lang={"Next.js"}
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border font-roboto-mono font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[700ms]'
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
              src="/images/next-js.svg"
              alt="nextjs"
              className="h-[50px] w-[50px] sm:h-[64px] sm:w-[64px] lg:h-[80px] lg:w-[80px]"
            />
          </Link>
        </li>
        <li
          data-lang={"Node.js"}
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border font-roboto-mono font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[800ms]'
        >
          <Link
            replace={true}
            scroll
            target={"_blank"}
            href={"https://nodejs.org/"}
            className="flex rounded-lg p-2 transition duration-300 hover:bg-dark-hover-secondary-bg lg:p-4"
          >
            <Image
              width={1200}
              height={1200}
              src="/images/node-js.svg"
              alt="nodejs"
              className="h-[50px] w-[50px] sm:h-[64px] sm:w-[64px] lg:h-[80px] lg:w-[80px]"
            />
          </Link>
        </li>
        <li
          data-lang={"Motoko"}
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border font-roboto-mono font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[1000ms]'
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
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border font-roboto-mono font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[1200ms]'
        >
          <Link
            replace={true}
            scroll
            target={"_blank"}
            href={"https://www.mongodb.com/"}
            className="flex rounded-lg p-2 transition duration-300 hover:bg-dark-hover-secondary-bg lg:p-4"
          >
            <Image
              width={1200}
              height={1200}
              src="/images/mongodb.svg"
              alt="mondodb"
              className="h-[50px] w-[50px] sm:h-[64px] sm:w-[64px] lg:h-[80px] lg:w-[80px]"
            />
          </Link>
        </li>
        <li
          data-lang={"web3"}
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border font-roboto-mono font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[1400ms]'
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
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border font-roboto-mono font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[1600ms]'
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
              src="/images/tailwind-css.svg"
              alt="tailwindcss"
              className="h-[50px] w-[50px] sm:h-[64px] sm:w-[64px] lg:h-[80px] lg:w-[80px]"
            />
          </Link>
        </li>
        <li
          data-lang={"React"}
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border font-roboto-mono font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[1800ms]'
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
              src="/images/react.svg"
              alt="react"
              className="h-[50px] w-[50px] sm:h-[64px] sm:w-[64px] lg:h-[80px] lg:w-[80px]"
            />
          </Link>
        </li>
        <li
          data-lang={"Python"}
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border  font-roboto-mono font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[2000ms]'
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
              src="/images/python.svg"
              alt="python"
              className="h-[50px] w-[50px] sm:h-[64px] sm:w-[64px] lg:h-[80px] lg:w-[80px]"
            />
          </Link>
        </li>
        <li
          data-lang={"HTML5"}
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border  font-roboto-mono font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[2200ms]'
        >
          <Link
            replace={true}
            scroll
            target={"_blank"}
            href={"https://developer.mozilla.org/en-US/docs/Learn/HTML"}
            className={
              "flex rounded-lg p-2 transition duration-300 hover:bg-dark-hover-secondary-bg lg:p-4"
            }
          >
            <Image
              width={1200}
              height={1200}
              src="/images/html5.svg"
              alt="HTML5"
              className="h-[50px] w-[50px] sm:h-[64px] sm:w-[64px] lg:h-[80px] lg:w-[80px]"
            />
          </Link>
        </li>
        <li
          data-lang={"CSS"}
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border  font-roboto-mono font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[2400ms]'
        >
          <Link
            replace={true}
            scroll
            target={"_blank"}
            href={"https://developer.mozilla.org/en-US/docs/Learn/css"}
            className={
              "flex rounded-lg p-2 transition duration-300 hover:bg-dark-hover-secondary-bg lg:p-4"
            }
          >
            <Image
              width={1200}
              height={1200}
              src="/images/css3.svg"
              alt="CSS 3"
              className="h-[50px] w-[50px] sm:h-[64px] sm:w-[64px] lg:h-[80px] lg:w-[80px]"
            />
          </Link>
        </li>
        <li
          data-lang={"JavaScript"}
          className='bg-dark-secondary duration-800 relative translate-x-[-100%] rounded-lg border border-dark-border  font-roboto-mono font-medium text-white opacity-0 transition before:absolute before:left-1/2 before:top-[-10px] before:hidden before:translate-x-[-50%] before:translate-y-[calc((-100%))] before:rounded-md before:bg-[#262626] before:px-2 before:py-1 before:opacity-0 before:transition before:duration-1000 before:content-[attr(data-lang)] after:absolute after:left-1/2 after:top-0 after:hidden after:translate-x-[-50%] after:translate-y-[-11px] after:border-[10px] after:border-x-transparent after:border-b-transparent after:border-t-[#262626] after:opacity-0 after:transition after:duration-1000 after:content-[""] hover:before:block hover:before:opacity-100 hover:after:block hover:after:opacity-100 md:delay-[2600ms]'
        >
          <Link
            replace={true}
            scroll
            target={"_blank"}
            href={"https://developer.mozilla.org/en-US/docs/Learn/javascript"}
            className={
              "flex rounded-lg p-2 transition duration-300 hover:bg-dark-hover-secondary-bg lg:p-4"
            }
          >
            <Image
              width={1200}
              height={1200}
              src="/images/javascript.svg"
              alt="javascript"
              className="h-[50px] w-[50px] sm:h-[64px] sm:w-[64px] lg:h-[80px] lg:w-[80px]"
            />
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Skills;
