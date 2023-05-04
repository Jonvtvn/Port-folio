import React from "react"

export default function ContPortYHL() {
    return (
        <div className="post block max-w-sm mx-auto sm:max-w-full group lg:grid lg:grid-cols-12">
            <div>
                <h1 className="text-gray-800 dark:text-white text-center font-bold mb-3">Proyecto Instituto</h1>
                <div className="contenedor-port">
                    <figure className="w-50">
                        <a href="https://github.com/Jonvtvn/Proyect-Your-Highlights">
                            <img className="gris" src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                        </a>
                        <div className="capa">
                            <a href="https://github.com/Jonvtvn/Proyect-Your-Highlights">
                                <h3 className="font-semibold color-text">YOUR HIGHLIGHTS</h3>
                                <p className="text-justify">Hecho con<text className="text-emerald-400 font-bold"> HTML</text> y <text className="text-emerald-400 font-bold"> CSS</text>.</p>
                            </a>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )
}