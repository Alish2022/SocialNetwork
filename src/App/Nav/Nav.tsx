import React from 'react';
import style from './Nav.module.css';

const Nav= ()=> {
    return (
        <div className={style.nav}>
            <div><a href="#">Profile</a></div>
            <div><a href="#">Messages</a></div>
            <div><a href="#">Settings</a></div>
            <div><a href="#">Music</a></div>
            <div><a href="#"></a></div>
        </div>
    );
}

export default Nav;
