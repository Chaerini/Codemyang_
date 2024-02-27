import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import videosample from '../video/sample.mp4'
import play from '../img/재생.png'
import instructor1 from '../img/강의자.png'
import { AuthContext } from '../context/authContext';

const Lectureinfo = () => {

    // 유저 아이디 가져오기 위한 선언
    const { currentUser } = useContext(AuthContext);
    //console.log("currentUser : " + currentUser?.ImageURL);
    //console.log(currentUser);

    // LectureID
    const params = useParams();

    // 커리큘럼
    const [parentid, setParentid] = useState(); // 부모 아이디 찾기 위해 저장 공간 선언

    const onCurriculumClick = (isindex) => {
        // console.log(isindex);
        // console.log(curriculum[isindex].TOCID);
        // console.log(curriculum);
        // console.log(parentid);
        parentid?.map(((_, index) => {
            if (curriculum[isindex].TOCID === parentid[index]) {
                console.log(index);
            }
        }))
    }
      

    // 미리보기, 카테고리, 제목, 가격, 강의소개, 커리큘럼, 강의자소개, 수강평
    const [preview, setPreview] = useState();
    const [category, setCategory] = useState([]);
    const [title, setTitle] = useState();
    const [price, setPrice] = useState();
    const [description, setDescription] = useState();
    const [curriculum, setCurriculum] = useState();
    const [instructor, setInstructor] = useState({});
    const [ischeck, setIscheck] = useState();

    // 결제 여부
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
                    setDescription(res.data.lectureintroduction[0].Description);
                    setCurriculum(res.data.curriculum);
                    setInstructor(res.data.instructor);
                    //console.log(res.data.curriculum);

                    const parentData = res.data.curriculum.map((_, index) => {
                        return curriculum[index]?.ParentTOCID;
                        //console.log(curriculum[index]?.ParentTOCID);
                    });
                    setParentid(parentData);
                    //console.log(parentid);

                    // 모든 커리큘럼을 출력하기 위한 함수
                    //const curriculumData = res.data.curriculum.map(lecture => lecture.curriculum);
                    //setCurriculum(curriculumData);  
                    //console.log(res.data.curriculum[5].ParentTOCID);
                

                    // 모든 카테고리를 출력하기 위한 함수
                    const categoryData = res.data.lectureintroduction.map(lecture => lecture.CategoryName);
                    setCategory(categoryData);                    
                    
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
        ErollmentCheck();
    }, []);



    return (
        <div className='lectureinfo'>
            
            <div className='lectureinfo-header'>
                <embed className='header-left' src={ videosample } alt={ preview }></embed>
                <div className='header-right'>
                    
                    <div className='header-category'>
                    {category.map((_, index) => (
                        <div className='category' key= { category[index] }><span> &nbsp; # { category[index] }</span></div>
                    ))}
                    </div>
                    
                    {/** 
                    {category.length === 1 ? ( // 카테고리 개수에 따라 출력을 다르게 하기 위한 조건부 렌더링
                        <div className='category' key= { category.LectureID }><span># { category[0] }</span></div>
                    ) : category.length === 2 ? (
                        <div className='category' key= { category.LectureID }><span># { category[0] } &nbsp; # { category[1] }</span></div>
                    ) : (
                        <div className='category' key= { category.LectureID }><span># { category[0] } &nbsp; # { category[1] } &nbsp; # { category[2] }</span></div>
                    )}
                    */}

                    <div className='title'><span>{ title }</span></div>
                    <div className='price'><span>{ price } ￦</span></div>
                    {ischeck === false ? (
                        <div className='pay'><a href={`/payment/${params?.LectureID}`}><button>결제</button></a></div>
                    ) : (
                        <div className='payfalse'><a href={`/erollments/play/${params?.LectureID}/${params?.LectureID}001`}><button>수강 중인 강의입니다.</button></a></div>
                    )}
                </div>
            </div>

            <div className='lectureinfo-body'>
                <div className='lectureinfo-menu'>
                    <span><a href='#lectureinfo'>강의 소개</a></span>
                    <span><a href='#curriculum'>커리큘럼</a></span>
                    <span><a href='#instructor'>강의자 소개</a></span>
                    <span><a href= {`/lectureinfo/review/${params.LectureID}`}>수강평</a></span>
                </div>

                <div className='lectureinfo-contents'>
                    <div className='lectureinfo-info'>
                    <h3><a id='lectureinfo'>강의 소개</a></h3>
                        <p className='lecture-description'>{ description }</p>
                    </div>

                    <div className='lectureinfo-toc'>
                        <h3><a id='curriculum'>커리큘럼</a></h3>

                        
                        {curriculum?.map((_, index) => (
                            <div key={ index }>
                            {curriculum[index]?.ParentTOCID? ( // 상위 목차가 있는 경우
                                <div className='toc-hidden'><a>{ curriculum[index]?.Title }</a><a>{ curriculum[index]?.Videotime }</a></div>
                                ) : (
                                    // 상위 목차가 없는 경우
                                    <div className='toc-open' key={ index } onClick={ () => onCurriculumClick(index) }>{ curriculum[index]?.Title } </div>
                                )}
                            </div>
                        ))}



                    </div>

                  

                    <div className='instructor'>
                        <h3><a id='instructor'>강의자 소개</a></h3>
                        <div className='instructor-body'>
                            <div className='instructor-left'>
                                <img src={ instructor[0]?.ProfileURL }></img>
                            </div>
                            <div className='instructor-right'>
                                <span>
                                    <b>{ instructor[0]?.InstructorName }</b> &#40; { instructor[0]?.InstructorEmail } &#41;
                                <br />                           
                                <h4>경력사항</h4>
                                <p className='qualification'>{ instructor[0]?.Qualifications }</p>
                                </span>
                            </div>
                        </div>
                        <div className='instructor-body-bottom'>
                            <h4>강사's Comment</h4>
                            <span>{ instructor[0]?.Description }</span>
                        </div>
                    </div>
                </div>  
            </div>
        </div>
    )
}

export default Lectureinfo
