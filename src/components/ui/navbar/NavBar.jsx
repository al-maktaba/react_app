import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button/MyButton';
import { AuthContext } from '../../../context';

const NavBar = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem("auth")
    }

    return (
        <div className="navbar">
            <MyButton onClick={logout}>
                Log Out
            </MyButton>
            <div className="navbar__links">
                <Link to="/">Home</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
}

export default NavBar;