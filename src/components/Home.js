import React from 'react';
import { Link } from 'react-router-dom';
import { getAllLanguages } from '../data/exercises';
import heroBg from '../assets/images/hero-bg.webp';
import './Home.css';

function Home() {
    const languages = getAllLanguages();

    return (
        <div className="home">
            {/* ========= HERO SECTION ========= */}
            <section className="hero">
                <img
                    className="hero-bg-video"
                    src={heroBg}
                    alt="Hero background"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        zIndex: 0,
                    }}
                />
                <div className="hero-content">
                    <span className="kicker">START YOUR JOURNEY</span>
                    <h1>
                        <span className="hero-main">DISCOVER THE AMAZING<span className="highlight-text"> WORLD OF CODING</span></span>
                    </h1>
                    <p className="hero-subtitle">
                        Master programming through real interview challenges.<br />
                        Practice, learn, and level up your skills.
                    </p>
                    <a href="#languages" className="btn-primary large">
                        GET STARTED
                    </a>
                </div>
            </section>

            {/* ========= LANGUAGES SECTION ========= */}
            <section className="languages-section" id="languages">
                <div className="section-header">
                    <span className="section-kicker">TECHNOLOGIES</span>
                    <h2>EXPLORE <span className="highlight-number">+{languages.length}</span> LANGUAGES</h2>
                    <p className="section-subtitle">Choose your favorite programming language and start practicing</p>
                </div>
                <div className="languages-grid">
                    {languages.map((lang) => (
                        <Link
                            to={`/language/${lang.id}`}
                            key={lang.id}
                            className="language-card"
                        >
                            <div className="language-icon">
                                {typeof lang.icon === 'string' && lang.icon.length <= 2 ? (
                                    lang.icon
                                ) : (
                                    <img src={lang.icon} alt={lang.name} />
                                )}
                            </div>
                            <h3>{lang.name}</h3>
                            <span className="exercise-badge">{lang.exercises.length} exercises</span>
                        </Link>
                    ))}
                </div>
            </section>

            {/* ========= HOW IT WORKS SECTION ========= */}
            <section className="process-section">
                <div className="section-header">
                    <span className="section-kicker">HOW IT WORKS</span>
                    <h2>YOUR PATH TO <span className="highlight-text">SUCCESS</span></h2>
                    <p className="section-subtitle">Simple steps to improve your coding skills</p>
                </div>

                <div className="process-steps">
                    {/* Step 1 */}
                    <div className="process-step">
                        <div className="step-image">
                            <div className="step-icon-box">
                                <span className="step-number">01</span>
                                <img className="step-img" src={require('../assets/images/choose.png')} alt="Choose" />
                            </div>
                        </div>
                        <div className="step-content">
                            <h3>Choose a Challenge</h3>
                            <p>Browse through our collection of real interview problems. Filter by language and difficulty level to find the perfect challenge for you.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="process-step reverse">
                        <div className="step-image">
                            <div className="step-icon-box">
                                <span className="step-number">02</span>
                                <img className="step-img" src={require('../assets/images/write.png')} alt="Write" />
                            </div>
                        </div>
                        <div className="step-content">
                            <h3>Write Your Code</h3>
                            <p>Use our built-in code editor with syntax highlighting. Write, test, and debug your solution in real-time without leaving the browser.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="process-step">
                        <div className="step-image">
                            <div className="step-icon-box">
                                <span className="step-number">03</span>
                                <img className="step-img" src={require('../assets/images/learn.png')} alt="Learn" />
                            </div>
                        </div>
                        <div className="step-content">
                            <h3>Learn & Improve</h3>
                            <p>Check the hints if you're stuck, compare your solution with ours, and understand different approaches to solve the same problem.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ========= CTA SECTION ========= */}
            <section className="cta-section">
                <div className="cta-content">
                    <h2>Ready to Start Coding?</h2>
                    <p>Join thousands of developers preparing for their dream job</p>
                    <a href="#languages" className="btn-primary large">
                        Start Practicing Now
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Home;
