'use client'
import React, {useEffect, useRef} from 'react';

const Main= () => {
  const firstVideo = useRef<HTMLVideoElement>(null);
  const secondVideo = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        firstVideo.current!.play()
        secondVideo.current!.play()
      } else {
        firstVideo.current!.pause()
        secondVideo.current!.pause()
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])
  return <section className='relative mb-20 h-[calc(100vh-57.6px)] bg-[url("/images/main-mobile.webp")] bg-cover bg-left bg-no-repeat after:absolute after:bottom-0 after:w-full after:shadow-[0px_10px_40px_50px_black] after:shadow-[#121212] after:content-[""]  md:bg-none'>
    <div className="video absolute top-0 left-0 z-[-1] hidden md:block opacity-[88%] md:w-[1536px] h-full 2xl:w-full overflow-hidden">
      <video ref={firstVideo} loop muted className="w-full hidden md:block object-cover rotateY-180" poster="/images/neural-network-poster.webp">
        <source src="/videos/neural-network.mp4" type="video/mp4"/>
        <source src="/videos/neural-network.webm" type="video/webm"/>
        <source src="/videos/neural-network.ogv" type="video/ogg"/>
        your browser does not support this video.
      </video>
    </div>
    <div className="video absolute top-0 left-0 z-[-2] hidden md:block opacity-[60%] md:w-[1536px] h-full 2xl:w-full overflow-hidden">
      <video ref={secondVideo} loop muted className="w-full hidden md:block object-cover">
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
}

export default Main