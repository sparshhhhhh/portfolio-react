import React, { useState } from 'react';
import './projects.css';

const Projects = () => {
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="project section" id="projects">
            <h2 className="section__title">Projects</h2>
            <span className="section__subtitle">Create + Collaborate</span>

            <div className="project__container container grid">
                <div className="project__content">
                    <div>
                        <i className="uil uil-mouse project__icon"></i>
                        <h3 className="project__title">CLICK - AI<br />Vitual Mouse</h3>
                    </div>
                    <span className="project__button" onClick={() => toggleTab(1)}>
                        View More <i className="uil uil-arrow-right project__button-icon"></i>
                    </span>
                    <div className={toggleState === 1 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close" />
                            <h3 className="project__modal-title">CLICK - AI Virtual Mouse</h3>
                            <p className="project__modal-description">
                                A Virtual Mouse controlled using eye and lip gestures to perform basic cursor functions.
                            </p>
                            <ul className="project__modal-project grid">
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon"></i>
                                    <p className="project__modal-info">
                                        OpenCV 
                                    </p>
                                </li>
                                <li className="project__modal-service">
                                <i className="uil uil-check-circle project__modal-icon"></i>
                                    <p className="project__modal-info">
                                        Python
                                    </p>
                                </li>
                                <li className="project__modal-service">
                                <i className="uil uil-check-circle project__modal-icon"></i>
                                    <p className="project__modal-info">
                                        Human - Computer Interaction (HCI)
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="project__content">
                    <div>
                        <i className="uil uil-restaurant project__icon"></i>
                        <h3 className="project__title">RECIPYYY<br />API - MealDB</h3>
                    </div>
                    <span className="project__button" onClick={() => toggleTab(2)}>
                        View More <i className="uil uil-arrow-right project__button-icon"></i>
                    </span>
                    <div className={toggleState === 2 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close" />
                            <h3 className="project__modal-title">RECIPYYY</h3>
                            <p className="project__modal-description">
                                A web app where users can sift through tons of recipes and view the ingredients and the description of the process to prepare the meal.
                            </p>
                            <ul className="project__modal-project grid">
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon"></i>
                                    <p className="project__modal-info">
                                        HTML, CSS and JAVASCRIPT
                                    </p>
                                </li>
                                <li className="project__modal-service">
                                <i className="uil uil-check-circle project__modal-icon"></i>
                                    <p className="project__modal-info">
                                        MealDB API
                                    </p>
                                </li>
                                <li className="project__modal-service">
                                <i className="uil uil-check-circle project__modal-icon"></i>
                                    <p className="project__modal-info">
                                        <a href=" https://sparshhhhhh.github.io/Recipyyy-Javascript/">Recipyy.com</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="project__content">
                    <div>
                        <i className="uil uil-music project__icon"></i>
                        <h3 className="project__title">Spotify Clone<br />(Responsive)</h3>
                    </div>
                    <span className="project__button" onClick={() => toggleTab(3)}>
                        View More <i className="uil uil-arrow-right project__button-icon"></i>
                    </span>
                    <div className={toggleState === 3 ? "project__modal active-modal" : "project__modal"}>
                        <div className="project__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times project__modal-close" />
                            <h3 className="project__modal-title">Spotify Clone (Responsive)</h3>
                            <p className="project__modal-description">
                                A Responsive clone of Spotify Music playing app.
                            </p>
                            <ul className="project__modal-project grid">
                                <li className="project__modal-service">
                                    <i className="uil uil-check-circle project__modal-icon"></i>
                                    <p className="project__modal-info">
                                        HTML, CSS and JAVASCRIPT
                                    </p>
                                </li>
                                <li className="project__modal-service">
                                <i className="uil uil-check-circle project__modal-icon"></i>
                                    <p className="project__modal-info">
                                        Responsive web Design
                                    </p>
                                </li>
                                <li className="project__modal-service">
                                <i className="uil uil-check-circle project__modal-icon"></i>
                                    <p className="project__modal-info">
                                        Users can create playlist and play music directly from Home page.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Projects;