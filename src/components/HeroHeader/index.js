import React from "react"
import { ArrowDownIcon } from "@heroicons/react/solid"

const HeroHeader = () => {
  return (
    <div className="w-full grid grid-cols-2 bg-[#ffbb00] min-h-screen">
      <section className="w-full flex items-center justify-center">
        <div className="relative w-10/12">
          <img src="/top_header_back.png" className="w-md h-100 rounded-2xl " />
          <img
            src="/hamza.jpg"
            className="absolute -bottom-8 -right-0 w-10/12 rounded-2xl transition-all duration-500 hover:-translate-y-4 cursor-pointer"
          />
        </div>
      </section>
      <section className="w-full bg-[#1f1f1f] flex flex-col items-center justify-center">
        <header className="group p-3 flex flex-col items-center justify-center">
          <h1 className="mb-1 font-mono text-6xl text-white text-center font-bold">
            Hi, I'm <span className="text-[#ffbb00]">Hamza</span> 👋
          </h1>
          <h2 className="mt-5 font-mono text-4xl text-white text-center font-bold">
            (A Full Stack Engineer)
          </h2>
          <button className="mt-14 animate-bounce w-14 h-14 bg-[#ffbb00] rounded-full flex items-center justify-center">
            <ArrowDownIcon className="w-8 h-8 text-white" />
          </button>
        </header>
      </section>
    </div>
  )
}

export default HeroHeader
