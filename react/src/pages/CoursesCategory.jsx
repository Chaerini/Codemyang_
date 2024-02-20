import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Courses = () => {
    const params = useParams();
    const CategoryID = params.CategoryID;

    const [categorylist, setCategorylist] = useState([]); // 카테고리 리스트 가져오기
    const [categoryname, setCategoryname] = useState([]); // 카테고리 이름 가져오기

    useEffect(() => {
        const fetchData = async () => {
            try {
                //const url = '/api/category?CategoryID=' + CategoryID;
                const res = await axios.get('/api/category', { params: { CategoryID : CategoryID}}); // 엔드포인트에게 get요청

                console.log(res.data);
                if (res.data.code === 200) {
                    setCategorylist(res.data.categorylist);
                    setCategoryname(res.data.categorylist[0].CategoryName);
                    console.log("categorylist2: ", res.data.categorylist[0].CategoryName);
                } else {
                    console.error("Error response: ", res.data);
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
                    <li><a>/</a></li>
                    <li><a>{ categoryname }</a></li>
                    </div>

                    <div className='search'>
                        <input type="text" placeholder='전체 강의 검색'></input>
                        <button className="search-button">검색</button>
                    </div>
                </div>

            

                <div className='home-courses'>
                    { Array.from({ length : 4}).map((_, index) => (
                        <div className='recent' key={ index }>
                            {categorylist.slice(index * 4, (index + 1) * 4).map((clist) => (
                                <div className='lectures-list' key={ clist.LectureID }>
                                <a href={`/lectureinfo/${clist.LectureID}`}>
                                <img src={ `${ clist.LectureimageURL}` } alt='강의이미지'></img>
                                <p className='title'>{clist.Title}</p>
                                <p className='price'>{clist.Price}</p>
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
