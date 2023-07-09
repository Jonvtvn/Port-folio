import React from "react"
import Link from 'next/link'
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';


export default function ContPortTask() {
    return (
        <div class="item item-4 contenedor-port">
            <Link href="https://github.com/Jonvtvn/Proyect-React-Tasks" class="card-link">
                <img className="gris card__img" src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" alt="" />
                <div class="overlay">
                    <h3 class="card-title font-thin">TASK</h3>
                    <div className="flex">
                        <FaReact className="logos_Leng" /> <FaHtml5 className="logos_Leng" /> <FaCss3Alt className="logos_Leng" /> <FaJs className="logos_Leng" />
                    </div>
                </div>
            </Link>
        </div>
        // <div className="post block max-w-sm mx-auto sm:max-w-full group lg:grid lg:grid-cols-12">
        //     <div>
        //         <h1 className="text-gray-800 dark:text-white text-center font-bold mb-3">Proyecto Practica</h1>
        //         <div className="contenedor-port">
        //             <figure className="w-50">
        //                 <a href="https://github.com/Jonvtvn/Proyect-React-Tasks">
        //                     <img className="gris" src="https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80" alt="" />
        //                 </a>
        //                 <div className="capa">
        //                     <a href="https://github.com/Jonvtvn/Proyect-React-Tasks">
        //                         <h3 className="font-semibold color-text">TASK</h3>
        //                         <p className="text-justify">Hecho en <text className="text-emerald-400 font-bold"> React</text> usando <text className="text-emerald-400 font-bold"> HTML</text>, <text className="text-emerald-400 font-bold"> CSS</text> y <text className="text-emerald-400 font-bold"> JavaScript</text> en <text className="text-emerald-400 font-bold"> VITE</text>.</p>
        //                     </a>
        //                 </div>
        //             </figure>
        //         </div>
        //     </div>
        // </div>
    )
}

