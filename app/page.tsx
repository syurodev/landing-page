'use client'

import { useRef, useEffect } from 'react'
import Lottie from 'lottie-web'

import keqing from '@/lib/KeqingAnimatedData.json'
import { ModeToggle } from '@/components/Shared/ModeToggle'

export default function Home() {
  const animationContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (animationContainer.current) {
      animationContainer.current.innerHTML = '';
      Lottie.loadAnimation({
        container: animationContainer.current,
        animationData: keqing
      })
    } else return
  }, [])

  return (
    <main className="w-full h-dvh">
      <ModeToggle />
      <div ref={animationContainer} className='h-full max-h-[500px]'></div>
    </main>
  )
}
