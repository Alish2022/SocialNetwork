import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav= ()=> {
    return (
        <div className={s.nav}>
            <div><NavLink to="/profile">Profile</NavLink></div>
            <div><NavLink to="/dialogs">Dialogs</NavLink></div>
            <div><NavLink to="/settings">Settings</NavLink></div>
            <div><NavLink to="/music">Music</NavLink></div>
            <div><NavLink to="/news">News</NavLink></div>
        </div>
    );
}

export default Nav;
