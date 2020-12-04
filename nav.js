import React, { Component } from 'react';
import Navbar from "../navbar.component";
import Attractions from '../../assets/icons/attraction.png';
import Hotels from '../../assets/icons/hotel.png';
import Population from '../../assets/icons/population.png';
import Restaurants from '../../assets/icons/food.png';
import Airport from '../../assets/places/cvg.png';
import VideoBg from '../../assets/downtown/bg-video.mp4';
import Carousels from '../StayCarousel';
import '../../index.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                {/* start of header section - cc */}
                <header id="header-section">

                    <video id="videobcg" preload="auto" autoplay="true" loop="loop" muted="muted" volume="0">
                        <source src={ VideoBg } type="video/mp4"/>
                        <source src="movie.webm" type="video/webm"/>Sorry, your browser does not support HTML5 video.
                    </video>

                    {/* navbar component */}
                    <Navbar />
                    <div className="header-text-container container">
                        <div className="line"></div>
                        <h1>Explore<br/><span>Cincinnati</span></h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Autem illo doloribus vero hic adipisci suscipit itaque porro saepe <br/> iure culpa? utem illo doloribus vero hic adipisci suscipit itaque porro <br/> saepe iure culpa.
                        </p>
                        <button className="btn">Explore</button>
                    </div>
                </header>
                {/* end of header section - cc */}

                {/* start of facts section - cc */}
                <section className="facts container">
                    <div className="row">
                        <div className="col-lg-6 facts-text-box">
                            <div className="line"></div>
                            <h2>Here's<br/><span>Some Facts</span></h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam ducimus, ratione aut eveniet facere tenetur veritatis assumenda ipsum accusamus!
                            </p>
                        </div>
                        <div className="col-lg-6 d-flex justify-content-end">
                            <div className="row ">
                                <div className="col-lg-6 d-flex justify-content-end">
                                    <div className="box">
                                    <img className="icons" src={ Attractions } alt="Attractions icon"/>
                                    </div>
                                    <div className="box">
                                    <h5 className="fact-info">23<br/><span>Attractions</span></h5>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex justify-content-end">
                                <div className="box">
                                    <img className="icons" src={ Hotels } alt="Attractions icon"/>
                                    </div>
                                    <div className="box">
                                    <h5 className="fact-info">17<br/><span className="hotels">Hotels</span></h5>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex justify-content-end mt-4">
                                <div className="box">
                                    <img className="icons" src={ Population } alt="Attractions icon"/>
                                    </div>
                                    <div className="box">
                                    <h5 className="fact-info">94,000<br/><span>Population</span></h5>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex justify-content-end mt-4">
                                <div className="box">
                                    <img className="icons" src={ Restaurants } alt="Attractions icon"/>
                                    </div>
                                    <div className="box">
                                    <h5 className="fact-info">59<br/><span>Restaurants</span></h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end of facts section - cc */}

                {/* start of map section - cc */}
                <section className="airpot-map-section">
                    <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12046.01718875996!2d-84.66798342097306!3d39.049898524453845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8841c8f2f631659f%3A0xab9a445aa5754dde!2sCincinnati%2FNorthern%20Kentucky%20International%20Airport!5e0!3m2!1sen!2sus!4v1606962960563!5m2!1sen!2sus" width="100%" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                    <div className="airport-info">
                        <img src={ Airport } alt="cincinnati airport"/>
                        <div className="text-box">
                            <h3>CVG Airport</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut qui ipsa numquam ut optio totam. Aut qui ipsa numquam ut optio totam.
                            </p>
                            <a href="">Visit the website <i class="fas fa-long-arrow-alt-right"></i></a>
                        </div>
                    </div>
                </section>
                {/* end of map section - cc */}

                {/* start of stay section - cc */}
                <section className="stay-section container">
                    <div className="line"></div>
                    <h2>Stay</h2>
                    <ul>
                        <li>Over the rhine</li>
                        <li>Mt. adams</li>
                        <li>Clifton</li>
                        <li>Hyde park</li>
                    </ul>
                    
                    {/* carousel component */}
                    <Carousels/>
                </section>
                {/* end of stay section - cc */}

                {/* start of things to do section - cc */}
                <section className="things-section">
                    <div className="container">
                        <div className="info row">
                            <div className="col-lg-4">
                                <h3>Shop</h3>
                                <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut qui ipsa numquam ut optio totam. Aut qui ipsa numquam ut optio totam.
                                </p>
                                <button className="btn">Shop</button>
                            </div>
                            <div className="col-lg-4">
                                <h3>Eat</h3>
                                <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut qui ipsa numquam ut optio totam. Aut qui ipsa numquam ut optio totam.
                                </p>
                                <button className="btn">Eat</button>
                            </div>
                            <div className="col-lg-4">
                                <h3>Play</h3>
                                <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut qui ipsa numquam ut optio totam. Aut qui ipsa numquam ut optio totam.
                                </p>
                                <button className="btn">Play</button>
                            </div>
                        </div>
                    </div>
                </section>
                {/* end of things to do section - cc */}

                {/* start of newsletter section - cc */}
                <section className="newsletter-section">
                    <div className="container">
                        <div className="row">
                            <div className="newsletter-info-box col-lg-6">
                            <div className="line"></div>
                                <h2>Subcribe to our<br/><span>Newsletter</span></h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus aperiam ducimus, ratione aut eveniet facere tenetur veritatis assumenda ipsum accusamus!
                                </p>
                            </div>
                            <div className="newsletter-form col-lg-6">
                                <form id="newsletter-form">
                                    <input className="mr-4" type="text" placeholder="First Name" />
                                    <input type="text" placeholder="Last Name" />
                                    <br/>
                                    <input className="mt-4 email-input" type="email" placeholder="Enter Your Email Address" />
                                </form>
                                <button className="submit form-btn">Submit</button>
                            </div>
                        </div>
                        
                    </div>
                </section>
                {/* end of newsletter section - cc */}

            </div>
        )
    }
}
