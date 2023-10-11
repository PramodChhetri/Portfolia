import React from 'react';
import './Intro.css';
import { Link } from 'react-scroll';
import bg from '../../assets/image.png'
import btnImg from'../../assets/hireme.png';
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
            <Link><button className="btn">Download CV</button></Link>
        </div>
        <img src={bg} alt="" className='bg'/>
    </section>
    </>
  )
}

export default Intro
