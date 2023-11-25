import React from 'react'
import Postbox from '../components/Postbox'


//Temporary
import pfp from '../assets/pfp.jpg'
import testdata from '../testdata.json';

const Profile = () => {
    return(
        <div className='profile'>
            <div className="container">
                <div className='box1'>
                    <div className='profile-box'>
                        <div className="profile-img">
                            <img src={pfp} alt="" />
                        </div>
                        <div className="profile-info">
                            <h2>Khesir</h2>
                            <div className="profile-stats">
                                <div className="profile-stat">
                                    <h3>Posts</h3>
                                    <p>0</p>
                                </div>
                                <div className="profile-stat">
                                    <h3>Followers</h3>
                                    <p>0</p>
                                </div>
                                <div className="profile-stat">
                                    <h3>Following</h3>
                                    <p>0</p>
                                </div>
                            </div>
                            <button>Follow</button>
                        </div>
                    </div>
                    <div className="aboutme-box">
                        <h1>About me</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate. Quasi, voluptatibus. Quisquam, voluptate. Quasi, voluptatibus.</p>
                    </div>
                </div>
                <div className='box2'>
                    <div className="search">
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className="creator-post">
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
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Profile;