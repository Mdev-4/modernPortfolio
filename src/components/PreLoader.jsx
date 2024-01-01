import { useState, useEffect } from 'react';
import { gsap } from 'gsap';  
import "../PreLoader.css";

function PreLoader() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {

    const loadingPage = document.querySelector('.loading-page');
    const logo = document.querySelector('.name-container');

    const timer1 = setTimeout(() => {
      if(loadingPage) {
        gsap.to(loadingPage, {duration: 2, opacity: 0});
      }
    }, 15000);

    const timer2 = setTimeout(() => {
      if(logo) {
        gsap.fromTo(logo, {y: 100, opacity: 0}, {duration: 2, opacity: 1})
      }
      
      setLoaded(true);

    }, 15000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    }

  }, []);

  return (
    <div className="pre">
     { !loaded && 
       <div className="loading-page">
         <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M22.7 33.4c13.5-4.1 28.1 1.1 35.9 12.9L224 294.3 389.4 46.2c7.8-11.7 22.4-17 35.9-12.9S448 49.9 448 64V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V169.7L250.6 369.8c-5.9 8.9-15.9 14.2-26.6 14.2s-20.7-5.3-26.6-14.2L64 169.7V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 49.9 9.2 37.5 22.7 33.4z"/></svg>

         <svg className='l' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><path d="M64 32c17.7 0 32 14.3 32 32V416H288c17.7 0 32 14.3 32 32s-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32z"/></svg>

         <div className="name-container">
       <div className="logo-name">Mouhamed Lo</div> 
     </div>
       </div>
     }
     
     { loaded &&  
       <div className="loading-page" style={{display: "none"}}>
         {/* Loader caché */}
       </div>
     }

     

    </div>
  );

}

export default PreLoader;