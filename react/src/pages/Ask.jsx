import React from 'react'
import {  } from 'react-router-dom'
import Profile from '../img/프로필.jpg'

const Ask = () => {
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
                    <p>문의사항</p>
                    <h1>(제목)환불해주세요.</h1>
                    <span>작성자: 닉네임</span><span>&nbsp;&nbsp;2024-01-25</span>
                </div>
                <div className='body-contents'>
                    <p>안녕하세요, 저는 [고객명]이라고 합니다.</p>
                    <p>[제품/서비스 구매 일자]에 [제품명 또는 서비스명]을 구매하였으나, [구체적인 이유]로 인해 제품에 만족하지 못하였습니다.</p>
                    <p>환불 정책을 확인해보니 [환불 정책에 대한 요약]이라고 되어 있어, 해당 정책에 따라 환불을 신청하고자 합니다.</p>
                    <p>빠른 처리와 상담 부탁드립니다. 감사합니다.</p>
                    <p>좋은 하루 되세요.</p>
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

export default Ask
