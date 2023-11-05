import React, { useState } from "react";
import Navbar from '../components/Navbar';
import SearchBar from '../components/Searchbar';
import Profile from '../components/Profile';
import AboutMe from '../components/AboutMe';
import CreatePost from '../components/CreatePost';
import Postbox from '../components/Postbox';

const Homepage = () => {
    const [aboutMe, setAboutMe] = useState(true);
    const [createPost, setCreatePost] = useState(false);

    const handleAboutMe = () => {
        setAboutMe(!aboutMe);
        setCreatePost(false);
    }
    const handleCreatePost = () => {
        setCreatePost(!createPost);
        setAboutMe(false);
    }
    return(
        <div className="Home">
            <Navbar />
            <SearchBar />
            <div className='mainContent'>
                
                <div className='left'>
                    <Profile />
                    <button onClick={handleAboutMe} disabled={aboutMe}>About me</button>
                    <button onClick={handleCreatePost} disabled={createPost}>Contact me</button>
                    {/*2 different buttons that activate either aboutme and CreatePost*/}

                    {aboutMe && <AboutMe />}            
                    {createPost && <CreatePost />}
                </div>
                <div className='right'>
                    <Postbox onClick={true} />
                    <Postbox />
                    <Postbox />
                    <Postbox />
                    <Postbox />
                    <Postbox />
                    <Postbox />
                </div>
            </div>
        </div>
    )
}

export default Homepage;