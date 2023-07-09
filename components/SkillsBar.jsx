import React from "react";
import SkillsHTML from "../components/components-childs/SkillsHTML";
import SkillsCSS from "./components-childs/SkillsCSS";
import SkillsJS from "./components-childs/SkillsJS";
import SkillsJAVA from "./components-childs/SkillsJAVA";
import SkillsPY from "./components-childs/SkillsPY";
import SkillsNJS from "./components-childs/SkillsNJS";
import SkillsANGULAR from "./components-childs/SkillsANGULAR";
import SkillsRJS from "./components-childs/SkillsRJS";

import { FaPython, FaNodeJs, FaJava, FaHtml5, FaCss3Alt, FaReact, FaJs, FaAngular } from 'react-icons/fa';


function SkillsBar() {
    return (
        <div className="contenedor-skill pb-28 relative" id="skills">
            <div className="w-full">
                <h1 className="text-title pt-24 text-center text-white font-bold" id="sobremi">SKILLS</h1>
                <div className="animation-border justify-center content-center items-center">
                    <div className="animation rounded-lg justify-center content-center"></div>
                </div>
                <div className="box_skills text-white py-16 text-center justify-center gap-6">
                    <FaHtml5 className="log_skill" />
                    <FaCss3Alt className="log_skill" />
                    <FaJs className="log_skill" />
                    <FaJava className="log_skill" />
                    <FaPython className="log_skill" />
                    <FaNodeJs className="log_skill" />
                    <FaAngular className="log_skill" />
                    <FaReact className="log_skill" />
                </div>
            </div>
        </div>

    )
}

export default SkillsBar;