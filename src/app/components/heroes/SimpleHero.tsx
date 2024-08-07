

import React from 'react';

type SimpleHeroProps = {
    heroTitle: string,
    heroSubTitle: string,
  };

const SimpleHero: React.FC<SimpleHeroProps> = ({heroTitle, heroSubTitle}) => {
  return (
    <div className="hero-section">
        <div className="hero-background" aria-hidden="true">
            <div className="hero-background-shape" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>
        <div className="hero-container">
            <div className="announcement">
            <div className="announcement-text">
                Announcing our next round of funding. <a href="#" className="font-semibold text-indigo-600"><span className="absolute inset-0" aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
            </div>
            </div>
            <div className="text-center">
            <h1 className="hero-title">{heroTitle}</h1>
            <p className="hero-subtitle">{heroSubTitle}</p>
            <div className="hero-buttons">
                <a href="#" className="hero-button-primary">Get started</a>
                <a href="#" className="hero-button-secondary">Learn more <span aria-hidden="true">→</span></a>
            </div>
            </div>
        </div>
        <div className="hero-bottom-background" aria-hidden="true">
            <div className="hero-bottom-background-shape" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>
    </div>
  );
};

export default SimpleHero;


