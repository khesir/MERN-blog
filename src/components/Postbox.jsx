import React from "react";

const Postbox = (props) => {
    return(
        <div className="postbox">
            <div className="article">
                <div className="article-image">
                    <img src={props.image} alt={props.title} />
                </div>
                <div className="article-content">
                    <div className="article-title">
                        <h2>{props.title}</h2>
                    </div>
                    
                    <div className="article-footer">
                        <div className="article-author">
                            <p>Author: <span>{props.author}</span></p>
                        </div>
                        <div className="article-date">
                            <p>Published: <span>{props.date}</span></p>
                        </div>
                    </div>
                
                </div>
             </div>
        </div>
    );
};

export default Postbox;