import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import * as Scroll from 'react-scroll';

const Header = () => {
    return (
        <nav class="navbar">
            <ul>
                <li><a class="button = test" href="/">Home</a></li>
                <li><a class="button" href="/#summary">Summary</a></li>
                <li><a class="button" href="/#project">Project</a></li>
                <li><a class="button" href="/#detail">Detail</a></li>
                <li><a class="button" href="/#advice">Advice</a></li>
            </ul>
            
        </nav>
    );
};


export default Header;