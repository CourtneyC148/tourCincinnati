import React, { Component } from 'react';
import Navbar from "../navbar.component";
import '../../css/shop.css'
import Art from '../../assets/places/contempArt.jpg';
import AMS from '../../assets/places/asm.jpg';
import Downtown from '../../assets/downtown/downtown.jpg';
import Bengels from '../../assets/places/paulbrownstadium.jpg';


 class Shop extends Component {
    render() {
        return (
            <div>
              <header id="header-shop-section">
                    <Navbar />
                    <div className="header-shop-text-container container">
                        <div className="line"></div>
                        <h1>Spend money in<br/><span>Cincinnati</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Autem illo doloribus vero hic adipisci suscipit itaque porro saepe <br/> iure culpa? utem illo doloribus vero hic adipisci suscipit itaque porro <br/> saepe iure culpa.
                        </p>   
                        
                        </div>
                     
                    
                    
                </header>
               
                <section className="facts container">
                     <div className="row">
                        <div className="col-lg-6 facts-text-box">
                            <div className="line"></div>
                               <h1>Visit<br/>The Contempary Art Museum</h1>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
                                  Nullam facilisis lorem in enim bibendum interdum. <br/>
                                  Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
                                  eget ultrices est hendrerit.
                               </p>
                              </div>

                        <div className="col-lg-6" id='smol'>
                           
                                    <img className="shop-img" src={ Art } alt="Outside the Contempary Art" />
                                    </div>                                
                                </div>                               
                                                                              
                </section>
                <section className="facts container">
                     <div className="row">
                     <div className="col-lg-6" id='smol'>
                        
                             <img className="shop-img" src={ Bengels } alt="Inside Paul Brown Stadium" />
                                    </div>      

                        <div className="col-lg-6 facts-text-box">
                           <div className="line"></div>
                               <h1>Visit<br/>Paul Brown Stadium</h1>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
                                  Nullam facilisis lorem in enim bibendum interdum. <br/>
                                  Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
                                  eget ultrices est hendrerit.
                               </p>
                              </div>
                                                             
                                </div>                                           
                </section>
                <section className="facts container">
                     <div className="row">
                        <div className="col-lg-6 facts-text-box">
                            <div className="line"></div>
                               <h1>Visit<br/>The American Sign Museum</h1>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
                                  Nullam facilisis lorem in enim bibendum interdum. <br/>
                                  Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
                                  eget ultrices est hendrerit.
                               </p>
                              </div>

                        <div className="col-lg-6" id='smol'>
                           
                                    <img className="shop-img" src={ AMS } alt="American Sign Museum" />
                                    </div>                                
                                </div>                                           
                </section>
                <section className="facts container">
                     <div className="row">
                       
                        <div className="col-lg-6" id='smol'>
                                 <img className="shop-img" src={ Downtown } alt="Downtown Cincinnati" />
                                    </div>    
                                    <div className="col-lg-6 facts-text-box">
                            <div className="line"></div>
                               <h1>Visit<br/>Downtown</h1>
                               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel dui vel lectus efficitur rutrum.<br/>
                                  Nullam facilisis lorem in enim bibendum interdum. <br/>
                                  Nulla non tincidunt metus, ac lobortis libero. Suspendisse dictum ante eu enim iaculis, <br/>
                                  eget ultrices est hendrerit.
                               </p>
                              </div>                             
                                </div>                                           
                </section>


           </div> 
        )
    }
} 

export default Shop;