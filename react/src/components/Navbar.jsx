import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from "../img/로고6.png"
import { AuthContext } from '../context/authContext';
import Profile from '../img/프로필.jpg'

const Navbar = () => {

    const { currentUser } = useContext(AuthContext);
    console.log("currentUser : " + currentUser?.UserID);

    return (
        <div className="navbar">
            <div className="container">
                <div className="logo">
                    <a href='/'><img className="logo" src={logo} alt=""/></a>
                    <Link className="menu" to="/courses">
                        <h6>강의</h6>
                    </Link>
                    <Link className="menu" to="/communitylist/1">
                        <h6>커뮤니티</h6>
                    </Link>
                </div>
               
                    {currentUser ? ( // 유저정보에 따른 상태 변화
                         <div className="links">
                            <Link className="link" to="/myonline">
                            <h6>내 강의실</h6>
                            </Link>
                            <Link className="link" to="/profile">
                            <img src={ `http://54.180.108.191:3000/${currentUser?.ImageURL}` }></img>
                            </Link>
                            <Link className="link" to="/profile">
                            <h6>{ currentUser.Nickname }</h6>
                            </Link>
                        </div>
                    ) :
                    (
                        <div className="links">
                            <Link className="link" to="/login">
                            <h6>로그인</h6>
                        </Link>
                        <Link className="link" to="/register">
                            <h6>회원가입</h6>
                        </Link>
                        </div>
                    )}
                </div>
            </div>
    )
}

export default Navbar
