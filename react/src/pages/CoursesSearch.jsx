import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';

const Courses = () => {
    const params = useParams(); // 메인에서 넘어 온 검색어를 위한 선언
    const movePage = useNavigate(); // 페이지 이동을 위한 선언
    const [ lectureslist, setLecturelist ] = useState([]); // 전체 강의 목록
    const [ search, setSearch ] = useState([]); // 전체 강의 목록

    console.log(params);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/lectures/');
                if (res.data.code === 200) {
                    setLecturelist(res.data.lectureslist);
                    console.log(lectureslist);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/search', { params: { Searchword : params.Searchword}});
                if (res.data.code === 200) {
                    setSearch(res.data.searchresults);
                    console.log("results: ", res.data);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='courses'>

            <div className="courses-left-side">
                <ul>
                    <li><a href="/courses/java">프론트엔드</a></li>
                    <li><a href="/courses/javascript">백엔드</a></li>
                    <li><a href="/courses/python">Python</a></li>
                    <li><a href="/courses/c">C, C++</a></li>
                    <li><a href="/courses/mobile">모바일</a></li>
                    <li><a href="/courses/secure">보안</a></li>
                </ul>
            </div>

            <div className='courses-body'>
                <div className='courses-header'>
                    <div className='courses-categoryname'>
                    <li><a>전체 강의</a></li>
                    <li><a>/</a></li>
                    <li><a>"{ params.Searchword }"에 대한 결과</a></li>
                    </div>


                    {/*
                    <div className='search'>
                        <input type="text" placeholder='전체 강의 검색' onChange={ handleChange }></input>
                        <button className="search-button">검색</button>
                    </div>
                    */}


                </div>

            
            
                <div className='home-courses'>
                    {Array.from({ length: 4 }).map((_, index) => ( // 4번 반복
                        <div className='recent' key={index}>
                            {search && search.slice(index * 4, (index + 1) * 4).map((slist) => (
                                <div className='lectures-list' key={slist.LectureID}>
                                    <a href='/lectureinfo'>
                                        <img src={`${slist.LectureImageURL}`} alt='강의이미지'></img>
                                        <p className='title'>{slist.Title}</p>
                                        <p className='price'>{slist.Price}</p>
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
