import React from 'react'
import "./footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container container">
        <h1 className="footer__title">Sparsh Dagar &#10084;</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">About</a>
          </li>
          <li>
            <a href="#projects" className="footer__link">Projects</a>
          </li>
          <li>
            <a href="#skills" className="footer__link">Skills</a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/_sparshhhhhhh_/" className="home__social-icon" target="_blank" rel="noreferrer">
            <i className="uil uil-instagram"></i>
          </a>
          <a href="https://www.linkedin.com/in/sparsh-dagar-sde/" className="home__social-icon" target="_blank" rel="noreferrer">
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a href="https://github.com/sparshhhhhh" className="home__social-icon" target="_blank" rel="noreferrer" >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
