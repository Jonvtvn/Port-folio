import React from "react"

export default function SkillsHTML() {
    return (
        <div className="skill-box mb-2 pt-14">
            <span className="title text-white">HTML</span>
            <div className="skill-bar">
                <span className="skill-per html bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    <span className="tooltip">95%</span>
                </span>
            </div>
        </div>
    )
}

