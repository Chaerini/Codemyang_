import React from 'react'
import {  } from 'react-router-dom'
import videosample from '../video/sample.mp4'
import play from '../img/재생.png'

const OnlineStudy = () => {
    return (
        <div className='play'>
            <div className='play-body'>
                <div className='play-body-left'>
                    <h1>한 입 크기로 잘라먹는 리액트 : 기초부터 실전까지</h1>
                    <embed src={ videosample } alt='강의미리보기'></embed>
                </div>
                <div className='play-body-right'>
                    <h3>커리큘럼</h3>
                    <details open>
                        <summary>챕터1. 안녕! 리액트</summary>
                            <ul>
                                <li><div className='toc-left'><img src={ play }></img><a>리액트란</a></div><a>11:30</a></li>
                                <li><div className='toc-left'><img src={ play }></img><a>리액트의 탄생</a></div><a>5:30</a></li>
                            </ul>
                    </details>
                    <details open>
                        <summary>챕터2. 리액트의 기초를 배워보자</summary>
                            <ul>
                                <li><div className='toc-left'><img src={ play }></img><a>입출력</a></div><a>8:25</a></li>
                                <li><div className='toc-left'><img src={ play }></img><a>변수</a></div><a>3:20</a></li>
                            </ul>
                    </details>

                </div>
            </div>
        </div>
    )
}

export default OnlineStudy
