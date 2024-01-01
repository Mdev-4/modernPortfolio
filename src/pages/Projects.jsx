import { Link } from "react-router-dom";

import  CTA  from "../components/CTA";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-200 font-semibold mt-2 leading-relaxed">
        Qu'il s'agisse de sites web complexes, d'applications web dynamiques ou
        de plateformes web innovantes, j'ai exploré divers frameworks et
        technologies du monde web pour créer des produits digitaux dont je suis
        fier. Bien que mes réalisations ne soient pas open source, elles
        reflètent mes compétences en tant que développeur web et ma passion pour
        la création de solutions web élégantes, fluides et efficaces. J'espère
        que la présentation de ces projets web phares vous donnera un bon aperçu
        de mon parcours, de mon style de codage en JavaScript et de ce qui me
        motive dans la réalisation de produits numériques côté frontend et
        backend. Que ce soit par le choix des frameworks web, l'architecture des
        applications ou le souci de l'expérience utilisateur, je mets un point
        d'honneur à soigner chaque projet web sur lequel je travaille.
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-200 font-[600]" >{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
