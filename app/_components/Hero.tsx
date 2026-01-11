import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='grid-cols-2 grid grid-rows-2 gap-4 h-[80vh] items-center justify-items-center text-center mx-4 overflow-hidden'>

      {/* Top Left - FRONTEND (Left to Right) - Pair 1 */}
      <div>
        <h1 className='text-9xl z-10 relative animate-pair-1-left-fast'>FRONTEND</h1>
      </div>

      {/* Top Right - UX/UI (Right to Left) - Pair 2 */}
      <div>
        <h1 className='text-9xl z-10 relative text-primary animate-pair-2-right-fast'>UX/UI</h1>
      </div>

      {/* Bottom Left - DESIGNER (Left to Right) - Pair 2 */}
      <div>
        <h1 className='text-9xl z-10 relative animate-pair-2-left-fast'>DESIGNER</h1>
      </div>

      {/* Bottom Right - DEVELOPER (Right to Left) - Pair 1 */}
      <div>
        <h1 className='text-9xl z-10 relative text-primary animate-pair-1-right-fast'>DEVELOPER</h1>
      </div>

      {/* Background Image */}
      <Image
        src="/image-hero.png"
        alt="Hero Image"
        width={1000}
        height={1000}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] w-[60vw] sm:w-[70vw] md:w-[80vw] lg:w-[60vw] h-[40vw] sm:h-[30vw] md:h-[30vw] lg:h-[30vw] overflow-hidden"
      />
    </div>
  )
}

export default Hero
