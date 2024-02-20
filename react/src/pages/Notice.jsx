import React from 'react'
import {  } from 'react-router-dom'
import Profile from '../img/프로필.jpg'

const Free = () => {
    return (
        <div className='community'>
            <div className="community-left-side">
                <ul>
                    <li><a href="/noticelist">공지사항</a></li>
                    <li><a href="/freelist">자유게시판</a></li>
                    <li><a href="/qnalist">Q&A</a></li>
                    <li><a href="/asklist">문의사항</a></li>
                </ul>
            </div>
            <div className="communityinfo-body">
                <div className='body-title'>
                    <p>공지사항</p>
                    <h1>(제목)공지사항입니다.</h1>
                    <span>작성자: 닉네임</span><span>&nbsp;&nbsp;2024-01-25</span>
                </div>
                <div className='body-contents'>
                    <p>안녕하세요, [회사명] 고객 여러분.</p>
                    <p>이번에 알려드릴 공지사항이 있습니다.</p>
                    <p>[서비스명] 서비스가 업그레이드되었습니다.</p>
                    <p>감사합니다.</p>
                </div>
                
            </div>
                
        </div>
    )
}

export default Free
