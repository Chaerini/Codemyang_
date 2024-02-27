import React, { useEffect, useState, useRef, useContext } from 'react'
import { useParams } from 'react-router-dom'
//import video from '../video/'
//import play from '../img/재생.png'
import axios from 'axios';
import { AuthContext } from '../context/authContext';



const Play = () => {

    // 강의 목차 ID
    const params = useParams();
    //console.log(params);

    // 유저 아이디 가져오기 위한 선언
    const { currentUser } = useContext(AuthContext);
    //console.log("currentUser : " + currentUser?.UserID);

    const [lectureplay, setLectureplay] = useState();

    // 처음 시작될 때 렌더링
    useEffect(() => {        
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/erollments/play', { params: { TOCID: params?.TOCID }})
                if (res.data.code === 200) {
                    setLectureplay(res.data.TOC[0]);
                    //console.log(res.data);
                }
            } catch (err) {
                console.log(err);
            }
        };
        videoProgress();
        fetchData();
        Curriculumlist();
        
    }, []);

    // 커리큘럼 가져오기
    const [curriculum, setCurriculum] = useState();
    const Curriculumlist = async () => {
        try {
            const res = await axios.get('/api/curriculum', {params: { LectureID: params?.LectureID}})
            if (res.data.code === 200) {
                setCurriculum(res.data.curriculum);

                //console.log(res.data.curriculum);
            }
        } catch (err) {
            console.log(err);
        }
    }

    // 비디오 진행률 저장
    const [currentTime, setCurrenttime] = useState(0);
    const videoRef = useRef(null);
    const handleTimeUpdate = async () => {
        try {
            const res = await axios.put('/api/videoprogress/update', { Progress: currentTime, TOCID: params?.TOCID , UserID : currentUser?.UserID })
            if (res.data.code === 200) {
                if (videoRef.current) {
                    if (currentTime < videoRef.current.currentTime) { // 최대 진행률으로 변경을 저장하기 위해
                        setCurrenttime(videoRef.current.currentTime);
                        }
                    }
            } 
        } catch (err) {
            console.log(err)
        }
    }

    // 비디오 진행률 초기값 가져오기
    const videoProgress = async () => {
        try {
            const res = await axios.post('/api/videoprogress', { UserID : currentUser?.UserID, TOCID: params?.TOCID})
            if (res.data.code === 200) {
                setCurrenttime(res.data.progress[0].Progress);
                //console.log(res.data.progress[0].Progress);
            }
        } catch(err) {
            console.log(err)
        }
    }

    // 비디오 전체 길이
    const [videoDuration, setVideoDuration] = useState(null);
    const handleLoadedMetadata = () => {
        if (videoRef.current) {
          setVideoDuration(videoRef.current.duration);
        }
    }

    return (
        <div className='play'>
            <div className='play-body'>
                <div className='play-body-left'>
                    <h1>{ lectureplay?.Title }</h1>
                    <video controls ref={ videoRef } src={ `/video/${lectureplay?.MaterialURL}` } alt={ lectureplay?.LectureImageURL } onTimeUpdate={ handleTimeUpdate } onLoadedMetadata={handleLoadedMetadata}></video> {/** src={ lectureplay?.MaterialURL } */}
                    <p>{currentTime}</p>
                    <p>{videoDuration}</p>
                </div>
                <div className='play-body-right'>
                    <h3>커리큘럼</h3>

                    {curriculum?.map((_, index) => (
                            <div key={ index }>
                            {curriculum[index]?.ParentTOCID? ( // 상위 목차가 있는 경우
                                <div className='toc-hidden'><a href={`/erollments/play/${curriculum[index]?.LectureID}/${curriculum[index]?.TOCID}`}>{ curriculum[index]?.Title }</a><a>{ curriculum[index]?.Videotime }</a></div>
                                ) : ( // 상위 목차가 없는 경우
                                    <div> 
                                    {curriculum[index]?.MaterialURL ? (
                                        // 영상이 있는 경우
                                        <a href={`/erollments/play/${curriculum[index]?.LectureID}/${curriculum[index]?.TOCID}`}><div className='toc-open' key={ index }>{ curriculum[index]?.Title } </div></a>
                                    ) : (
                                        // 영상이 없는경우
                                        <div className='toc-open' key={ index }>{ curriculum[index]?.Title } </div>
                                    )}
                                    </div>
                                )}
                            </div>
                        ))}
                    
                    {/**
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
                     */}
                </div>
            </div>
        </div>
    )
}

export default Play
