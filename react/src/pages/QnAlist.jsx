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
                <h1>Q&A</h1>
                <form className="search">
                    <div className="search-bar">
                        <input type="text" placeholder='궁금한 질문을 검색해보세요!'></input>
                        <button className="search-button">검색</button>
                    </div>
                </form>
                <div className="writebutton">
                <a href='/qnawrite'><button><img src={ write } alt="글쓰기"></img><span>글쓰기</span></button></a>
                </div>
                <div className="question">
                    <ul className="question-list">
                        <li className="question-li">
                            <a href='/qna'>
                            <h3>Q&A 제목</h3>
                            <p>Q&A 내용</p>
                            <span className="community-username">김철수</span><span>·</span><span>날짜</span>
                            </a>
                        </li>
                        <li className="question-li">
                            <h3>Q&A 제목</h3>
                            <p>Q&A 내용</p>
                            <span className="community-username">김철수</span><span>·</span><span>날짜</span>
                        </li>
                        <li className="question-li">
                            <h3>Q&A 제목</h3>
                            <p>Q&A 내용</p>
                            <span className="community-username">김철수</span><span>·</span><span>날짜</span>
                        </li>
                        <li className="question-li">
                            <h3>Q&A 제목</h3>
                            <p>Q&A 내용</p>
                            <span className="community-username">김철수</span><span>·</span><span>날짜</span>
                        </li>
                        <li className="question-li">
                            <h3>Q&A 제목</h3>
                            <p>Q&A 내용</p>
                            <span className="community-username">김철수</span><span>·</span><span>날짜</span>
                        </li>
                        <li className="question-li">
                            <h3>Q&A 제목</h3>
                            <p>Q&A 내용</p>
                            <span className="community-username">김철수</span><span>·</span><span>날짜</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Write