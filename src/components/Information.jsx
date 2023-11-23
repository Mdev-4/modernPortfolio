import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const Information = ({ currentStage }) => {
  if (currentStage === 1)
    return (   
    <div className="info-box">
      <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism relative top-4 text-white ">
        Hi, I'm<span className="font-semibold mx-2 text-white">Mouhamed</span>{" "}
        👋
        <br />
        <span className="text-primary">A Software Engineer form Senegal 🇸🇳</span>
        <br />
      </h1>
      </div>
    );

  if (currentStage === 2)
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Découvrez mon parcours de développeur web passionné. Spécialisé en
          React, je crée des interfaces fluides pour optimiser l'expérience
          utilisateur.
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Mon parcours
          <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );

  if (currentStage === 3)
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Découvrez mes réalisations en développement web. Des projets variés
          conçus avec soin pour proposer une expérience utilisateur optimale.
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Voir mes projects
          <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );

  if (currentStage === 4)
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Vous avez un projet ? Discutons-en ! <br />
          Je suis disponible pour échanger sur vos besoins et vous proposer des
          solutions adaptées.
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Let's talk
          <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );

  return null;
};

export default Information;
