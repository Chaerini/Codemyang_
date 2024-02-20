import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../img/로고6.png"
import Profile from "../img/프로필.jpg"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <a href='/'><img className="logo" src={logo} alt=""/></a>
                    <Link className="menu" to="/courses">
                        <h6>강의</h6>
                    </Link>
                    <Link className="menu" to="/qnalist">
                        <h6>커뮤니티</h6>
                    </Link>
                </div>
                <div className="links">
                    <Link className="link" to="/myonline">
                        <h6>내 강의실</h6>
                    </Link>
                    <Link className="link" to="/profile">
                        <img src={ Profile }></img>
                    </Link>
                    <Link className="link" to="/profile">
                        <h6>이채린</h6>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
