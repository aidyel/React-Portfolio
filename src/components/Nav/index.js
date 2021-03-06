import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav className="navbar navbar-expand-sm bg-light">
    
            <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                    <a
                        href="/"
                        onClick={() => handlePageChange('Home')}
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>

                        Home
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#About"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>

                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#Portfolio"
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>

                        Portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#Contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>

                        Contact
                    </a>
                </li>
                <li className="nav-item">
                    <a
                        href="#Resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>

                        Resume
                    </a>
                </li>



            </ul>
        
        </nav>
    )
};

export default NavTabs; 