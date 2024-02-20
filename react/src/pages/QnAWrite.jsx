import React from 'react'

const Write = () => {
    return (
        <div className="write">
            <h1>Q&A 작성</h1>
            <h2>제목</h2>
            <input className="title" required type="text" placeholder='제목을 입력해주세요.'/>
            <h2>내용</h2>
            <input className="content" required type="text" placeholder='내용을 입력해주세요.'/>
            <button>등록</button>
        </div>
    )
}

export default Write