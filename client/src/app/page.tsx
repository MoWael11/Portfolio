import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import {config} from 'dotenv'
config()

export default function Home() {
  
  return (
    <>
      <Header />
      <main className="overflow-hidden font-roboto">
        <section className='relative mb-20 h-[calc(100vh-57.6px)] before:absolute before:left-0 before:top-0 before:z-[-1] before:h-full before:w-full before:bg-[url("/images/main-mobile.jpg")] before:bg-cover before:bg-left before:bg-no-repeat before:opacity-60 before:content-[""] after:absolute after:bottom-0 after:w-full after:shadow-[0px_10px_40px_50px_black] after:shadow-[#121212] after:content-[""]  before:md:hidden'>
          <div className="video absolute top-0 left-0 z-[-1] hidden md:block opacity-[88%] md:w-[1536px] h-full 2xl:w-full overflow-hidden">
                <video autoPlay preload="metadata" loop muted className="w-full object-cover rotateY-180" poster="/images/neural-network-poster.webp">
                <source src="/videos/neural-network.mp4" type="video/mp4"/>
                <source src="/videos/neural-network.webm" type="video/webm"/>
                <source src="/videos/neural-network.ogv" type="video/ogg"/>
                your browser does not support this video.
              </video>
          </div>
          <div className="video absolute top-0 left-0 z-[-2] hidden md:block opacity-[60%] md:w-[1536px] h-full 2xl:w-full overflow-hidden">
              <video autoPlay preload="metadata" loop muted className="w-full object-cover" poster="/images/neural-network-poster-1.webp">
                <source src="/videos/neural-network-1.mp4" type="video/mp4"/>
                <source src="/videos/neural-network-1.webm" type="video/webm"/>
                <source src="/videos/neural-network-1.ogv" type="video/ogg"/>
                your browser does not support this video.
              </video>
          </div>
          <div className="container flex h-full">
            <div className="text gpa-1 flex flex-col justify-center text-primary-text sm:translate-x-[90px] xl:translate-x-0">
              <h2 className="mb-4 w-0 animate-[text_0.5s_linear_forwards] overflow-hidden text-4xl font-bold font-roboto-mono">
                Hi<span className="font-mono">!</span>&nbsp;
              </h2>
              <p className="w-0 animate-[text_1s_0.5s_linear_forwards] overflow-hidden py-1 text-[22px] sm:text-3xl">
                I&apos;m&nbsp;Mohamed&nbsp;Wael
              </p>
              <p className="w-0 animate-[text_1s_1.5s_linear_forwards] overflow-hidden py-1 text-[22px] sm:text-3xl">
                a&nbsp;passionate&nbsp;full&nbsp;stack&nbsp;developer
              </p>
              <p className="w-0 animate-[text_1s_2.5s_linear_forwards] overflow-hidden py-1 text-[22px] sm:text-3xl">
                from&nbsp;Egypt
              </p>
            </div>
          </div>
        </section>
        <Skills />
        <Projects />
        <Contact URL={process.env.APP_API_URL as string} />
        <footer className="bg-dark-footer">
          <div className="container flex items-center justify-between py-4">
            <p className="text-sm text-primary-text sm:text-lg">
              Mohamed Wael &copy; {new Date().getFullYear()}
            </p>
            <Link
              href="https://github.com/MoWael11"
              passHref={false}
              target="_blank"
              aria-label="My github profile"
            >
              <AiFillGithub className="h-[30px] w-[30px] cursor-pointer text-primary-text transition-colors duration-300 hover:text-secondary-text md:h-[40px] md:w-[40px]"/>
            </Link>
          </div>
        </footer>
      </main>
    </>
  );
}
