import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import write from "../img/글쓰기1.png"
import axios from 'axios';
import { AuthContext } from '../context/authContext';


const Write = () => {

    // 유저 아이디 가져오기 위한 선언
    const { currentUser } = useContext(AuthContext);
    console.log("currentUser : " + currentUser?.UserID);

    // 커뮤니티 타입
    const params = useParams();
    console.log(params?.type);

    // 커뮤니티 타입에 따른 제목 수정
    const getTypename = (type) => {
        console.log("type: ", type);
        if (type === '1') return '공지사항';
        if (type === '2') return '자유게시판';
        if (type === '3') return 'Q&A';
        if (type === '4') return '문의사항';
    }

    // 커뮤니티 리스트
    const [communitylist, setCommunitylist] = useState();

    // 커뮤니티 리스트 불러오기
    useEffect(() => {
        const fetchData = async () => {
            try {
                let res;
                if (params?.type === '4') { // 문의사항 페이지일 경우 자신의 글만 보이도록 하기 위함.
                    console.log("params: ",params?.type);
                    console.log('list1: ', communitylist)
                    res = await axios.get('/api/community/ask', { params: { Type: params?.type, UserID: currentUser?.UserID } });
                } else {
                    console.log("params: ",params?.type);
                    res = await axios.get('/api/community', { params: { Type: params?.type } });
                }
    
                if (res.data.code === 200) { // 나머지 페이지일 경우 모든 글이 보임.
                    setCommunitylist(res.data.communitylist);
                    console.log("리스트: ", res.data.communitylist);
                }
            } catch (err) {
                console.log(err);
            }
        };
    
        fetchData();
    }, []);
    

    // 날짜
    const koreaDate = (utcDate) => {
        const options = {
            timeZone: 'Asia/Seoul',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: false,
        };
    
        return new Date(utcDate).toLocaleString('ko-KR', options);
    }

    return (
        <div className="community">
            <div className="community-left-side">
                <ul>
                    <li><a href="/communitylist/1">공지사항</a></li>
                    <li><a href="/communitylist/2">자유게시판</a></li>
                    <li><a href="/communitylist/3">Q&A</a></li>
                    <li><a href="/communitylist/4">문의사항</a></li>
                </ul>
            </div>
            <div className="community-body">
                <h1>{ getTypename(params?.type) }</h1>
                <div className="writebutton">
                    <a href={`/communitywrite/${ params?.type }`}><button><img src={ write } alt="글쓰기"></img><span>글쓰기</span></button></a>
                </div>
                <div className="question">
                    <ul className="question-list">
                        {communitylist?.map((_, index) => (
                            <li className="question-li" key={ index }>
                            <a href={`/communityinfo/${communitylist[index].CommunityID}`}>
                                <h3>{communitylist[index].Title}</h3>
                                <p>{communitylist[index].Contents}</p>
                                <span className="community-username">{communitylist[index].Nickname}</span>
                                <span>·</span>
                                <span>{koreaDate(communitylist[index].CommunityDate)}</span>
                            </a>
                        </li>
                        ))}
                        

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Write