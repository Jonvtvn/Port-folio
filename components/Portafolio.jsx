import React from "react"
import Link from 'next/link'
import ContPortTask from "./components-childs/ContPortTask"
import ContPortMT from "./components-childs/ContPortMT"
import ContPortYHL from "./components-childs/ContPortYHL"
import ContPortMP from "./components-childs/ContPortMP"
import TextHobbies from "./TextHobbies"

export default function Portafolio() {
    return (
        <>
            {/* <div>
                <figure><img src="https://picsum.photos/300/200?image=611" /></figure>
                <span>Hover</span>
            </div> */}
            <section className="home bg-white dark:bg-neutral-950 relative" id="portafolio">
                <div className="container-fluid posts">
                    <h1 className="text-title text-center font-bold pt-28 text-neutral-800 dark:text-white">PORTAFOLIO</h1>
                    <div className="animation-border justify-center content-center items-center pb-10">
                        <div className="animation2 rounded-lg justify-center content-center"></div>
                    </div>
                    <div class="wrapper relative mt-20">
                        <ContPortMP />
                        <ContPortYHL />
                        <ContPortMT />
                        <ContPortTask />
                        <div class="item item-5 contenedor-port">
                            <Link href="https://github.com/Jonvtvn/Proyect-React-Tasks">
                                <img className="gris card__img" src="" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="animation-border justify-center content-center items-center pb-10">
                    <div className="animation2 rounded-lg justify-center content-center"></div>
                </div>
                <TextHobbies />
            </section>
        </>
    )
}