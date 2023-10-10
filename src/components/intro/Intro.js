import React from 'react';
import './Intro.css';
import { Link } from 'react-scroll';
import bg from '../../assets/image.png'
import btnImg from'../../assets/hireme.png';

const Intro = () => {
  return (
    <>
    <section id='intro'>
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Pramod Chhetri</span><br />Web Developer</span>
            <p className="introPara">Crafting digital experiences with a passion for innovation,I bring ideas to life <br />through elegant code and user-centric design.</p>
            <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg' /> Hire Me </button></Link>
        </div>
        <img src={bg} alt="" className='bg'/>
    </section>
    </>
  )
}

export default Intro
