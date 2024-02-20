import React, { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from '../context/authContext';

const Write = () => {

    const navigate = useNavigate();

    // 유저 아이디 가져오기 위한 선언
    const { currentUser } = useContext(AuthContext);
    console.log("currentUser : " + currentUser?.UserID);

    // CommunityID
    const params = useParams();
    console.log('ID', params?.communityid);

    const [ communityinfo, setCommunityinfo ] = useState({
        userid : currentUser?.UserID,
        title : "",
        content : "",
    });

    // 처음 커뮤니티 상세 내용 불러오기
    useEffect(() => {        
      const fetchData = async () => {
          try {
              const res = await axios.get('/api/communityinfo', { params: { CommunityID: params?.communityid }})
              if (res.data.code === 200) {
                setCommunityinfo({title : res.data.communitycontents[0].Title, content : res.data.communitycontents[0].Contents});

                console.log("list: ", communityinfo);
              }
          } catch (err) {
              console.log(err);
          }
      };
      fetchData();
  }, []);
    
  
    const onUpdate = async () => {
        try {
            const res = await axios.put('/api/community/update', { Title : communityinfo?.title, Contents : communityinfo?.content, CommunityID : params?.communityid })
            
            console.log(res.data);
            alert("수정되었습니다.");
            
        } catch (error) {
            console.log(error);
        }
        navigate(`/communityinfo/${params?.communityid}`);
        
    }

    // 제목 입력 이벤트
    const handleTitleChange = (e) => {
        setCommunityinfo((prevInfo) => ({
          ...prevInfo,
          title: e.target.value,
        }));
      };

      // 내용 입력 이벤트
      const handleContentsChange = (e) => {
        setCommunityinfo((prevInfo) => ({
          ...prevInfo,
          content: e.target.value,
        }));
      };  

    return (
        <div className="write">
            <h1>공지사항 수정</h1>
            <h2>제목</h2>
            <input className="title" required type="text" placeholder='제목을 입력해주세요.' value={ communityinfo?.title } onChange={ handleTitleChange } />
            <h2>내용</h2>
            <input className="content" required type="text" placeholder='내용을 입력해주세요.' value={ communityinfo?.content } onChange={ handleContentsChange } />
            <button onClick={ onUpdate }>수정</button>
        </div>
    )
}

export default Write
