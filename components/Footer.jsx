import React from "react"


function Footer() {
    return (
        <footer className="bg-footer text-center dark:bg-neutral-800 relative">
            <div className="flex items-center justify-center border-indigo-50 p-10">
                <div className="flex-nowrap justify-center text-gray-800 dark:text-gray-100">
                    <p className="font-thin font">“No hemos sido los primeros, pero seremos los mejores.”</p>
                    <p className="font-medium bg-gradient-to-r from-indigo-500  to-pink-700 inline-block text-transparent bg-clip-text">Steve Jobs</p>
                </div>
            </div>
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="content-footer grid-1 grid md:grid-cols-1 justify-normal ">
                    <div className="w-24">
                        <img src="https://raw.githubusercontent.com/Jonvtvn/Jonvtvn.github.io/main/logo/Logo-jp-sin-fondo.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="size-footer bg-footer p-6 text-center text-gray-800 dark:text-gray-100 dark:bg-neutral-800">
                <span className="font-medium">© 2023 Copyright:</span>
                <a className="font-black" href="https://github.com/Jonvtvn"> Jonatan Isaac Pizarro Orellana</a>
            </div>
        </footer >
    )
}

export default Footer