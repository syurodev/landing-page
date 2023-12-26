'use client'

import { useRef, useEffect } from 'react'
import Lottie from 'lottie-web'

import keqing from '@/lib/KeqingAnimatedData.json'

const Hero = () => {
  const animationContainer = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (animationContainer.current) {
      animationContainer.current.innerHTML = '';
      Lottie.loadAnimation({
        container: animationContainer.current,
        animationData: keqing,
      })

      const svgElement = animationContainer.current.querySelector('svg');

      if (svgElement) {
        svgElement.style.width = 'fit-content';
        svgElement.style.height = 'fit-content';
      }
    } else return
  }, [])

  return (
    <section className='z-10'>
      <div ref={animationContainer} className='h-fit flex justify-center items-center'></div>
      <h1
        style={{
          textShadow: "2px 2px 7px rgba(0, 0, 0, 0.549)",
        }}
        className='text-center text-[100px] font-black tracking-tighter 
        uppercase select-none pointer-events-none shadow-xl'
      >
        Keqing
      </h1>
      <p className='text-secondary-foreground block'>{"The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis's unilateral approach to policymaking in Liyue — but in truth, gods admire skeptics such as her quite a lot."}</p>
    </section>
  )
}

export default Hero