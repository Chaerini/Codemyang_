import React, { useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from '../context/authContext';

const Write = () => {

    const navigate = useNavigate();

    // 유저 아이디 가져오기 위한 선언
    const { currentUser } = useContext(AuthContext);
    console.log("currentUser : " + currentUser?.UserID);

    // type
    const params = useParams();
    console.log(params?.type);

    const [ communityinfo, setCommunityinfo ] = useState({
        userid : currentUser?.UserID,
        title : "",
        content : "",
    });

    const onWrite = async () => {
        try {
            const res = await axios.post('/api/community/add', { UserID : currentUser?.UserID, Title : communityinfo.title, Contents : communityinfo.contents, Type : params?.type})
            //console.log(res.data);
            //console.log(communityinfo);
            alert("등록되었습니다.");
            
        } catch (error) {
            console.log(error);
        }
        navigate(`/communitylist/${params?.type}`);
        
    }

    // 커뮤니티 타입에 따른 제목 수정
    const getTypename = (type) => {
      console.log("type: ", type);
      if (type === '1') return '공지사항';
      if (type === '2') return '자유게시판';
      if (type === '3') return 'Q&A';
      if (type === '4') return '문의사항';
  }

    const handleTitleChange = (e) => {
        setCommunityinfo((prevInfo) => ({
          ...prevInfo,
          title: e.target.value,
        }));
      };

      const handleContentsChange = (e) => {
        setCommunityinfo((prevInfo) => ({
          ...prevInfo,
          contents: e.target.value,
        }));
      };  

    return (
        <div className="write">
            <h1>{ getTypename(params?.type) } 작성</h1>
            <h2>제목</h2>
            <input className="title" required type="text" placeholder='제목을 입력해주세요.' onChange={ handleTitleChange } />
            <h2>내용</h2>
            <input className="content" required type="text" placeholder='내용을 입력해주세요.' onChange={ handleContentsChange } />
            <button onClick={ onWrite }>등록</button>
        </div>
    )
}

export default Write
