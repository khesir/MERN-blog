import React from 'react';
import Hero from '../components/Hero';
import Postbox from '../components/Postbox';
import testdata from '../testdata.json';
const Home = () => {
    

    return(
        <div className='home'>
            <Hero />
            <div className="container">
                <div className='posts'>
                    <div className='post-title'> 
                        <h2>Latest Posts</h2>
                    </div>
                    <div className='article-list'>
                        {testdata.map((post) => {
                            return(
                                <Postbox
                                    key={post.id}
                                    title={post.title}
                                    description={post.description}
                                    image={post.image}
                                    author={post.author}
                                    date={post.date}
                                />
                            );
                        })}
                    </div>
                    <button className='btn'>View More</button>
                </div>
            </div>
        </div>
    )
}

export default Home;