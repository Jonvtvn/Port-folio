import React from "react";
import Link from 'next/link'
import TypingEffect from "./TypingEffect";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function SobreMi() {
  return (
    <section className="contenedor-typing-todo">
      <div className="contenedor-typing">
        <h1 className="typing-fantasma text-transparent bg-clip-text bg-gradient-to-r from-indigo-500  to-pink-700 font-extrabold text-4xl">&lt;Hi, I'm Jonatan Pizarro/&gt;</h1>
        <TypingEffect />
      </div>
      <div className="contenedor">
        <div className="sm:max-w-2xl mx-5 text-center">
          <div className="text-white dark:text-white font-medium">
            <p className="text-justify my-2 sm:text-lg font-thin">
              Soy ingeniero en Informática. Me apasiona la programación Web, tanto en el FrontEnd como en el BackEnd, aunque me especializo en el FrontEnd. Además, tengo conocimientos en otras tecnologías como desarrollo móvil y aplicaciones de escritorio.
            </p>
            <div className="flex gap-7 text-white justify-center mt-4">
              <Link href="https://www.instagram.com/jnv.ispior._/">
                <FaInstagram className="log_red" />
              </Link>
              <Link href="https://www.linkedin.com/in/jonatan-pizarro-orellana-a021001ba/">
                <FaLinkedin className="log_red" />
              </Link>
              <Link href="https://github.com/Jonvtvn">
                <FaGithub className="log_red" />
              </Link>

            </div>
          </div>
          <div className="animation-border justify-center content-center items-center ">
            <div className="animation2 rounded-lg justify-center content-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
