import Hero from '@/components/Hero/Hero'

export default function Home() {

  return (
    <main className="w-full h-dvh overflow-x-clip relative">
      <Hero />
      <div
        className='absolute top-36 -right-8 size-[400px] rounded-full bg-primary/70 dark:bg-primary -z-[1]
      blur-xl pointer-events-none select-none'
      ></div>
    </main>
  )
}
