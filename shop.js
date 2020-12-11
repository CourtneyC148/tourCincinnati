import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Navbar from "../navbar.component";
import '../../css/shop.css';
import Art from '../../assets/places/contempArt.jpg';
import AMS from '../../assets/places/asm.jpg';
import Downtown from '../../assets/downtown/downtown.jpg';
import Bengels from '../../assets/places/paulbrownstadium.jpg';
import Shops from '../../assets/places/shop.png';
import Footer from '../FrontEndComponents/Footer';


const Shop = () => {

   // animate on scroll - cc 
   useEffect(() => {
      Aos.init({duration: 1500});
   }, [])

   return (
      <div>
         <header id="header-shop-section">
            <Navbar />
            <div className="header-shop-text-container container">
               <div className="line"></div>
               <h1>Shop In<br/><span>Cincinnati</span></h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Autem illo doloribus vero hic adipisci suscipit itaque porro saepe <br/> iure culpa? utem illo doloribus vero hic adipisci suscipit itaque porro <br/> saepe iure culpa.
               </p>   
            </div>
         </header>

         <section data-aos="fade-in" className="shopping-section">
            <div className="container">
                  <div className="shop-info-container">
                     <img src={ Shops } atl="Best places to shop in Cincinnati" />
                     <p className="text-justify">
                        Cincinnati is a diverse, interesting city and the shopping scene  reflects that.

                        One of the best places to shop in Cincinnati is also the oldest.  Findlay Market is the oldest continuously  operated public market in Ohio, in operation since 1855. The colorful market is located in the Over-the-Rhine neighborhood and offers tours in which you learn more about the history of the market and shops.

                        While in Over-the-Rhine, check out the growing shopping scene in this beautifully restored historic district.

                        Other historic shopping districts include Bellevue’s Historic  Fairfield Avenue, a charming revitalized area, and Hyde Park Square, with several upscale boutiques.

                        Cincinnati is also home to several shopping malls, both indoors and  out, that feature popular retail chains as well as some independent stores. The most popular are Kenwood Towne Centre, Rookwood Commons and Cincinnati Premium Outlets.

                        Antique lovers will find a large mall just for them: Ohio Valley  Antique Mall is the area’s largest with over 450   dealers.

                        Two notable unique stores also made the list. Jungle Jim’s  International Market is a grocery store that is an attraction, in and of itself. Indigenous is a handcrafted gallery filled with the work of over 150 artists, mostly local and regional.

                        Where you’re shopping for clothing, accessories, home furnishings,  specialty items or culinary delights, you’re sure to find it in one of Cincinnati’s many shopping areas.
                     </p>
                  </div>
            </div>
         </section>
                <h2 data-aos="fade-in" className="text-center shop-title">Places To Shop</h2>
                <section data-aos="fade-right" className="shop-section">
                  <div className="row shops-container">
                     <div className="col-lg-6 align-self-center">
                           <div className="line"></div>
                           <h2>Shop At<br/><span>Monroe Premium Outlet</span></h2>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.      Etiam vel dui vel lectus efficitur rutru. Nullam facilisis lorem in enim bibendum interdum. Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, eget ultrices est hendrerit.
                           </p>
                     </div>
                     <div className="col-lg-6 img d-flex justify-content-center">
                        <img src={ AMS } alt="16 Bit Arcade and Bar" />
                     </div> 
                                                             
                  </div>                                           
                </section>

                <section data-aos="fade-left" className="shop-section shop-right">
                  <div className="row shops-container">
                     <div className="col-lg-6 img d-flex justify-content-center">
                        <img src={ Downtown } alt="Taste of Cincinnati" />
                     </div> 
                     <div className="col-lg-6 align-self-center">
                           <div className="line"></div>
                           <h2>Shop At<br/><span>OTR Retail District</span></h2>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.      Etiam vel dui vel lectus efficitur rutru. Nullam facilisis lorem in enim bibendum interdum. Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, eget ultrices est hendrerit.
                           </p>
                     </div>                                                             
                  </div>                                           
                </section>

                <section data-aos="fade-right" className="shop-section d-inline-block">
                  <div className="row shops-container">
                     <div className="col-lg-6 align-self-center">
                           <div className="line"></div>
                           <h2>Shop At<br/><span>Kenwood Mall</span></h2>
                           <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.      Etiam vel dui vel lectus efficitur rutru. Nullam facilisis lorem in enim bibendum interdum. Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, eget ultrices est hendrerit.
                           </p>
                     </div>
                     <div className="col-lg-6 img d-flex justify-content-center">
                        <img src={ Bengels } alt="Nada Restaurant" />
                     </div>                                     
                  </div>                                           
                </section>
         <Footer/>
      </div>
   )
}

export default Shop;