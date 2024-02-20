import React, { useEffect, useState, useContext } from 'react'
import { } from 'react-router-dom'
import axios from 'axios';

const Courses = () => {
    const [categorylist, setCategorylist] = useState([]); // 카테고리리스트 가져오기

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/category/'); // api/category/ 뒤에 get으로 데이터를 받아와
                //if (res.data.code === 200) {
                    
                    setCategorylist(res.data.categorylist);
                    console.log(categorylist);
                //}
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
                <li><a href="/courses/java">JAVA</a></li>
                    <li><a href="/courses/javascript">JAVASCRIPT</a></li>
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
                    <li><a>C, C++</a></li>
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
                                <a href='/lectureinfo'>
                                <img src={ `${ clist.LectureimageURL}` } alt='강의이미지'></img>
                                <p className='title'>{clist.Title}</p>
                                <p className='price'>{clist.Title}</p>
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
