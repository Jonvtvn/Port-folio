'use client'
import React, { useState, useEffect } from 'react';
import 'material-symbols';


export default function Theme() {
    const [scrollY, setScrollY] = useState(0);
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        setScrollY(window.scrollY);
    };

    const handleScrollToTop = () => {
        const scrollStep = window.scrollY / 20;

        const scrollToTop = () => {
            if (window.scrollY > 0) {
                requestAnimationFrame(scrollToTop);
                window.scrollTo(0, window.scrollY - scrollStep);
                setScrollY(window.scrollY - scrollStep);
            }
        };

        scrollToTop();
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setShowButton(scrollY > 0);
    }, [scrollY]);

    return (
        <>
            {showButton && (
                <div id="ir_arriba_boton" onClick={handleScrollToTop} className="ocultar place-content-center text-center items-center origin-center object-center justify-center content-center place-self-center place-items-center justify-self-center justify-items-center">
                    <button className="relative block material-symbols-outlined w-11 h-11 gap-x-2 rounded-full text-lg font-medium bg-neutral-700 text-white dark:text-primary-200">
                        <span class="material-symbols-outlined">
                            keyboard_double_arrow_up
                        </span>
                    </button>
                </div>
            )}
        </>
    );
}

