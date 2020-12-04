import React, { Component } from 'react';
import '../css/About.css';
import Navbar from '../components/navbar.component';

 class About extends Component {
    render() {
        return (
            <div>
            {/* start of header section - cc */}
               <header id="header-about-section">
                  {/* navbar component - cc */}
                  <Navbar />
                  <div className="header-about-text container">
                     <div className="line"></div>
                     <h1>About Us<br/><span>Cincinnati</span></h1>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Autem illo doloribus vero hic adipisci suscipit itaque porro saepe <br/> iure culpa? utem illo doloribus vero hic adipisci suscipit itaque porro <br/> saepe iure culpa.
                     </p>
                     <button className="btn">Explore</button>
                  </div>
               </header>
               {/* end of header section - cc */}
            </div>
        )
    }
}
export default About;