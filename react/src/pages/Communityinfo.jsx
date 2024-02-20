import React, { useEffect, useState, useContext } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import Profile from '../img/프로필.jpg'
import axios from 'axios';
import { AuthContext } from '../context/authContext';

const Ask = () => {

    const navigate = useNavigate();

    // 유저 아이디 가져오기 위한 선언
    const { currentUser } = useContext(AuthContext);
    //console.log("currentUser : " + currentUser?.UserID);

    // 커뮤니티 아이디
    const params = useParams();
    //console.log(params?.communityid);

    // 커뮤니티 내용
    const [communitycontent, setCommunitycontent] = useState();

    // 커뮤니티 상세 불러오기
    useEffect(() => {        
        const fetchData = async () => {
            try {
                const res = await axios.get('/api/communityinfo', { params: { CommunityID: params?.communityid }})
                if (res.data.code === 200) {
                    setCommunitycontent(res.data.communitycontents[0]);

                    //console.log("list: ", communitycontent);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    // 커뮤니티 타입에 따른 제목 수정
    const getTypename = (type) => {
        //console.log("type: ", type);
        if (type === 1) return '공지사항';
        if (type === 2) return '자유게시판';
        if (type === 3) return 'Q&A';
        if (type === 4) return '문의사항';
    }

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

    // 커뮤니티 글 삭제
    const onDelete = async () => {
        try { // delete api는 data로 전달해야함.
            const res = await axios.delete('/api/community/delete', { data : { CommunityID : params?.communityid } })
            //console.log(communitycontent);
            alert("삭제되었습니다.");
            
        } catch (error) {
            console.log(error);
        }
        navigate(`/communitylist/${communitycontent?.Type}`);
        
    }

    /// 댓글 ///
    const [commentlist, setCommentlist] = useState([]);
    const [comment, setComment] = useState();

    // 댓글 렌더링
    const fetchData = async () => {
        try {
            const res = await axios.get('/api/community/commentlist', { params: { CommunityID: params?.communityid }})
            if (res.data.code === 200) {
                setCommentlist(res.data.commentlist);

                //console.log("commentlist: ", commentlist);
            }
        } catch (err) {
            console.log(err);
        }
    };

    // 댓글 리스트
    useEffect(() => {        
        fetchData();
    }, []);

    // 새로운 댓글 작성
    const handleNewChange = (e) => {
        setComment(e.target.value);
        //console.log(comment);
    }

    // 댓글 작성 등록 버튼 눌렀을 때
    const onWrite = async () => {
        try {
            const res = await axios.post('/api/community/commentadd', { CommunityID: params?.communityid, UserID : currentUser?.UserID, Comment : comment } )
            alert('댓글이 등록되었습니다.');
            fetchData();
        } catch (err){
            console.log(err)
        }
    }

    // 댓글 수정
    const handleCommentChange = (e) => {
        const CommentItems = [...commentlist];
        CommentItems[e.target.name].Comment = e.target.value;
        setCommentlist(CommentItems);

    }

    // 댓글 수정 완료 버튼 눌렀을 때
    const onUpdate = async (commentid, index) => {
        //console.log(comment);
        //console.log(commentlist[index]);
         try {
            const res = await axios.put('/api/community/commentupdate', { Comment : commentlist[index]?.Comment, CommentID : commentid })
            fetchData();
        } catch (err) {
            console.log(err);
        }
    }

    // 수정버튼 눌렀을 때 mode를 true 변환해서 입력모드로 변경
    const handleUpdateChange = (index) => {
        const CommentItems = [...commentlist];
        CommentItems[index].mode = true;
        setCommentlist(CommentItems);
    }

    // 댓글 삭제
    const onCommentDelete = async (commentid) => {
        try {
            const res = await axios.delete('/api/community/commentdelete',{ data : { CommentID : commentid } } )
            alert('수강평이 삭제되었습니다.');
            fetchData();
        } catch (err){
            console.log(err)
        }
    }

    return (
        <div className='community'>
            <div className="community-left-side">
                <ul>
                    <li><a href="/communitylist/1">공지사항</a></li>
                    <li><a href="/communitylist/2">자유게시판</a></li>
                    <li><a href="/communitylist/3">Q&A</a></li>
                    <li><a href="/communitylist/4">문의사항</a></li>
                </ul>
            </div>
            <div className="communityinfo-body">
                <div className='body-title'>
                    <p>{ getTypename(communitycontent?.Type) }</p>
                    <h1>{ communitycontent?.Title }</h1>
                    <span>작성자: { communitycontent?.Nickname }</span><span>&nbsp;&nbsp;{ koreaDate(communitycontent?.CommunityDate) }</span>
                </div>
                <div className='body-contents'>
                    <p>{ communitycontent?.Contents }</p>
                </div>
                <div className='btn-contents'>
                    <Link to={`/communityupdate/${params?.communityid}`}><button>수정</button></Link>
                    
                    <button onClick={ onDelete }>삭제</button>
                </div>

                <div className='body-comments'>
                    <h3>댓글</h3>
                    <div className='comment-write'>
                        <input required type="text" placeholder='댓글을 적어주세요!' onChange={ handleNewChange }/>
                        <button onClick={ onWrite }>등록</button>
                    </div>

                    {commentlist?.map((_, index) => (
                        <div className='comments' key={index}>
                        <div className='comments-left'>
                            <img src= { `http://localhost:3000/${commentlist[index].ImageURL}` }></img>
                        </div>
                        <div className='comments-right'>
                            <div className='comments-right-up'>
                                <div>
                                <span className='name'>{commentlist[index].Nickname}</span><span className='date'>&nbsp;&nbsp;{koreaDate(commentlist[index].CommentDate)}</span>
                                </div>
                                {commentlist[index]?.UserID === currentUser?.UserID ? ( 
                                    <div className='btn'>
                                        {commentlist[index]?.mode === true ? (
                                            <button onClick={() => onUpdate(commentlist[index]?.CommentID, index) }>완료</button>
                                        ) : (
                                            <button onClick={() => handleUpdateChange(index) }>수정</button>
                                        )}
                                    
                                    <button onClick={() => onCommentDelete(commentlist[index]?.CommentID)}>삭제</button>
                                    </div>
                                ) : (null)}
                            </div>
                            
                            {commentlist[index]?.mode === true ? (
                                <div>
                                <textarea placeholder='수강 후기를 알려주세요!' name={index} value={ commentlist[index]?.Comment } onChange={(e) => handleCommentChange(e) }/>
                                </div>
                            ) : (
                                <p>{commentlist[index].Comment}</p>
                            )}
                            
                        </div>
                    </div>
                    ))}
                    

                </div>
                
            </div>
                
        </div>
    )
}

export default Ask
