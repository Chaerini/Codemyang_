import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import image from "../img/강의이미지1.jpg"
import { AuthContext } from '../context/authContext';
import axios from 'axios';

const MyOnline = () => {

    // 유저 아이디 가져오기 위한 선언
    const { currentUser } = useContext(AuthContext);
    console.log("currentUser : " + currentUser?.UserID);

    const [lectureroom, setLectureroom] = useState();

    // 내 강의실 리스트
    useEffect(() => {        
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/erollments', { params: { UserID: currentUser?.UserID }})
                if (res.data.code === 200) {
                    setLectureroom(res.data.mylectures);

                    console.log(res.data.mylectures);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    // 진행률
    const [videoprogress, setVideoprogress] = useState();

    // 진행률 계산하기
    useEffect(() => {        
        const fetchData = async () => {
            try {
                const res = await axios.post('/api/videoprogress/calculate', { params: { UserID: currentUser?.UserID, LectureID: lectureroom }})
                if (res.data.code === 200) {

                    //setLectureroom(res.data.mylectures);
                    console.log(lectureroom);
                    console.log(res.data);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='myonline'>
            <h1>내 강의실</h1>

            
            <div className='mylectures'>

                {lectureroom?.slice(0, 3).map((_, index) => (
                    <div className='mylectures-list' key={index}>
                        <a href={`/erollments/play/${lectureroom[index]?.LectureID}/${lectureroom[index]?.LectureID}001`}>
                        <img src={ lectureroom[index]?.LectureImageURL } alt='강의이미지'></img>
                        <progress value={ lectureroom[index]?.AttendanceRate } max={100}></progress>
                        <p>{ lectureroom[index]?.Title }</p>
                        </a>
                    </div>
                ))}
                

            </div>

            <div className='mylectures'>
                {lectureroom?.slice(3, 6).map((_, index) => (
                    <div className='mylectures-list' key={index + 2}>
                        <a href={`/erollments/play/${lectureroom[index]?.LectureID}/${lectureroom[index]?.LectureID}001`}>
                        <img src={ lectureroom[index+3]?.LectureImageURL } alt='강의이미지'></img>
                        <progress value={ lectureroom[index+3]?.AttendanceRate } max={100}></progress>
                        <p>{ lectureroom[index+3]?.Title }</p>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyOnline
