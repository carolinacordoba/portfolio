import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/home.scss";
import Contact from '../components/contact';
import About from '../components/About';

const Home = () => {
  return (
    <>
    <header className="header">
      <div className="header-content">
      <img className='header-img' src="/public/carolinabild.jpg" alt="carolina" />

      <h1 className="header-title">Kul att du hittat hit! 👋 </h1>
      <p className="header-description">
        Carolina här, en digital marknadsförare som turned fullstackutvecklare. Kolla in mina senaste projekt och låt oss ta en kopp kaffe – virtuellt, givetvis!
        </p>        
        <div className="header-buttons">
          <a href="/CV-CarolinaCordoba.pdf" download className="cta-button primary">
            Ladda ner CV
          </a>
          <NavLink to="#contact" className="cta-button secondary">
            Kontakta mig
          </NavLink>
        </div>
      </div>
    </header>
    <About />
    <Contact/>
    </>
  )
}

export default Home
