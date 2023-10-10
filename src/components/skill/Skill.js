import React from 'react'
import './Skill.css'
import backend from '../../assets/ui-design.png';
import frontend from '../../assets/website-design.png';
import android from '../../assets/app-design.png';

const Skill = () => {
  return (
    <>
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">Experienced and detail-oriented web developer with expertise in React, Laravel, and Tailwind CSS. Enthusiastic in Android app development using Java. </span>
        <div className="skillBars">
        <div className="skillBar">
            <img src={frontend} alt="Frontend Development" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Frontend Development</h2>
                <p>Skilled in the art of crafting captivating user interfaces using React.js and enhancing aesthetics with Tailwind CSS.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={backend} alt="Backend Development" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Backend Development</h2>
                <p>Proficient in building robust web applications using Laravel, APIs and ensuring seamless database functionality with MySQL.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={android} alt="Android Development" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Andriod Development</h2>
                <p>Eager learner and proficient in Android development with a solid foundation in Java.</p>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Skill
