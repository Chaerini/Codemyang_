import React from 'react'

const Write = () => {
    return (
        <div class="write">
            <h1>문의사항 작성</h1>
            <h2>제목</h2>
            <input class="title" required type="text" placeholder='제목을 입력해주세요.'/>
            <h2>내용</h2>
            <input class="content" required type="text" placeholder='내용을 입력해주세요.'/>
            <button>등록</button>
        </div>
    )
}

export default Write