import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className='navbar'>
            <div className="container">
                <div className='nav-brand'> 
                    <label htmlFor="">Khesir</label>
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
                </div>
            </div>
        </div>
    )
}
export default Navbar