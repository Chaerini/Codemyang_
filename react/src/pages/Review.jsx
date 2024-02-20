import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import videosample from '../video/sample.mp4'
import axios from 'axios';
import { AuthContext } from '../context/authContext';

const Review = () => {

    // 유저 아이디 가져오기 위한 선언
    const { currentUser } = useContext(AuthContext);
    //console.log("currentUser : " + currentUser?.ImageURL);

    // LectureID
    const params = useParams();
    //console.log(params?.LectureID);
    //console.log(currentUser?.UserID);

    // 수강평 리스트, 수강평 내용, 리뷰 수정 상태
    const [reviewlist, setReviewlist] = useState();
    const [review, setReview] = useState();

    // 렌더링을 위해 밖에서 선언
    const fetchData = async () => {
        try {
            // 엔드포인트 요청
            const res = await axios.get('/api/lecturesinfo/reviewlist', { params: { LectureID : params?.LectureID }});
            if (res.data.code === 200) {
                setReviewlist(res.data.review);
                //console.log("res", res.data.review);    
            }
        } catch (err) {
            console.log(err);
        }
    };

    // 결제 여부
    const [ischeck, setIscheck] = useState();
    
    // 강의 등록했을 경우만 수강평 보이도록
    const ErollmentCheck = async () => {
        try {
            // 엔드포인트 요청
            const res = await axios.post('/api/paycheck', { LectureID : params?.LectureID, UserID : currentUser?.UserID });
            if (res.data.code === 200) {
                setIscheck(res.data.isCheck);
                //console.log("res", res.data.isCheck);
            }
        } catch (err) {
            console.log(err);
        }
    }
    
    // 수강평 작성 여부
    const [isreviewcheck, setIsreviewcheck] = useState();
    
    // 수강평 작성했으면  입력화면 안보이도록
    const ReviewCheck = async () => {
        try {
            // 엔드포인트 요청
            const res = await axios.post('/api/reviewcheck', { LectureID : params?.LectureID, UserID : currentUser?.UserID });
            if (res.data.code === 200) {
                setIsreviewcheck(res.data.isReviewCheck);
                //console.log("res", res.data.isReviewCheck);
            }
        } catch (err) {
            console.log(err);
        }
    }

    // 첫 렌더링
    useEffect(() => {
        fetchData(); // 강의 아이디에 맞는 수강평 리스트 출력
        ErollmentCheck(); // 강의 등록 여부
        ReviewCheck(); // 수강평 작성부 여부
    }, []);

    // 새로운 수강평 작성
    const handleNewChange = (e) => {
        setReview(e.target.value);
        //console.log(review);
    }

    // 수강평 수정
    const handleReviewChange = (e) => {
        let copiedItems = [...reviewlist];
        copiedItems[e.target.name].Review = e.target.value;
        setReviewlist(copiedItems);

    }

    // 수강평 작성 등록 버튼 눌렀을 때
    const onWrite = async () => {
        try {
            const res = await axios.post('/api/lecturesinfo/reviewadd', { LectureID: params?.LectureID, UserID :  currentUser?.UserID, Review : review } )
            alert('수강평이 등록되었습니다.');
            fetchData(); // 강의 아이디에 맞는 수강평 리스트 출력
            ErollmentCheck(); // 강의 등록 여부
            ReviewCheck(); // 수강평 작성부 여부
        } catch (err){
            console.log(err)
        }
    }


    // 수강평 수정 완료 버튼 눌렀을 때
     const onUpdate = async (reviewid, index) => {
        //console.log(review);
        //console.log(reviewlist[index]?.Review);
         try {
             const res = await axios.put('/api/lecturesinfo/reviewupdate', { Review : reviewlist[index]?.Review, ReviewID : reviewid })
             fetchData();
         } catch (err) {
            console.log(err);
         }
     }

    // 수정버튼 눌렀을 때 mode를 true 변환해서 입력모드로 변경
    const handleUpdateChange = (index) => {
        let copiedItems = [...reviewlist];
        copiedItems[index].mode = true;
        setReviewlist(copiedItems);
    }

    // 수강평 삭제
    const onDelete = async (reviewid) => {
        try {
            const res = await axios.delete('/api/lecturesinfo/reviewdelete',{ data : { ReviewID : reviewid } } )
            alert('수강평이 삭제되었습니다.');
            fetchData(); // 강의 아이디에 맞는 수강평 리스트 출력
            ErollmentCheck(); // 강의 등록 여부
            ReviewCheck(); // 수강평 작성부 여부

        } catch (err){
            console.log(err)
        }
    }

    // 미리보기, 카테고리, 제목, 가격
    const [preview, setPreview] = useState();
    const [category, setCategory] = useState([]);
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();

    // 처음 시작될 때만 렌더링
    useEffect(() => {
        const fetchData = async () => {
            try {
                // 엔드포인트 요청
                const res = await axios.get('/api/lecturesinfo', { params: { LectureID : params.LectureID}});
                if (res.data.code === 200) {
                    setPreview(res.data.lectureintroduction.PreviewURL);
                    setTitle(res.data.lectureintroduction[0].Title);
                    setPrice(res.data.lectureintroduction[0].Price);
                

                    // 모든 카테고리를 출력하기 위한 함수
                    const categoryData = res.data.lectureintroduction.map(lecture => lecture.CategoryName);
                    setCategory(categoryData);                    
                    
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    

    

    return (
        <div className='review'>

            <div className='lectureinfo-header'>
                <embed className='header-left' src={ videosample } alt={ preview }></embed> {/** 수정 필요 */}
                <div className='header-right'>

                    <div className='header-category'>
                    {category.map((_, index) => (
                        <div className='category' key= { index }><span> &nbsp; # { category[index] }</span></div>
                    ))}
                    </div>
                    
                    <div className='title'><span>{ title }</span></div>
                    <div className='price'><span>{ price }￦</span></div>
                    {ischeck === false ? (
                        <div className='pay'><a href={`/payment/${params?.LectureID}`}><button>결제</button></a></div>
                    ) : (
                        <div className='payfalse'><button>수강 중인 강의입니다.</button></div>
                    )}
                    

                </div>
            </div>

            <div className='lectureinfo-body'>
                <div className='lectureinfo-menu'>
                    <span><a href={`/lectureinfo/${params.LectureID}`}>강의 소개</a></span>
                    <span><a href={`/lectureinfo/${params.LectureID}`}>커리큘럼</a></span>
                    <span><a href={`/lectureinfo/${params.LectureID}`}>강의자 소개</a></span>
                    <span><a href={`/lectureinfo/review/${params.LectureID}`}>수강평</a></span>
                </div>

            <div className='lectureinfo-contents'>
                
            {ischeck === true && isreviewcheck === false ? ( // 결제 되어있고, 수강평 작성을 하지 않지 않을 때만 입력화면 노출
                <div className='review-write'>
                    <input required type="text" placeholder='수강 후기를 알려주세요!' onChange={ handleNewChange }/>
                    <button onClick={ onWrite }>등록</button>
                </div>
            ) : (<div className='review-write'></div>)}
            
            
            { reviewlist?.map((_, index) => (
                <div className='user-review' key={ reviewlist[index]?.ReviewID }>
                    <div className='user-review-left'>
                        <img src= { `http://localhost:3000/${reviewlist[index]?.ImageURL}` }></img>
                    </div>
                    <div className='user-review-right'>
                        <div className='user-review-right-up'>
                            <h4>{ reviewlist[index]?.Nickname }</h4>
                            { reviewlist[index]?.UserID === currentUser?.UserID ? (
                                <div className='btn'>
                                { reviewlist[index]?.mode === true ? (
                                    <button onClick={() => onUpdate(reviewlist[index]?.ReviewID, index)}>완료</button>
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
                                <textarea placeholder='수강 후기를 알려주세요!' name={index} value={ reviewlist[index]?.Review } onChange={(e) => handleReviewChange(e) }/>
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
