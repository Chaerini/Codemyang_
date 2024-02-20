import React, { useEffect, useContext, useState } from 'react'
import { } from 'react-router-dom'
import { AuthContext } from '../context/authContext';
import axios from "axios";

const Profile = () => {

    // 유저 정보 가져오기
    const { currentUser, setCurrentUser } = useContext(AuthContext);
    const [userid] = useState(currentUser?.UserID);
    console.log("currentUser : " + JSON.stringify(currentUser));

    // 이미지
    const [userimage, setUserimage] = useState(currentUser?.ImageURL);
    console.log(currentUser?.ImageURL)

    const onChangeImage = async (e) => {
        const file = e.target.files[0];
        //console.log(file);
        //console.log("1: ", __dirname);
        
        if (file) { // 파일이 들어왔을 때
            const formData = new FormData(); // 새로운 폼데이터 생성
            formData.append('file', file); // 폼데이터는 데이터를 'key' : 'value' 으로 받음
            console.log(file)
            try {
                const res = await axios.post('/api/upload', formData, {
                    headers: {'Content-Type': 'multipart/form-data', charset: 'utf-8'}});
                setUserimage(`api/getImage/${res.data}`);
                //console.log('image: ', res.data);
            } catch (error) {
                console.log(error);
            }   
            
        } else {
            console.log('파일 선택을 선택하지 않았습니다.');
        }
    }

    // 닉네임
    const [usernickname, setUsernickname] = useState(currentUser?.Nickname || ''); // 닉네임
    const [ischecknickname, setIschecknickname] = useState(false); // 닉네임 중복 확인 여부
    const [nicknamebtn, setNicknamebtn] = useState(false); // 닉네임 중복 확인 버튼 활성화

    // 닉네임 중복 확인
    const handleChecknickname = async (e) => {
        e.preventDefault();
    
        // 서버로 닉네임 중복 확인 요청
        try {
            const res = await axios.post('/api/signup/checknickname', { Nickname : usernickname });
            console.log("data: ", res.data);
            console.log("nickname: ", usernickname);
    
          if (res.data.isDuplicate === true) { // 닉네임 중복일 경우
            //console.log("true");
            setIschecknickname(false);
            alert("이미 존재하는 닉네임입니다. 다시 입력해주세요.");

          } else if (res.data.isDuplicate === false) { // 닉네임 중복 아닌 경우
            //console.log("false");
            setIschecknickname(true);
            alert("사용 가능한 닉네임입니다.");

          } else { // 에러
            console.error();
          }

        } catch (error) {
          console.error('오류가 발생했습니다.', error);
        }
    };

    // 닉네임 이벤트
    const onNicknameChange = (e) => {
        setUsernickname(e.target.value);
        setNicknamebtn(true);
    }

    
    // 비밀번호
    const [userpwd, setUserpwd] = useState(currentUser?.Password); // 현재 비밀번호

    // 비밀번호 이벤트
    const onPasswordChange = (e) => {
        setUserpwd(e.target.value);
        console.log(userpwd);
    }

    
    // 유저 정보 불러오기
    useEffect(() => {       
        const fetchData = async () => {
            try {
                const res = await axios.post('/api/userinfo', { UserID: userid })
                if (res.data.code === 200) {
                    console.log(res.data.profile[0].ImageURL);
                    setUserimage(res.data.profile[0].ImageURL);
                    setUsernickname(res.data.usernickname);
                    //setUserpwd(res.data.profile[0].Password);

                    console.log(res.data.profile[0].Password);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    // 유저 정보 변경
    const handleUpdate = async() => {
        // 프로필이 바뀌었을 때
        if (currentUser?.ImageURL !== userimage) {
            try {
                const res = await axios.put('/api/userupdate', { ImageURL: userimage, UserID: userid, Password: userpwd, Nickname: usernickname })
                if (res.data.code === 200) {
                    setCurrentUser(prevState => ({ ...prevState, ImageURL: res.data.profile }));
                    alert('프로필 변경') // 디버그를 위함, 나중에 "정보가 변경되었습니다"로 변경
                } else {
                    console.error();
                }
            } catch (err) {
                console.log(err);
            }
        }

        // 닉네임이 바뀌었을 때
        if (usernickname && currentUser?.Nickname !== usernickname) {
            if (ischecknickname === true) { // 닉네임 중복 확인 했을 때
                try {
                    const res = await axios.put('/api/userupdate', { ImageURL: userimage, UserID: userid, Password: userpwd, Nickname: usernickname })
                    if(res.data.code === 200) {
                        setCurrentUser(prevState => ({ ...prevState, Nickname: res.data.nickname }));
                        alert('닉네임 변경') // 디버그를 위함, 나중에 "정보가 변경되었습니다"로 변경
                    } else {
                        console.error();
                        }
                } catch (err) {
                    console.log(err);
                }
            } 

        }

        // 비밀번호이 바뀌었을 때
    }


    return (
    <div className="profile">
        <div><h1>MY PAGE</h1></div>
        <div><img className='profile-image' src={ userimage } alt=""></img></div>
        {/**
        
        <div><input type='file' onChange={ onChangeImage } /></div>
         */}

        <div>
            <input type='file' id='selectedFile' style={{ display: 'none' }} onChange={ onChangeImage } />
            <button onClick={() => { document.getElementById('selectedFile').click(); }}>사진 변경</button>
        
        </div>
        <div className="profile-nickname">
            <input className="nickname" required type="text" placeholder='닉네임' value={ usernickname } onChange={ onNicknameChange } />
            {nicknamebtn === true ? ( // 닉네임 변경 됐을 때 버튼 활성화
                <button className="nickname" onClick={ handleChecknickname }>중복확인</button> 
            ): ( // 닉네임 변경 되지 않았을 때
                <button className="nicknamefalse" disabled onClick={ handleChecknickname }>중복확인</button>
            )}
            
        </div>
        <form className="profile-password">
            <div>
                <div><p>비밀번호 변경을 원하시면<br/>새로운 비밀번호를 입력하세요.</p></div>
                <div><input required type="password" placeholder='현재 비밀번호' onChange={ onPasswordChange }/></div>
                {currentUser?.Password !== userpwd ? (
                    <p className='hidden'>비밀번호가 일치하지 않습니다.</p>
                ) : (null)}
                

                <div><input required type="password" placeholder='신규 비밀번호'/></div>
                <div><input required type="password" placeholder='비밀번호 확인'/></div>
            </div>
        </form>
        <button onClick={ handleUpdate }>적용</button>
    </div>
        
        
    )
}

export default Profile
