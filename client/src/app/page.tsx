import Header from "@/components/Header";
import Main from "@/components/Main";
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
        <Main />
        <Skills URL={process.env.APP_API_URL as string} />
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
