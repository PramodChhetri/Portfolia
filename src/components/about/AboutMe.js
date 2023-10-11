import React from 'react';
import './AboutMe.css';
import experienceIcon from '../../assets/experience.png';
import educationIcon from '../../assets/education.png';

const AboutMe = () => {
  return (
    <>  
    <section id='aboutMe'>
    <span className="aboutMeTitle">About Me </span>
    <span className='aboutMeDesc'>Bringing over a year of hands-on experience in web development, I am a dedicated professional currently pursuing a BCA Bachelor's Degree, currently in the seventh semester. My skill set encompasses diverse web development technologies for effective project contributions.</span>
    <div className="about-containers">
      <div className="details-container">
        <img src={experienceIcon} alt="Experience icon" className="icon" />
        <h3>Experience</h3>
        <p>1+ years <br />Web Development<br />Freelancing</p>
      </div>
      <div className="details-container">
        <div className="aboutImgContainer">
          <img src={educationIcon} alt="Education icon" className="icon" />
        </div>
        <h3>Education</h3>
        <p>BCA<br />Seventh Semester<br />Tribhuvan University</p>
      </div>
    </div>

    </section>
    </>
  )
}

export default AboutMe
