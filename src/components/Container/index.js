import React, { useState } from "react";
import Home from '../Home'
import About from "../About";
import Contact from "../Contact";
import Portfolio from "../Portfolio/index.js";
import Resume from "../Resume/index.js";
import Nav from "../Nav"

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("Home");

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />
        }
        if (currentPage === 'About') {
            return <About />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />
        }
        if (currentPage === 'Contact') {
            return <Contact />
        }
        if (currentPage === 'Resume') {
            return <Resume />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange}
            />
            {renderPage()}

        </div>
    )
}

