import './nav.css';
import React from "react";
import {Link} from 'react-router-dom';

const Nav  = ()=>{
    return(
        <div className="sidebar">
            Rahul
            <ul >
                <li className='list-item'><Link to='/'>Home</Link></li>
                <li className='list-item'><Link to='/about'>About</Link></li>
                <li className='list-item'><Link to='/service'>Service</Link></li>
                <li className='list-item'><Link to='/work'>Work</Link></li>
                <li className='list-item'><Link to='/contact'>Contact Me</Link></li>
            </ul>
          
        </div>
    )
}
export default Nav;