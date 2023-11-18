import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

//Temporary
import pfp from '../assets/pfp.jpg'

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 0) {
                document.querySelector('.navbar').classList.add('scrolled')
            } else {
                document.querySelector('.navbar').classList.remove('scrolled')
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    },[]);
    
    return(
        <div className='navbar'>
            <div className="container">
                <div className='nav-brand'> 
                    <Link className='link' to='/'> 
                        <label htmlFor="">Blog</label>
                    </Link>
                </div>
                <div className="links">
                    <Link className='link' to='/?cat=art'>
                        <h6>Art</h6>
                    </Link>
                    <Link className='link' to='/?cat=games'>
                        <h6>Games</h6>
                    </Link>
                    <Link className='link' to='/?cat=programming'>
                        <h6>Programming</h6>
                    </Link>
                    <Link className='link' to='/?cat=lifestyle'>
                        <h6>Lifestyle</h6>
                    </Link>
                    <Link className='link' to='/?cat=Hobbies'>
                        <h6>Hobbies</h6>
                    </Link>
                    <div className='nav-user'>
                    <div className='user-actionbtn btn '>
                        <Link className=' link exclude-hover'to='/create'>
                            <h6>Post</h6>
                        </Link>
                    </div>
                        <Link to='/profile/1'>
                            <div className='img-container'>
                                <img src={pfp} alt="userprofile" />
                            </div>
                        </Link>
                    </div>
                </div>
                
            </div>
        </div>
    )
}
export default Navbar