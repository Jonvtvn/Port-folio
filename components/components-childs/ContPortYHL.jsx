import React from "react"
import Link from 'next/link'
import { FaHtml5, FaCss3Alt } from 'react-icons/fa';

export default function ContPortYHL() {
    return (
        <div class="item item-2 contenedor-port">
            <Link href="https://github.com/Jonvtvn/Proyect-Your-Highlights" class="card-link">
                <img className="gris card__img" src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                <div class="overlay">
                    <h3 class="card-title font-thin">YOUR HIGHLIGHTS</h3>
                    <div className="flex">
                        <FaHtml5 className="logos_Leng" /> <FaCss3Alt className="logos_Leng" />
                    </div>
                </div>
            </Link>
        </div>
        // <div className="post block max-w-sm mx-auto sm:max-w-full group lg:grid lg:grid-cols-12">
        //     <div>
        //         <h1 className="text-gray-800 dark:text-white text-center font-bold mb-3">Proyecto Instituto</h1>
        //         <div className="contenedor-port">
        //             <figure className="w-50">
        //                 <a href="https://github.com/Jonvtvn/Proyect-Your-Highlights">
        //                     <img className="gris" src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        //                 </a>
        //                 <div className="capa">
        //                     <a href="https://github.com/Jonvtvn/Proyect-Your-Highlights">
        //                         <h3 className="font-semibold color-text">YOUR HIGHLIGHTS</h3>
        //                         <p className="text-justify">Hecho con<text className="text-emerald-400 font-bold"> HTML</text> y <text className="text-emerald-400 font-bold"> CSS</text>.</p>
        //                     </a>
        //                 </div>
        //             </figure>
        //         </div>
        //     </div>
        // </div>
    )
}