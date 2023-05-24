import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import { Metadata } from "next";

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <section className='relative mb-20 h-[calc(100vh-57.6px)] before:absolute before:left-0 before:top-0 before:z-[-99] before:h-full before:w-full before:bg-[url("/images/main-mobile.jpg")] before:bg-cover before:bg-left before:bg-no-repeat before:opacity-60 before:grayscale before:saturate-200 before:sepia-[60%] before:content-[""] after:absolute after:bottom-0 after:w-full after:shadow-[0px_10px_50px_40px_black] after:content-[""] before:sm:bg-[url("/images/main.jpg")] before:sm:bg-[length:1536px] after:sm:hidden before:2xl:bg-cover'>
          <span className="dots opacity-40">
            <span className="dot-1 absolute top-1/2 z-[-1] hidden origin-bottom animate-dot1 rounded-full bg-[#fdf3da] sm:block"></span>
            <span className="dot-2 absolute top-1/2 z-[-1] hidden origin-bottom animate-dot2 rounded-full bg-[#fdf3da] sm:block"></span>
            <span className="dot-3 absolute top-1/2 z-[-1] hidden origin-bottom animate-dot3 rounded-full bg-[#fdf3da] sm:block"></span>
            <span className="dot-4 absolute top-1/2 z-[-1] hidden origin-bottom animate-dot4 rounded-full bg-[#fdf3da] sm:block"></span>
          </span>
          <div className="container flex h-full">
            <div className="text gpa-1 flex flex-col justify-center text-primary-text sm:translate-x-[90px] xl:translate-x-0">
              <h2 className="mb-4 w-0 animate-[text_0.5s_linear_forwards] overflow-hidden text-4xl font-bold">
                Hi<span className="font-mono">!</span>&nbsp;
              </h2>
              <p className="w-0 animate-[text_1s_0.5s_linear_forwards] overflow-hidden py-1 text-[22px] sm:text-3xl">
                I&apos;m&nbsp;Mohamed&nbsp;Wael
              </p>
              <p className="w-0 animate-[text_1s_1.5s_linear_forwards] overflow-hidden py-1 text-[22px] sm:text-3xl">
                a&nbsp;passionate&nbsp;full&nbsp;stack&nbsp;developer
              </p>
              <p className="w-0 animate-[text_1s_2.5s_linear_forwards] overflow-hidden py-1 text-[22px] sm:text-3xl">
                from&nbsp;Egypt.
              </p>
            </div>
          </div>
        </section>
        <section id="skills" className="container mb-20 min-h-[100vh]">
          <Skills />
        </section>
        <section id="projects" className="container mb-20 min-h-[100vh]">
          <Projects />
        </section>
        <section id="contact" className="container mb-20">
          <Contact />
        </section>
        <footer className="bg-dark-footer">
          <div className="container flex items-center justify-between py-4">
            <p className="text-sm text-primary-text sm:text-lg">
              Mohamed Wael &copy; {new Date().getFullYear()}
            </p>
            <Link
              href="https://github.com/MoWael11"
              passHref={false}
              target="_blank"
            >
              <AiFillGithub className="h-[30px] w-[30px] cursor-pointer text-primary-text transition-colors duration-300 hover:text-secondary-text md:h-[40px] md:w-[40px]" />
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}
