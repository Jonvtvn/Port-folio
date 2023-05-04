import React from "react";
import SkillsHTML from "../components/components-childs/SkillsHTML";
import SkillsCSS from "./components-childs/SkillsCSS";
import SkillsJS from "./components-childs/SkillsJS";
import SkillsJAVA from "./components-childs/SkillsJAVA";
import SkillsPY from "./components-childs/SkillsPY";
import SkillsNJS from "./components-childs/SkillsNJS";
import SkillsANGULAR from "./components-childs/SkillsANGULAR";
import SkillsRJS from "./components-childs/SkillsRJS";


function SkillsBar() {
    return (
        <div className="contenedor-skill pb-28" id="skills">
            <div className="w-full max-w-sm">
                <h1 className="text-title pt-28 text-center text-white font-black" id="sobremi">SKILLS</h1>
                <div className="animation-border justify-center content-center items-center">
                    <div className="animation rounded-lg justify-center content-center"></div>
                </div>
                <SkillsHTML />
                <SkillsCSS />
                <SkillsJS/>
                <SkillsJAVA/>
                <SkillsPY/>
                <SkillsNJS/>
                <SkillsANGULAR/>
                <SkillsRJS/>
            </div>
        </div>

    )
}

export default SkillsBar;