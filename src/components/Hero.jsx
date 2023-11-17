import React from "react";
import testImg from "../assets/article2.jpg";
import testdata from "../testdata.json";
import Postbox from '../components/Postbox';

const Hero= () => {
    return(
        <div className="hero">
            <div className="container">
                <div className="hero-article">
                    <div className='massive-articles'>
                        <div className="massive-box article-1">
                            <img src={testImg} alt="" />
                        </div>
                        <div className="massive-box  small-posts">
                            <h2 className="mb-title">Latest Posts</h2>
                            <div className="latest-articles">
                                <div className="latest-article">
                                    <h3>Article Title 1</h3>
                                    <a>Published: Anon</a>
                                </div>
                                <div className="latest-article">
                                    <h3>Article Title 2</h3>
                                    <a>Published: Anon</a>
                                </div>
                                <div className="latest-article">
                                    <h3>Article Title 3</h3>
                                    <a>Published: Anon</a>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="small-articles">
                        <div className="small-article"> 
                            <img src={testImg} alt="" />
                        </div>
                        <div className="small-article"> 
                            <img src={testImg} alt="" />
                        </div>
                        <div className="small-article"> 
                            <img src={testImg} alt="" />
                        </div>
                        <div className="small-article"> 
                            <img src={testImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;