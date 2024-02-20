import React from 'react'
import logo from "../img/로고7.png"

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt="" />
            <div className="foot">
            <div>고객센터: 충남 천안시 58-10</div>
            <div>전화번호: 010-1111-2222</div>
            <div>이메일: dlcofls21@naver.com</div>
            </div>
            
        </footer>
    )
}

export default Footer
