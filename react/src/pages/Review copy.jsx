import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import videosample from '../video/sample.mp4'
import Profile from '../img/프로필.jpg'
import axios from 'axios';
import { AuthContext } from '../context/authContext';

const Review = () => {

    // 유저 아이디 가져오기 위한 선언
    const { currentUser } = useContext(AuthContext);
    console.log("currentUser : " + currentUser?.ImageURL);

    // LectureID
    const params = useParams();
    console.log(params?.LectureID);

    // 수강평 리스트, 수강평 내용, 리뷰 수정 상태
    const [reviewlist, setReviewlist] = useState();
    const [review, setReview] = useState();
    const [isreview, setIsreview] = useState(false);

    // 렌더링을 위해 밖에서 선언
    const fetchData = async () => {
        try {
            // 엔드포인트 요청
            const res = await axios.get('/api/lecturesinfo/reviewlist', { params: { LectureID : params?.LectureID }});
            if (res.data.code === 200) {
                setReviewlist(res.data.review);
                console.log("res", res.data.review);
                
                
            }
        } catch (err) {
            console.log(err);

        }
    };

    // 강의 아이디에 맞는 수강평 리스트 출력
    useEffect(() => {
        fetchData();
    }, []);

    //
    const handleNewChange = (e) => {
        setReview(review);
    }

    // 수강평 작성
    const handleReviewChange = (e) => {
        let copiedItems = [...reviewlist];
        copiedItems[e.target.name].Review = e.target.value;
        setReviewlist(copiedItems);

    }

    // 수강평 작성 등록 버튼 눌렀을 때
    const onWrite = async () => {
        try {
            const res = await axios.post('/api/lecturesinfo/reviewadd', { LectureID: params?.LectureID, UserID :  currentUser?.UserID, Review : review } )
            console.log(res.data);
            alert('수강평이 등록되었습니다.');
            fetchData();
        } catch (err){
            console.log(err)
        }
    }


    // 수강평 수정 //
    // const handleUpdateChange = (e) => {
    //     setIsreview(true);
    //     setReview(e.target.value);
    // }

    // 수강평 수정 완료
     const onUpdate = async (reviewid, index) => {
        // setIsreview(false);
        // console.log(reviewid);
        // console.log(reviewlist);
        console.log(review);
        console.log(reviewlist[index]?.Review);
        // console.log(index);
         try {
             const res = await axios.put('/api/lecturesinfo/reviewupdate', { Review : reviewlist[index]?.Review, ReviewID : reviewid })
             fetchData();
         } catch (err) {
            console.log(err);
         }
     }

    const handleUpdateChange = (index) => {
        // setIsreview(true);
        // console.log(setIsreview);
        let copiedItems = [...reviewlist];
        copiedItems[index].mode = true;
        setReviewlist(copiedItems);
        // reviewlist[index].mode = true;
    }

    // 수강평 삭제
    const onDelete = async (reviewid) => {
        try {
            const res = await axios.delete('/api/lecturesinfo/reviewdelete',{ data : { ReviewID : reviewid } } )
            alert('수강평이 삭제되었습니다.');
            fetchData();
        } catch (err){
            console.log(err)
        }
    }

    return (
        <div className='review'>

            <div className='lectureinfo-header'>
                <embed className='header-left' src={ videosample } alt='강의미리보기'></embed>
                <div className='header-right'>
                    <div className='category'><span># JAVASCRIPT</span></div>
                    <div className='title'><span>한 입 크기로 잘라먹는 리액트 : 기초부터 실전까지</span></div>
                    <div className='price'><span>10000￦</span></div>
                    <div className='pay'><a href='/payment'><button>결제</button></a></div>
                </div>
            </div>

            <div className='lectureinfo-body'>
                <div className='lectureinfo-menu'>
                    <span><a href='/lectureinfo'>강의 소개</a></span>
                    <span><a href='/lectureinfo'>커리큘럼</a></span>
                    <span><a href='/lectureinfo'>강의자 소개</a></span>
                    <span><a href='/lectureinfo/review'>수강평</a></span>
                </div>

            <div className='lectureinfo-contents'>
                
            <div className='review-write'>
                <input required type="text" placeholder='수강 후기를 알려주세요!' onChange={ handleNewChange }/>
                <button onClick={ onWrite }>등록</button>
            </div>
            
            { reviewlist?.map((_, index) => (
                <div className='user-review' key={ reviewlist?.ReviewID }>
                    <div className='user-review-left'>
                        <img src= { reviewlist[index]?.ImageURL }></img>
                    </div>
                    <div className='user-review-right'>
                        <div className='user-review-right-up'>
                            <h4>{ reviewlist[index]?.Nickname }</h4>
                            { reviewlist[index]?.UserID === currentUser?.UserID ? (
                                <div className='btn'>
                                { reviewlist[index]?.mode === true ? (
                                    <button onClick={() => onUpdate(reviewlist[index]?.ReviewID, index)}>등록</button>
                                ) : (
                                    <button onClick={() => handleUpdateChange(index)} >수정</button>
                                )}
                                <button onClick={() => onDelete(reviewlist[index]?.ReviewID)} >삭제</button>
                                </div>
                            ) : (null)}
                            
                        </div>
                        <div className='user-review-right-up'>
                            { reviewlist[index]?.mode === true ? (
                                <div>
                                <input type='text' placeholder='수강 후기를 알려주세요!' name={index} value={ reviewlist[index]?.Review } onChange={(e) => handleReviewChange(e) }></input>
                                </div>
                            ) : (
                                <span> { reviewlist[index]?.Review } </span>
                            )}
                            
                            
                        </div>
                    </div>
                </div>
            ))}
            

        </div>
        </div>
    </div>
    )
}

export default Review
