import React from 'react'
import write from "../img/글쓰기1.png"

const Write = () => {
    return (
        <div className="community">
            <div className="community-left-side">
                <ul>
                    <li><a href="/noticelist">공지사항</a></li>
                    <li><a href="/freelist">자유게시판</a></li>
                    <li><a href="/qnalist">Q&A</a></li>
                    <li><a href="/asklist">문의사항</a></li>
                </ul>
            </div>
            <div className="community-body">
                <h1>공지사항</h1>
                <div className="writebutton">
                    <a href='/noticewrite'><button><img src={ write } alt="글쓰기"></img><span>글쓰기</span></button></a>
                </div>
                <div className="question">
                    <ul className="question-list">
                        <li className="question-li">
                            <a href='/notice'>
                            <h3>공지사항 제목</h3>
                            <p>공지사항 내용</p>
                            <span className="community-username">김철수</span><span>·</span><span>날짜</span>
                            </a>
                        </li>
                        <li className="question-li">
                            <h3>공지사항 제목</h3>
                            <p>공지사항 내용</p>
                            <span className="community-username">김철수</span><span>·</span><span>날짜</span>
                        </li>
                        <li className="question-li">
                            <h3>공지사항 제목</h3>
                            <p>공지사항 내용</p>
                            <span className="community-username">김철수</span><span>·</span><span>날짜</span>
                        </li>
                        <li className="question-li">
                            <h3>공지사항 제목</h3>
                            <p>공지사항 내용</p>
                            <span className="community-username">김철수</span><span>·</span><span>날짜</span>
                        </li>
                        <li className="question-li">
                            <h3>공지사항 제목</h3>
                            <p>공지사항 내용</p>
                            <span className="community-username">김철수</span><span>·</span><span>날짜</span>
                        </li>
                        <li className="question-li">
                            <h3>공지사항 제목</h3>
                            <p>공지사항 내용</p>
                            <span className="community-username">김철수</span><span>·</span><span>날짜</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Write