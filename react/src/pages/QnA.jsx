import React from 'react'
import {  } from 'react-router-dom'
import Profile from '../img/프로필.jpg'

const QnA = () => {
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
                    <p>Q&A</p>
                    <h1>(제목)질문 있습니다!</h1>
                    <span>작성자: 닉네임</span><span>&nbsp;&nbsp;2024-01-25</span>
                </div>
                <div className='body-contents'>
                    <p>비동기 프로그래밍이란 무엇인가요?</p>
                    <p>JavaScript에서 비동기적인 작업을 다루기 위해 어떤 메커니즘을 사용할 수 있나요?</p>
                    <p>콜백 함수는 무엇이며, 비동기 코드에서 어떻게 사용되나요?</p>
                    <p>콜백 지옥(Callback Hell)은 무엇이며, 이를 해결하기 위해 어떤 기술이나 패턴을 사용할 수 있나요?</p>
                    <p>Promise와 Callback 함수의 차이는 무엇이며, Promise를 사용하는 이점은 무엇인가요?</p>
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

export default QnA
