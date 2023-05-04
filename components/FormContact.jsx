'use client'
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContentForm from "./components-childs/ContentForm";

function FormContact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_hpltwji", "template_1ie9uwb", form.current, "Et8PkEIiHqyOPmx8M")
            .then((result) => {
                console.log(result.text);
                Array.from(document.getElementById("formul")).forEach(
                    formul => (formul.value = "")
                );
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <section className="contenedor-form pt-28 pb-28" id="formcontacto">
            <form id="formul" className="w-full max-w-sm" ref={form} onSubmit={sendEmail} >
                <h1 className="text-title text-center text-white  font-black" id="sobremi" >CONTACTO</h1>
                <div className="animation-border justify-center content-center items-center">
                    <div className="animation rounded-lg justify-center content-center"></div>
                </div>
                <ContentForm />
                <div className="flex justify-center items-center text-center">
                    <div className="justify-center items-center text-center">
                        <button className="justify-center items-center text-center shadow bg-indigo-700 hover:bg-indigo-950 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">Enviar</button>
                    </div>
                </div>
            </form>
        </section>
    )
}

export default FormContact