'use client'
import React from 'react'
import ReactTypingEffect from "react-typing-effect";

export default function TypingEffect() {
  return (
    <ReactTypingEffect
      typingDelay="10"
      eraseDelay="1000"
      cursorClassName="cursortyping"
      className="efectoTyping text-transparent bg-clip-text bg-gradient-to-r from-indigo-500  to-pink-700 xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl font-black text-neutral-100"
      text={["<Jonatan Pizarro/>"]}
    />
  )
}