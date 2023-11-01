import React from 'react';
import './Intro.css';
import bg from '../../assets/image.png'
import CV from '../../assets/cv.pdf';
import ParticlesComponent from '../particles/ParticlesComponent'; 

const Intro = () => {
  return (
    <>
    <section id='intro'>
      <ParticlesComponent/>
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Pramod Chhetri</span><br />Web Developer</span>
            <p className="introPara">Crafting digital experiences with a passion for innovation,I bring ideas to life <br />through elegant code and user-centric design.</p>
            <a href={CV} download>
            <button className="btn">Download CV</button>
          </a>
        </div>
        <img src={bg} alt="" className='bg'/>
    </section>
    </>
  )
}

export default Intro
