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
                    <FaHtml5 className="log_skill log_skill1" />
                    <FaCss3Alt className="log_skill log_skill2" />
                    <FaJs className="log_skill log_skill3" />
                    <FaJava className="log_skill log_skill4" />
                    <FaPython className="log_skill log_skill5" />
                    <FaNodeJs className="log_skill log_skill6" />
                    <FaAngular className="log_skill log_skill7" />
                    <FaReact className="log_skill log_skill8" />
                </div>
            </div>
        </div>

    )
}

export default SkillsBar;