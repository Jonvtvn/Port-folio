import React from "react"
import Link from 'next/link'
import { FaAngular, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi'
export default function ContPortMT() {
    return (
        <>
            <div class="item item-3 contenedor-port">
                <Link href="https://github.com/Jonvtvn/Proyect-My-Training" class="card-link">
                    <img class="gris card__img" src="https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
                    <div class="overlay">
                        <h3 class="card-title font-thin">MY TRAINING</h3>
                        <div className="flex">
                            <FaAngular className="logos_Leng" /> <FaHtml5 className="logos_Leng" /> <FaCss3Alt className="logos_Leng" /> <BiLogoTypescript className="logos_Leng" />
                        </div>
                    </div>
                </Link>
            </div>


            {/* // <div className="post block max-w-sm mx-auto sm:max-w-full group lg:grid lg:grid-cols-12">
        //     <div>
        //         <h1 className=" text-gray-800 dark:text-white text-center font-bold mb-3">Proyecto Instituto</h1>
        //         <div className="contenedor-port">
        //             <figure className="w-50">
        //                 <a href="https://github.com/Jonvtvn/Proyect-My-Training">
        //                     <img className="gris" src="https://images.unsplash.com/photo-1591291621164-2c6367723315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
        //                 </a>
        //                 <div className="capa">
        //                     <a href="https://github.com/Jonvtvn/Proyect-My-Training">
        //                         <h3 className="font-semibold color-text">MY TRAINING</h3>
        //                         <p className="text-justify">Hecho en <text className="text-emerald-400 font-bold">Ionic-Angular</text> usando <text className="text-emerald-400 font-bold"> HTML</text>, <text className="text-emerald-400 font-bold"> SCSS</text> y <text className="text-emerald-400 font-bold"> TypeScript</text>.</p>
        //                     </a>
        //                 </div>
        //             </figure>
        //         </div>
        //     </div>
        // </div> */}
        </>
    )
}

