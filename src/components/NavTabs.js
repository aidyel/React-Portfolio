import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a 
                href="#Home"
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active': 'nav-link'}>
               
                Home
                </a>
            </li>
            <li className="nav-item">
                <a 
                href="#About"
                onClick={() => handlePageChange('About')}
                className={currentPage === 'About' ? 'nav-link active': 'nav-link'}>
               
                About
                </a>
            </li>
            <li className="nav-item">
                <a 
                href="#Portfolio"
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Work' ? 'nav-link active': 'nav-link'}>
               
                Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a 
                href="#Contact"
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active': 'nav-link'}>
               
                Contact
                </a>
            </li>
            <li className="nav-item">
                <a 
                href="#Resume"
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active': 'nav-link'}>
               
                Resume
                </a>
            </li>
            
            
            
        </ul>
    )
};

export default NavTabs;