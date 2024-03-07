import React from 'react';

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i className='bx bx-award'></i>
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">Fresher</span>
        </div>
        <div className="about__box">
            <i className="bx bx-briefcase-alt"></i>
            <h3 className="about__title">B.TECH</h3>
            <span className="about__subtitle">2020-2024</span>
        </div>
        <div className="about__box">
            <i className="bx bx-support about__icon"></i>
            <h3 className="about__title">Support</h3>
            <span className="about__subtitle">Online 24/7</span>
        </div>
    </div>
  );
}

export default Info;