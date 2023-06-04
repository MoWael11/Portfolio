"use client";
import { MouseEvent, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/dist/client/image";
import Button from "./ui/Button";

const Projects = () => {
  const cardsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100");
        }
      });
    });

    cardsRef.current!.querySelectorAll("div").forEach((div) => {
      observer.observe(div);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMouseMove = (e: MouseEvent) => {
    if (cardsRef.current) {
      const cards = cardsRef.current.querySelectorAll(
        "*"
      ) as NodeListOf<HTMLDivElement>;
      cards.forEach((card) => {
        const { left, top } = card.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    }
  };

  return (
    <section id="projects" className="container mb-20 md:min-h-[100vh]">
      <h2 className="title text-shadow flex w-full items-center justify-center pb-10 pt-2 text-4xl tracking-wider text-primary-text">
        Projects
      </h2>
      <div
        ref={cardsRef}
        id="cards"
        className="mx-auto grid grid-cols-projects-sm grid-rows-1 items-center justify-center gap-2 sm:grid-cols-projects"
      >
        <div
          onMouseMove={(e: MouseEvent) => handleMouseMove(e)}
          className='card card relative flex h-full rounded-xl bg-[rgb(255,255,255)]/[0.1] p-[1px] opacity-0 transition-opacity delay-200 duration-500 before:absolute before:left-0 before:top-0 before:z-[3] before:hidden before:h-full before:w-full before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 before:content-[""] before:hover:opacity-100 before:md:block'
        >
          <div className="card-content relative z-[2] flex w-full flex-col gap-2 rounded-xl bg-dark-secondary-bg p-2 text-lg text-primary-text">
            <div className="project-info flex flex-col gap-4 sm:flex-row">
              <div className="project-image relative w-full flex-none overflow-hidden rounded-lg sm:w-[220px]">
                <Image
                  width={1200}
                  height={1200}
                  src="/images/simon.png"
                  alt="pawn-image"
                  className="h-full w-full"
                />
              </div>
              <div className="info gap-2py-2 flex flex-col">
                <h3 className="mb-2 font-roboto-mono text-xl font-medium sm:text-2xl">
                  Simon Game
                </h3>
                <p>
                  Category{" "}
                  <span className="text-[16px] text-secondary-text sm:text-lg">
                    Memory Game
                  </span>
                </p>
              </div>
            </div>
            <p className="project-description w-[85%] text-[16px] leading-5 sm:text-lg">
              A game of lights and sounds in which players must repeat random
              sequences of lights played by the computer.
            </p>
          </div>
          <Button className="absolute bottom-4 right-4 z-[4]" size={"contain"}>
            <Link
              className="px-2 py-1"
              target="_blank"
              href={"https://mowael11.github.io/SimonGame/"}
            >
              Play
            </Link>
          </Button>
          <div className="card-border absolute left-0 top-0 z-[1] hidden h-full w-full rounded-xl opacity-0 transition-opacity duration-500 md:block"></div>
        </div>
        <div
          onMouseMove={(e: MouseEvent) => handleMouseMove(e)}
          className='card relative flex h-full rounded-xl bg-[rgb(255,255,255)]/[0.1] p-[1px] opacity-0 transition-opacity delay-200 duration-500 before:absolute before:left-0 before:top-0 before:z-[3] before:hidden before:h-full before:w-full before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 before:content-[""] before:hover:opacity-100 before:md:block'
        >
          <div className="card-content relative z-[2] flex w-full flex-col gap-2 rounded-xl bg-dark-secondary-bg p-2 text-lg text-primary-text">
            <div className="project-info flex flex-col gap-4 sm:flex-row">
              <div className="project-image relative w-full flex-none overflow-hidden rounded-lg sm:w-[220px]">
                <Image
                  width={1200}
                  height={1200}
                  src="/images/guitar.png"
                  alt="guitar"
                  className="h-full w-full"
                />
              </div>
              <div className="info gap-2py-2 flex flex-col">
                <h3 className="mb-2 font-roboto-mono text-xl font-medium sm:text-2xl">
                  Music website
                </h3>
                <p>
                  Category{" "}
                  <span className="text-[16px] text-secondary-text sm:text-lg">
                    Informational
                  </span>
                </p>
              </div>
            </div>
            <p className="project-description w-[85%] text-[16px] leading-5 sm:text-lg">
              Explore the many different styles of music, and learn about their
              unique qualities.
            </p>
          </div>
          <Button className="absolute bottom-4 right-4 z-[4]" size={"contain"}>
            <Link
              className="px-2 py-1"
              target="_blank"
              href={"https://mowael11.github.io/MusicWeb/"}
            >
              Visit
            </Link>
          </Button>
          <div className="card-border absolute left-0 top-0 z-[1] hidden h-full w-full rounded-xl opacity-0 transition-opacity duration-500 md:block"></div>
        </div>
        <div
          onMouseMove={(e: MouseEvent) => handleMouseMove(e)}
          className='card relative flex h-full rounded-xl bg-[rgb(255,255,255)]/[0.1] p-[1px] opacity-0 transition-opacity delay-200 duration-500 before:absolute before:left-0 before:top-0 before:z-[3] before:hidden before:h-full before:w-full before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 before:content-[""] before:hover:opacity-100 before:md:block'
        >
          <div className="card-content relative z-[2] flex w-full flex-col gap-2 rounded-xl bg-dark-secondary-bg p-2 text-lg text-primary-text">
            <div className="project-info flex flex-col gap-4 sm:flex-row">
              <div className="project-image relative w-full flex-none overflow-hidden rounded-lg sm:w-[220px]">
                <Image
                  width={1200}
                  height={1200}
                  src="/images/dashboard.png"
                  alt="dashboard"
                  className="h-full w-full"
                />
              </div>
              <div className="info gap-2py-2 flex flex-col">
                <h3 className="mb-2 font-roboto-mono text-xl font-medium sm:text-2xl">
                  ProjectHub
                </h3>
                <p>
                  Category{" "}
                  <span className="text-[16px] text-secondary-text sm:text-lg">
                    Management
                  </span>
                </p>
              </div>
            </div>
            <p className="project-description w-[85%] text-[16px] leading-5 sm:text-lg">
              A Collaborative Platform for Managing Projects and Teams.
            </p>
          </div>
          <Button className="absolute bottom-4 right-4 z-[4]" size={"contain"}>
            <Link
              className="px-2 py-1"
              target="_blank"
              href={"https://mowael11.github.io/ProjectHub/"}
            >
              Visit
            </Link>
          </Button>
          <div className="card-border absolute left-0 top-0 z-[1] hidden h-full w-full rounded-xl opacity-0 transition-opacity duration-500 md:block"></div>
        </div>
        <div
          onMouseMove={(e: MouseEvent) => handleMouseMove(e)}
          className='card relative flex h-full rounded-xl bg-[rgb(255,255,255)]/[0.1] p-[1px] opacity-0 transition-opacity delay-200 duration-500 before:absolute before:left-0 before:top-0 before:z-[3] before:hidden before:h-full before:w-full before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 before:content-[""] before:hover:opacity-100 before:md:block'
        >
          <div className="card-content relative z-[2] flex w-full flex-col gap-2 rounded-xl bg-dark-secondary-bg p-2 text-lg text-primary-text">
            <div className="project-info flex flex-col gap-4 sm:flex-row">
              <div className="project-image relative w-full flex-none overflow-hidden rounded-lg sm:w-[220px]">
                <Image
                  width={1200}
                  height={1200}
                  src="/images/kasper.png "
                  alt="kasper-tamplate"
                  className="h-full w-full"
                />
              </div>
              <div className="info gap-2py-2 flex flex-col">
                <h3 className="mb-2 font-roboto-mono text-xl font-medium sm:text-2xl">
                  Kasper
                </h3>
                <p>
                  Category{" "}
                  <span className="text-[16px] text-secondary-text sm:text-lg">
                    Business
                  </span>
                </p>
              </div>
            </div>
            <p className="project-description w-[85%] text-[16px] leading-5 sm:text-lg">
              Designed to advance a company&apos;s products or services and
              furnish information about the organization.
            </p>
          </div>
          <Button className="absolute bottom-4 right-4 z-[4]" size={"contain"}>
            <Link
              className="px-2 py-1"
              target="_blank"
              href={"https://mowael11.github.io/Kasper/"}
            >
              Visit
            </Link>
          </Button>
          <div className="card-border absolute left-0 top-0 z-[1] hidden h-full w-full rounded-xl opacity-0 transition-opacity duration-500 md:block"></div>
        </div>
        <div
          onMouseMove={(e: MouseEvent) => handleMouseMove(e)}
          className='card relative flex h-full rounded-xl bg-[rgb(255,255,255)]/[0.1] p-[1px] opacity-0 transition-opacity delay-200 duration-500 before:absolute before:left-0 before:top-0 before:z-[3] before:hidden before:h-full before:w-full before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 before:content-[""] before:hover:opacity-100 before:md:block'
        >
          <div className="card-content relative z-[2] flex w-full flex-col gap-2 rounded-xl bg-dark-secondary-bg p-2 text-lg text-primary-text">
            <div className="project-info flex flex-col gap-4 sm:flex-row">
              <div className="project-image relative w-full flex-none overflow-hidden rounded-lg sm:w-[220px]">
                <Image
                  width={1200}
                  height={1200}
                  src="/images/freelance.png"
                  alt="freelance-image"
                  className="h-full w-full"
                />
              </div>
              <div className="info gap-2py-2 flex flex-col">
                <h3 className="mb-2 font-roboto-mono text-xl font-medium sm:text-2xl">
                  Freelance Web
                </h3>
                <p>
                  Category{" "}
                  <span className="text-[16px] text-secondary-text sm:text-lg">
                    Business
                  </span>
                </p>
              </div>
            </div>
            <p className="project-description w-[85%] text-[16px] leading-5 sm:text-lg">
              Showcase the skills and expertises of a freelancer.
            </p>
          </div>
          <Button className="absolute bottom-4 right-4 z-[4]" size={"contain"}>
            <Link
              className="px-2 py-1"
              target="_blank"
              href={"https://mowael11.github.io/FreelanceWeb/"}
            >
              Visit
            </Link>
          </Button>
          <div className="card-border absolute left-0 top-0 z-[1] hidden h-full w-full rounded-xl opacity-0 transition-opacity duration-500 md:block"></div>
        </div>
        <div
          onMouseMove={(e: MouseEvent) => handleMouseMove(e)}
          className='card relative flex h-full rounded-xl bg-[rgb(255,255,255)]/[0.1] p-[1px] opacity-0 transition-opacity delay-200 duration-500 before:absolute before:left-0 before:top-0 before:z-[3] before:hidden before:h-full before:w-full before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 before:content-[""] before:hover:opacity-100 before:md:block'
        >
          <div className="card-content relative z-[2] flex w-full flex-col gap-2 rounded-xl bg-dark-secondary-bg p-2 text-lg text-primary-text">
            <div className="project-info flex flex-col gap-4 sm:flex-row">
              <div className="project-image relative w-full flex-none overflow-hidden rounded-lg sm:w-[220px]">
                <Image
                  width={1200}
                  height={1200}
                  src="/images/naval-battles.png"
                  alt="freelance-image"
                  className="h-full w-full"
                />
              </div>
              <div className="info gap-2py-2 flex flex-col">
                <h3 className="mb-2 font-roboto-mono text-xl font-medium sm:text-2xl">
                  Naval Battles
                </h3>
                <p>
                  Category{" "}
                  <span className="text-[16px] text-secondary-text sm:text-lg">
                    Startegy
                  </span>
                </p>
              </div>
            </div>
            <p className="project-description w-[85%] text-[16px] leading-5 sm:text-lg">
              Engage in epic naval battles. Strategically hit squares on a grid
              to find and sink hidden enemy ships.
            </p>
          </div>
          <Button className="absolute bottom-4 right-4 z-[4]" size={"contain"}>
            <Link
              className="px-2 py-1"
              target="_blank"
              href={"https://naval-battles.mowael.com/"}
            >
              Play
            </Link>
          </Button>
          <div className="card-border absolute left-0 top-0 z-[1] hidden h-full w-full rounded-xl opacity-0 transition-opacity duration-500 md:block"></div>
        </div>
        <div
          onMouseMove={(e: MouseEvent) => handleMouseMove(e)}
          className='card relative flex h-full rounded-xl bg-[rgb(255,255,255)]/[0.1] p-[1px] opacity-0 transition-opacity delay-200 duration-500 before:absolute before:left-0 before:top-0 before:z-[3] before:hidden before:h-full before:w-full before:rounded-xl before:opacity-0 before:transition-opacity before:duration-500 before:content-[""] before:hover:opacity-100 before:md:block'
        >
          <div className="card-content relative z-[2] flex w-full flex-col gap-2 rounded-xl bg-dark-secondary-bg p-2 text-lg text-primary-text">
            <div className="project-info flex flex-col gap-4 sm:flex-row">
              <div className="project-image relative w-full flex-none overflow-hidden rounded-lg sm:w-[220px]">
                <Image
                  width={1200}
                  height={1200}
                  src="/images/pawn.png"
                  alt="pawn-image"
                  className="h-full w-full"
                />
              </div>
              <div className="info gap-2py-2 flex flex-col">
                <h3 className="mb-2 font-roboto-mono text-xl font-medium sm:text-2xl">
                  Chess website
                </h3>
                <p>
                  Category{" "}
                  <span className="text-[16px] text-secondary-text sm:text-lg">
                    Informational
                  </span>
                </p>
              </div>
            </div>
            <p className="project-description w-[85%] text-[16px] leading-5 sm:text-lg">
              Explain the basic rules of chess, including how the pieces move
              and the objective of the game.
            </p>
          </div>
          <Button className="absolute bottom-4 right-4 z-[4]" size={"contain"}>
            <Link
              className="px-2 py-1"
              target="_blank"
              href={"https://mowael11.github.io/ChessWeb/"}
            >
              Visit
            </Link>
          </Button>
          <div className="card-border absolute left-0 top-0 z-[1] hidden h-full w-full rounded-xl opacity-0 transition-opacity duration-500 md:block"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
