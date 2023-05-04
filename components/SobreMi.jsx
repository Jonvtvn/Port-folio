import React from "react";
import TypingEffect from "./TypingEffect";


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
            <p className="text-justify my-2 sm:text-lg">
              Soy ingeniero en Informática y actualmente estoy en mi último año de
              estudio. Me apasiona la programación web, tanto en el FrontEnd como
              en el BackEnd, aunque el FrontEnd es mi favorito. Además, tengo
              conocimientos en otras tecnologías como desarrollo móvil y
              aplicaciones de escritorio.
            </p>
          </div>
          <div className="animation-border justify-center content-center items-center ">
            <div className="animation rounded-lg justify-center content-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
