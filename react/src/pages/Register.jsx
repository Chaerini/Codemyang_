import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from "../img/로고6.png"
import axios from "axios";


const Register = () => {

    // 회원가입 정보 선언
    const [ email, setEmail ] = useState('');
    const [ userid, setUserid ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordcheck, setPasswordcheck ] = useState('');
    const [ nickname, setNickname ] = useState('');

    // 아이디 중복, 닉네임 중복, 비밀번호 확인 여부
    const [ischeckuserid, setIscheckuserid] = useState(false);
    const [ischecknickname, setIschecknickname] = useState(false);
    const [ischeckpwd, setIscheckpwd] = useState(false);

    // 페이지 이동을 위한 선언
    const navigate = useNavigate();

    // 아이디 중복 확인
    const handleCheckid = async (e) => {
        e.preventDefault();
    
        // 서버로 아이디 중복 확인 요청
        try {
            const res = await axios.post('/api/signup/checkid', { UserID: userid });
            console.log("data: ", res.data);
    
          if (res.data.isDuplicate === true) { // 아이디 중복일 경우
            //console.log("true");
            setIscheckuserid(false);
            alert("이미 존재하는 아이디입니다. 다시 입력해주세요.");

          } else if (res.data.isDuplicate === false) { // 아이디 중복 아닌 경우
            //console.log("false");
            setIscheckuserid(true);
            alert("사용 가능한 아이디입니다.");

          } else { // 에러
            console.error();
          }

        } catch (error) {
          console.error('오류가 발생했습니다.', error);
        }
      };

    // 닉네임 중복 확인
    const handleChecknickname = async (e) => {
        e.preventDefault();
    
        // 서버로 닉네임 중복 확인 요청
        try {
            const res = await axios.post('/api/signup/checknickname', { Nickname : nickname });
            console.log("data: ", res.data);
            console.log("nick", nickname);
    
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

    // 비밀번호 확인
    const onCheckpwd = async (e) => {
        if (password !== passwordcheck) {
          alert('비밀번호가 일치하지 않습니다.');

        } else {
          alert('비밀번호가 일치합니다.');
          setIscheckpwd(true);
          
        }
    }

     // 회원가입 버튼 눌렀을 때 이벤트
    const handleCheckend = async (e) => {
        e.preventDefault();
        
        if (ischeckuserid & ischeckpwd & ischecknickname === true) {
          alert('회원가입 성공');
          try {
            const res = await axios.post('/api/signup', { UserID: userid, Email: email, Nickname: nickname, Password: password });
            console.log(res.data.userinfo);
            navigate('/login');
          } catch (err) {
            console.log(err);
          }
        } else {
          console.log(ischeckuserid);
          console.log(ischeckpwd);
          console.log(ischecknickname);
          alert('회원가입 실패. 다시 확인해주세요.');
        }
        {/**
        console.log(email);
        if (!email) {
            alert("이메일을 입력해주세요.");
        }
        else if (!userid) {
            alert("아이디를 입력해주세요.");
        }
        else if (!password) {
            alert("비밀번호를 입력해주세요.");
        }
        else if (!passwordcheck) {
            alert("비밀번호를 확인해주세요.");
        }
        else if (!nickname) {
            alert("닉네임을 입력해주세요.");
        }
        else if (password != passwordcheck) {
            alert("비밀번호가 다릅니다. 다시 입력해주세요.");
        }
        */}
    }

     
    
    return (
        <div className='authregister'>
            <form>
                <img src={logo} alt=""/>
                <input required type="email" placeholder='이메일'
                onChange={ (e) => { setEmail(e.target.value); } }/> {/** 정보 가져오기 */}
                <div className="info-id">
                    <input required type="text" placeholder='아이디' 
                    onChange={ (e) => { setUserid(e.target.value); } }/>
                    <button onClick={ handleCheckid }>중복확인</button>
                </div>
                <input required type="password" placeholder='비밀번호' 
                onChange={ (e) => { setPassword(e.target.value); } }/> 
                <input required type="passwordcheck" placeholder='비밀번호 확인'
                onChange={ (e) => { setPasswordcheck(e.target.value); } }
                onBlur={ onCheckpwd }/>
                <div className="info-id">
                <input required type="nickname" placeholder='닉네임'
                onChange={ (e) => { setNickname(e.target.value); } }/> 
                <button onClick={ handleChecknickname }>중복확인</button>
                </div>
                <button onClick={ handleCheckend }>회원가입</button>
                

            </form>
        </div>
    )
}

export default Register
