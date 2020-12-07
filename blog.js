import React, { Component } from 'react'
import AttractionList from './attractions-list.component';
import CreateAttraction from './create-attraction.component';
import Navbar from './navbar.component';
import OverTheRhine from '../assets/food/16bit.jpg';
import '../css/Blog.css'


class Blogs extends Component {
    render() {
        return (
            <div className="App">
                {/* start of header section - cc */}
               <header id="header-blog-section">
                  {/* navbar component - cc */}
                  <Navbar />
                  <div className="header-blog-text container text-center">
                     <div className="line"></div>
                     <h1>The<br/><span>Latest News</span></h1>
                     <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/> Autem illo doloribus vero hic adipisci suscipit itaque porro saepe <br/> iure culpa? utem illo doloribus vero hic adipisci suscipit itaque porro <br/> saepe iure culpa.
                     </p>
                  </div>
               </header>
                {/* end of header section - cc */}

                 {/* start of blog section - cc */}
               <section className="blog-section container">
                    <div className="blog-article-container text-center">
                        <div className="line"></div>
                        <h2>Featured Post</h2>
                        <article>
                            <p className="blog-title">Over The Rhine</p>
                            <p className="blog-author">By Sara Davidson - November 30, 2020</p>
                            <img src={ OverTheRhine } atl=""/>
                            <div className="content">
                                <p className="letter">E</p>
                                <p className="text">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem illo doloribus   vero hic adipisci suscipit itaque porro saepe iure culpa? utem illo doloribus     vero hic adipisci suscipit itaque porro saepe iure culpa. Lorem ipsum dolor     sit amet consectetur adipisicing elit. Autem illo doloribus vero hic adipisci   suscipit itaque porro saepe iure culpa? utem illo doloribus vero hic adipisci     suscipit itaque porro saepe iure culpa. Lorem ipsum dolor sit amet  consectetur  adipisicing elit. Autem illo doloribus vero hic adipisci    suscipit itaque porro saepe iure culpa? utem illo doloribus vero hic adipisci  suscipit itaque porro saepe iure culpa. adipisci  suscipit itaque porro saepe iure culpa. 
                                     <a href=""> Read More</a>
                                </p>
                            </div>
                        </article>
                        <hr/>
                    </div>
               </section>
             {/* end of blog section - cc */}
            <CreateAttraction />
            <AttractionList />
            </div>
        )
    }
}

export default Blogs;