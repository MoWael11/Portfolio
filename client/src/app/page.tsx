import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main className='h-[200vh] overflow-hidden'>
        <section className='h-[calc(100vh-72px)] relative before:sm:bg-[url("/images/main.jpg")] before:bg-no-repeat before:bg-fixed bg-left before:bg-[length:1536px] before:2xl:bg-cover before:content-[""] before:absolute before:w-full before:h-full opacity-60 before:sepia-[60%] before:grayscale before:saturate-200 before:z-[-1]  before:top-0 before:left-0'> 
        </section>
      </main>
    </>
  )
}
