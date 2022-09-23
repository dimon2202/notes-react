import React from 'react';
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="navbar-brand">
                Note App
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link 
                        className="nav-link active"
                        to="/"
                    >
                        Главная
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        className="nav-link active"
                        to="/about"
                    >
                        Информация
                    </Link>
                </li>
            </ul>
        </nav>
    )
}