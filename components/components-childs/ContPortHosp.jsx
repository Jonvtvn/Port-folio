import React from "react"
import Link from 'next/link'
import { FaHtml5, FaCss3Alt, FaJs, FaPython } from 'react-icons/fa';


function ContPortHosp() {
    return (
        <div class="item item-5 contenedor-port">
            <Link href="" class="card-link">
                <img className="gris card__img" src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" />
                <div class="overlay">
                    <h3 class="card-title font-thin">SERVICIO DE SALUD</h3>
                    <div className="flex">
                        <FaHtml5 className="logos_Leng" /> <FaCss3Alt className="logos_Leng" /> <FaPython className="logos_Leng" />
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ContPortHosp


