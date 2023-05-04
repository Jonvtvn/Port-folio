import React from "react"
import ContPortTask from "./components-childs/ContPortTask"
import ContPortMT from "./components-childs/ContPortMT"
import ContPortYHL from "./components-childs/ContPortYHL"
import ContPortMP from "./components-childs/ContPortMP"
import TextHobbies from "./TextHobbies"

export default function Portafolio() {
    return (
        <section className="home bg-white dark:bg-neutral-950 relative" id="portafolio">
            <div className="container posts max-w-3xl mx-auto">
                <h1 className="text-title text-center font-black pt-28 text-neutral-800 dark:text-white">PORTAFOLIO</h1>
                <div className="animation-border justify-center content-center items-center pb-10">
                    <div className="animation rounded-lg justify-center content-center"></div>
                </div>
                <ContPortTask />
                <ContPortMT />
                <ContPortYHL />
                <ContPortMP />
            </div>
            <div className="animation-border justify-center content-center items-center pb-10">
                <div className="animation rounded-lg justify-center content-center"></div>
            </div>
            <TextHobbies />
        </section>
    )
}