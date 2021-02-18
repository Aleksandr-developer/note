import React from 'react'
import { NavLink } from 'react-router-dom'
export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="navbar-brand">
            ЗАМЕТКИ
        </div>

        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact>Главная</NavLink>
            </li>

            <li>
                <NavLink className="nav-link" to="/instruction">Справка</NavLink>
            </li>
        </ul>
    </nav>
    
)