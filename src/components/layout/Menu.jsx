import './Menu.css'
import React from 'react';

import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="/about">Home</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu;