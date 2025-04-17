import React, { useState } from 'react';
import "../styles/about.scss";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded); // Växlar mellan expandera och dölja texten
  };

  return (
    <section className={`about-section ${isExpanded ? 'expanded' : ''}`}>
      <h1 className="about-intro">
        {/* Du kanske är här av nyfikenhet – och vet du vad? Det är jag också.
        Här för att kolla in min resa? Jag söker LIA-plats hösten 2025! */}
        {/* Söker LIA-plats hösten 2025 – nyfiken på vad jag gör? */}
        Vill du vara en del av min resa? Jag söker LIA-plats hösten 2025!
      </h1>
      <p className="about-expanded">
        Jag heter Carolina och har gjort resan som digital marknadsförare som föll för kodens kreativitet, logik och oändliga möjligheter.
        Idag pluggar jag till fullstackutvecklare med fokus på e-handel, och letar efter en LIA-plats med start i september 2025 där jag får växa, bidra och utvecklas på riktigt.
        Med en bakgrund inom marknadsföring och kommunikation är användaren alltid mitt fokus. Jag gillar att skapa webblösningar som känns – sådana som både användaren och verksamheten tjänar på. Och om det råkar vara lite extra snyggt? Ännu bättre.
      </p>
      <button className="read-more-button" onClick={toggleExpand}>
        {isExpanded ? 'Läs mindre' : 'Klicka här och lär känna mig lite bättre'}
      </button>
    </section>
  );
};

export default Home;
