"use client"
import React from 'react'
import { ArrowRight } from 'lucide-react'

const CTAButton = () => {
  return (
    <div className="cursor-pointer group flex items-center justify-center bg-gray-900 w-[270px] relative rounded-b-xl rounded-r-xl h-[57px] pr-[100px] overflow-hidden">
      {/* Expanding Bar */}
      <div className="bg-primary z-20 h-[57px] left-0 absolute w-[57px] rounded-xl transition-all duration-300 group-hover:w-[270px] flex items-center justify-center">
        <div className="grid grid-cols-3 grid-rows-3 gap-1 place-items-center">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="circle"
              style={{ animationDelay: `${i * 0.1}s` }} // stagger each dot
            ></div>
          ))}
        </div>
      </div>

      {/* Text */}
      <p className="absolute left-1/2 z-10 transition-colors duration-300 group-hover:text-white -translate-x-1/2">
        Start here
      </p>
      <ArrowRight className="absolute right-4 z-10 text-white transition-colors duration-300 group-hover:text-gray-900" />

      {/* Custom CSS */}
      <style jsx>{`
        .circle {
          width: 4px;
          height: 4px;
          border-radius: 9999px;
          background: black;
          animation: pulseScale 1.5s ease-in-out infinite;
        }

        @keyframes pulseScale {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  )
}

export default CTAButton
