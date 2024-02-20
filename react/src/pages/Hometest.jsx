import React,{ useEffect, useState, useContext } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom'
import Banner1 from '../img/홍보배너3.png'
import JAVA_icon from '../img/자바아이콘.png'
import JS_icon from '../img/자바스크립트아이콘.png'
import Python_icon from '../img/파이썬아이콘.png'
import C_icon from '../img/C언어아이콘.png'
import Mobile_icon from '../img/모바일아이콘.png'
import Secure_icon from '../img/보안아이콘.png'
import image from "../img/강의이미지1.jpg"
import search_icon from "../img/검색.png"

const Home = () => {
    const [popularlecture, setPopularlecture] = useState([]);
    const [latestlecture, setLatestlecture] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/');

                

                //if (res.data.code === "200") {
                    setPopularlecture(res.data.popularlecture);
                    setLatestlecture(res.data.latestlecture);

                    console.log(popularlecture);
                    //console.log(res.data);
                //}
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="home">


            <div className="banner-list">
                <div className='banner-in'>
                    <img src={ Banner1 } alt='banner'></img>
                </div>
            </div>

            <div className="search">
                        <input type="text" placeholder='배우고 싶은 지식을 입력해보세요.'></input>
                        <button className="search-button"><img src={ search_icon } alt='검색'></img></button>
                </div>

            <div className='home-category'>
                <div className='home-category-list'>
                    <ul>
                    <a href='/courses/java'><img className='home-category-icon' src={ JAVA_icon } alt=''></img><p>#JAVA</p></a>
                    <a href='/courses/javascript'><img className='home-category-icon' src={ JS_icon } alt=''></img><p>#JAVA</p><p>SCRIPT</p></a>
                    <a href='/courses/python'><img className='home-category-icon' src={ Python_icon } alt=''></img><p>#Python</p></a>
                    <a href='/courses/c'><img className='home-category-icon' src={ C_icon } alt=''></img><p>#C, C++</p></a>
                    <a href='/courses/mobile'><img className='home-category-icon' src={ Mobile_icon } alt=''></img><p>#모바일</p></a>
                    <a href='/courses/secure'><img className='home-category-icon' src={ Secure_icon } alt=''></img><p>#보안</p></a>
                    </ul>
                </div>
            </div>

            <div className='home-courses'>
                <h1>따끈따끈, 신규 강의를 만나보세요!</h1>
                <div className='recent'>
                    { latestlecture.slice(0, 4).map((plist) => (
                        <div className='lectures-list' key={plist.LectureID}>
                            <a href='/lectureinfo'>
                            <img src={ `${plist.LectureimageURL}` } alt='강의이미지'></img>
                            <p>{ plist.Title }</p>
                            </a>
                        </div>
                    ))}
                    
                </div>
            </div>

            <div className='home-courses'>
                <h1>퀄리티 보장! 후회없는 BEST 강의</h1>
                <div className='recent'>
                    { popularlecture.slice(0, 4).map((plist) => (
                        <div className='lectures-list' key={plist.LectureID}>
                            <a href='/lectureinfo'>
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
