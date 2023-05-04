import React from "react"


export default function ContPortMP() {
    return (
        <div className="post block max-w-sm mx-auto sm:max-w-full group lg:grid lg:grid-cols-12">
            <div>
                <h1 className="text-gray-800 dark:text-white text-center font-bold mb-3">Proyecto Instituto</h1>
                <div className="contenedor-port" >
                    <figure className="w-full">
                        <a href="https://github.com/Jonvtvn/Proyect-Music-Pro">
                            <img className="gris" src="https://images.unsplash.com/photo-1519508234439-4f23643125c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80" alt="" />
                        </a>
                        <div className="capa">
                            <a href="https://github.com/Jonvtvn/Proyect-Music-Pro">
                                <h3 className="font-semibold color-text">MUSIC PRO</h3>
                                <p className="text-justify">Hecho con<text className="text-emerald-400 font-bold"> HTML</text>, <text className="text-emerald-400 font-bold">CSS</text> y <text className="text-emerald-400 font-bold"> JavaScript</text>.</p>
                            </a>
                        </div>
                    </figure>
                </div>
            </div>
        </div>
    )
}

