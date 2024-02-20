import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const Courses = () => {
    const movePage = useNavigate(); // 페이지 이동을 위한 선언

    // 전체 강의 목록, 검색 선언
    const [ lectureslist, setLecturelist ] = useState([]);
    const [ search, setSearch ] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/lectures/');
                if (res.data.code === 200) {
                    setLecturelist(res.data.lectureslist);
                    console.log(res.data.lectureslist);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    // 검색 창에 입력될 때마다 이벤트 발생
    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    // 검색 기능
    const handleSearch = async () => {
        try {
            console.log(search);
            const res = await axios.get('/api/search', { params: { Searchword : search}})
            if (res.data.code === 200) {
                //setSearch(res.data.search);
                console.log(res.data.searchresults);
                movePage(`/courses/search/${ search }`); // 강의 목록 페이지로 이동
            }
        } catch (err) {
            console.log(err);
        }
    }

    // 엔터 쳤을 때도 검색 가능
    const handleKeypress = (e) => {
        if (e.key === 'Enter') {
            // 엔터 쳤을 때 검색 기능 수행
            handleSearch();
        }
    }

    return (
        <div className='courses'>

            <div className="courses-left-side">
                <ul>
                    <li><a href="/courses/101">프론트엔드</a></li>
                    <li><a href="/courses/102">백엔드</a></li>
                    <li><a href="/courses/103">Python</a></li>
                    <li><a href="/courses/104">C, C++</a></li>
                    <li><a href="/courses/105">모바일</a></li>
                    <li><a href="/courses/106">보안</a></li>
                </ul>
            </div>

            <div className='courses-body'>
                <div className='courses-header'>
                    <div className='courses-categoryname'>
                    <li><a>전체 강의</a></li>
                    </div>

                    <div className='search'>
                        <input type="text" placeholder='전체 강의 검색' value={ search } onChange={ handleChange } onKeyDown={ handleKeypress }></input>
                        <button className="search-button" onClick={ handleSearch }>검색</button>
                    </div>
                </div>

            
            
                <div className='home-courses'>
                    {Array.from({ length: 4 }).map((_, index) => ( // 4번 반복
                        <div className='recent' key={index}>
                            {lectureslist.slice(index * 4, (index + 1) * 4).map((leclist) => (
                                <div className='lectures-list' key={leclist.LectureID}>
                                    <a href={`/lectureinfo/${leclist.LectureID}`}>
                                        <img src={`${leclist.LectureimageURL}`} alt='강의이미지'></img>
                                        <p className='title'>{leclist.Title}</p>
                                        <p className='price'>{leclist.Price}</p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Courses
