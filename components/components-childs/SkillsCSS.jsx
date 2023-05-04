import React from "react"

export default function SkillsCSS() {
    return (
        <div className="skill-box mb-2">
            <span className="title ">CSS</span>
            <div className="skill-bar">
                <span className="skill-per css bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <span className="tooltip">70%</span>
                </span>
            </div>
        </div>
    )
}

