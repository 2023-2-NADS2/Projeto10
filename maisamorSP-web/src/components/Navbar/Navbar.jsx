import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

const Navbar = () => {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const [isDropdownVisible, setIsDropdownVisible] = useState({ sobre: false, projetos: false, contato: false });
    const navigate = useNavigate();

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    const handleMouseOver = (section) => {
        setIsDropdownVisible({ ...isDropdownVisible, [section]: true });
    };

    const handleMouseOut = (section) => {
        setIsDropdownVisible({ ...isDropdownVisible, [section]: false });
    };

    const handleNavigation = (section) => {
        setIsNavCollapsed(true);
        closeNavbar();
        if (window.location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                window.location.hash = section;
            }, 0);
        } else {
            window.location.hash = section;
        }
    };

    const closeNavbar = () => {
        const navbarToggler = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        if (!navbarCollapse.classList.contains('collapse')) {
            navbarToggler.click();
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" data-aos="fade-down">
            <div className="container-fluid">
                <a className="navbar-brand" href="#intro" onClick={() => handleNavigation('#intro')}>
                    <img src="./logo.png" alt="Logo" className="navbar-logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarSupportedContent">
                    <ul className="navbar-nav">
                        <li className="nav-item" onClick={() => handleNavigation('#sobre')}>
                            <a className="nav-link" href="#sobre">Sobre nós</a>
                            {isDropdownVisible.sobre && <div className="dropdown-content"></div>}
                        </li>
                        <li className="nav-item" onMouseOver={() => handleMouseOver('projetos')} onMouseOut={() => handleMouseOut('projetos')}>
                            <a className="nav-link" href="#projetos">Projetos</a>
                            {isDropdownVisible.projetos && (
                                <div className="dropdown-content">
                                    <NavLink to="/sonhos" className="dropdown-item">Iniciativa SONHOS</NavLink>
                                </div>
                            )}
                        </li>
                        <li className="nav-item" onClick={() => handleNavigation('#contato')}>
                            <a className="nav-link" href="#contato">Contato</a>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contribua" className="nav-link">Contribua</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://mais-amor-sp.lojaintegrada.com.br/">Loja</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
