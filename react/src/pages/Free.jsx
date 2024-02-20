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
                    <p>자유게시판</p>
                    <h1>(제목)자유게시판입니다.</h1>
                    <span>작성자: 닉네임</span><span>&nbsp;&nbsp;2024-01-25</span>
                </div>
                <div className='body-contents'>
                    <p>팀플 같이 할 분 있으실까요?</p>
                    <p>장소는 충남 천안역 앞입니다.</p>
                    <p>같이 하실 분은 010-1111-2222로 연락 주세요.</p>
                    <p>댓글 남겨주셔도 괜찮습니다.</p>
                </div>
                <div className='body-comments'>
                    <h3>댓글</h3>
                    <div className='comment-write'>
                        <input required type="text" placeholder='댓글을 적어주세요!'/>
                        <button>등록</button>
                    </div>
                    <div className='comments'>
                        <div className='comments-left'>
                            <img src= { Profile }></img>
                        </div>
                        <div className='comments-right'>
                            <span className='name'>작성자</span><span className='date'>&nbsp;&nbsp;2024-01-25</span>
                            <p>댓글 내용</p>
                        </div>
                    </div>
                </div>
                <div className='body-comments'> 
                    <div className='comments'>
                        <div className='comments-left'>
                            <img src= { Profile }></img>
                        </div>
                        <div className='comments-right'>
                            <span className='name'>작성자</span><span className='date'>&nbsp;&nbsp;2024-01-25</span>
                            <p>댓글 내용</p>
                        </div>
                    </div>
                </div>
                <div className='body-comments'>
                    <div className='comments'>
                        <div className='comments-left'>
                            <img src= { Profile }></img>
                        </div>
                        <div className='comments-right'>
                            <span className='name'>작성자</span><span className='date'>&nbsp;&nbsp;2024-01-25</span>
                            <p>댓글 내용</p>
                        </div>
                    </div>
                </div>
            </div>
                
        </div>
    )
}

export default Free
