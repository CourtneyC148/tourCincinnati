import React, { useEffect } from 'react';
import Navbar from "../navbar.component";
import '../../css/Eat.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Arcade from '../../assets/food/16bit.jpg';
import Nada from '../../assets/food/nada.jpg';
import Taste from '../../assets/food/taste.jpg';
import Rhinegiest from '../../assets/food/rhinegeist.jpg';
import FoodPoster from '../../assets/food/eats5.png';


 const Eat = () => {
   // animate on scroll - cc 
   useEffect(() => {
      Aos.init({duration: 1500});
   }, [])

        return (
            <div>
              <header id="header-eat-section">
                    <Navbar />
                    <div className="header-eat-text-container container">
                        <div className="line"></div>
                        <h1>Eat Good In<br/><span>Cincinnati</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Autem illo doloribus vero hic adipisci suscipit itaque porro saepe <br/> iure culpa? utem illo doloribus vero hic adipisci suscipit itaque porro <br/> saepe iure culpa.
                        </p>   
                     </div>
               </header>
               
                <section data-aos="fade-up" className="place-to-eat-section container">
                  <div className="row">
                     <div className="col-lg-6 col-md-12 img mb-4 d-flex justify-content-center">
                        <img src={FoodPoster} atl="bourbon country bbq" />
                     </div>
                     <div className="col-lg-6 col-md-12 text mt-4">
                        <p>
                        Many Chicagoans aren't aware of how close they are to another of the Midwest’s most vibrant and historic cities. In less than five hours via car, you can be in Cincinnati, a city filled with destination dining. Perched along the Ohio River on the Kentucky border, Cincinnati was poised to become the Midwestern mega-city until train lines were routed primarily through Chicago. But that hasn’t stopped the Ohio city from booming in its own right, especially when it comes to restaurants and bars, thanks to its bountiful location in the heart of America’s breadbasket and at the edge of bourbon country. Well worth the day trip or weekend excursion, here are nine must-try restaurants and bars in Cincinnati.<a href="https://www.zagat.com/b/9-must-try-restaurants-in-cincinnati"> Read More</a>
                        </p>
                     </div>
                  </div>                                                        
                </section>

                <h2 data-aos="fade-in" className="text-center title">Some of our favorite places</h2>
                <section data-aos="fade-right" className="eats-section">
                  <div className="row eats-container">
                     <div className="col-lg-6 align-self-center">
                           <div className="line"></div>
                           <h2>Eat At<br/><span>16 Bit Arcade</span></h2>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.      Etiam vel dui vel lectus efficitur rutru. Nullam facilisis lorem in enim bibendum interdum. Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, eget ultrices est hendrerit.
                           </p>
                     </div>
                     <div className="col-lg-6 img d-flex justify-content-center">
                        <img src={ Arcade } alt="16 Bit Arcade and Bar" />
                     </div> 
                                                             
                  </div>                                           
                </section>

                <section data-aos="fade-left" className="eats-section eat-right">
                  <div className="row eats-container">
                     <div className="col-lg-6 img d-flex justify-content-center">
                        <img src={ Taste } alt="Taste of Cincinnati" />
                     </div> 
                     <div className="col-lg-6 align-self-center">
                           <div className="line"></div>
                           <h2>Eat At<br/><span>Taste Of Cincinnati</span></h2>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.      Etiam vel dui vel lectus efficitur rutru. Nullam facilisis lorem in enim bibendum interdum. Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, eget ultrices est hendrerit.
                           </p>
                     </div>                                                             
                  </div>                                           
                </section>

                <section data-aos="fade-right" className="eats-section d-inline-block">
                  <div className="row eats-container">
                     <div className="col-lg-6 align-self-center">
                           <div className="line"></div>
                           <h2>Eat At<br/><span>Nada</span></h2>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.      Etiam vel dui vel lectus efficitur rutru. Nullam facilisis lorem in enim bibendum interdum. Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, eget ultrices est hendrerit.
                           </p>
                     </div>
                     <div className="col-lg-6 img d-flex justify-content-center">
                        <img src={ Nada } alt="Nada Restaurant" />
                     </div>                                     
                  </div>                                           
                </section>
               </div> 
        )
    
} 

export default Eat;