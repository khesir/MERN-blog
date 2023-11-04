import React, { useState } from 'react';
import pfp from '../assets/pfp.jpg';

function Profile (){
    return (
        <div class="profile">
            <div className= "profile-holder">
                <img src={pfp}
                alt='profilepicture' />
            </div>
            <div className='profile-text'>
                <label>Author: Khesir</label>
                <label>Description: </label>
            </div>
        </div>
    );
}

export default Profile;