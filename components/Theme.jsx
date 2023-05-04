'use client'
import React from "react";
import 'material-symbols';

if (typeof window !== "undefined") {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.querySelector("html").classList.add("dark");
        const lightdark = document.querySelectorAll('[data-type="theme"]');

        for (let i = 0; i < lightdark.length; i++) {
            lightdark[i].checked = true;
        }
    }
    const darkmode_func = function () {
        const lightdark = document.querySelectorAll('[data-type="theme"]');

        if (lightdark != null) {
            for (let i = 0; i < lightdark.length; i++) {
                lightdark[i].addEventListener("click", function () {
                    const result = document.querySelector("html").classList.toggle("dark");
                    if (result) {
                        localStorage.setItem("theme", "dark");
                    } else {
                        localStorage.setItem("theme", "");
                    }
                });
            }
        }
    }
    darkmode_func();
}


export default function Theme() {
    return (
        <>
            <div className="toggle-switch relative inline-flex" role="tooltip" >
                <button data-type="theme" id="lightdark" className="relative block material-symbols-outlined w-12 h-12 gap-x-2 rounded-full text-lg font-medium bg-neutral-700 text-pink-600 dark:text-primary-200">
                    <span className="material-symbols-outlined dark-hidden">light_mode</span>
                    <span className="material-symbols-outlined dark-block">dark_mode</span>
                </button>
            </div>
        </>
    );
}

