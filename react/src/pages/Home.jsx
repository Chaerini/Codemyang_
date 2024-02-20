import React,{ useEffect, useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import Banner1 from '../img/홍보배너3.png'
import search_icon from "../img/검색.png"

const Home = () => {
    // 인기강의, 최신강의, 카테고리, 검색
    const [popularlecture, setPopularlecture] = useState([]); 
    const [latestlecture, setLatestlecture] = useState([]);
    const [category, setCategory] = useState([]);
    const [search, setSearch] = useState([]); 

    //페이지 이동
    const movePage = useNavigate();

    // 최신, 인기 강의 목록 불러오기
    useEffect(() => {        
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/')
                if (res.data.code === 200) {
                    setPopularlecture(res.data.popularlecture);
                    setLatestlecture(res.data.latestlecture);
                    setCategory(res.data.category);

                    // console.log(category);
                    // console.log(res.data);
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
        <div className="home">


            <div className="banner-list">
                <div className='banner-in'>
                    <img src={ Banner1 } alt='banner'></img>
                </div>
            </div>

            <div className="search">
                        <input type="text" placeholder='배우고 싶은 지식을 입력해보세요.' value={ search } onChange={ handleChange } onKeyDown={ handleKeypress }></input>
                        <button className="search-button" onClick={ handleSearch }><img src={ search_icon } alt='검색'></img></button>
                </div>

            <div className='home-category'>
                <div className='home-category-list' >
                    <ul>
                        {category.slice(0, 9).map((clist) => (
                            <a key={clist.CategoryID} href={`/courses/${clist.CategoryID}`}>
                                <img className='home-category-icon' src={ clist.CategoryURL } alt=''></img>
                                <p># { clist.CategoryName }</p>
                            </a>
                        ))}
                    </ul>
                </div>
            </div>

            <div className='home-courses'>
                <h1>🔥따끈따끈, 신규 강의를 만나보세요!</h1>
                <div className='recent'>
                    { latestlecture.slice(0, 4).map((plist) => (
                        <div className='lectures-list' key={plist.LectureID}>
                            <a href={`/lectureinfo/${plist.LectureID}`}>
                            <img src={ `${plist.LectureimageURL}` } alt='강의이미지'></img>
                            <p>{ plist.Title }</p>
                            </a>
                        </div>
                    ))}
                    
                </div>
            </div>

            <div className='home-courses'>
                <h1>⭐퀄리티 보장! 후회없는 BEST 강의</h1>
                <div className='recent'>
                    { popularlecture.slice(0, 4).map((plist) => (
                        <div className='lectures-list' key={plist.LectureID}>
                            <a href={`/lectureinfo/${plist.LectureID}`}>
                            <img src={ `${plist.LectureimageURL}` } alt='강의이미지'></img>
                            <p>{plist.Title}</p>
                            </a>
                        </div>
                    ))}
                    
                   
                </div>
            </div>
            

        </div>
    )
}

export default Home
