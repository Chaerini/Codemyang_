import React, { useEffect, useState, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import lectureimage1 from "../img/프로필.jpg"
import axios from 'axios';
import { AuthContext } from '../context/authContext';
import Payinfo from "./Payinfo";


const Payment = () => {


    //페이지 이동
    const nav = useNavigate();

    // LectureID
    const params = useParams();
    //console.log(params?.LectureID);

    // 유저 아이디 가져오기 위한 선언
    const { currentUser } = useContext(AuthContext);
    console.log("currentUser : " + currentUser?.UserID);

    const [lecture, setLecture] = useState();
      

    // 내 강의실 리스트
    useEffect(() => {        
        const fetchData = async () => {
            try {
                const res = await axios.post('/api/lectureinfopay', { LectureID: params?.LectureID })
                if (res.data.code === 200) {
                    setLecture(res.data.lecture[0]);
                    setNameCheck(true);
                    setCellphonecheck(true);
                    setEmailCheck(true);

                    console.log(res.data.lecture[0]);
                }
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    
    // 결제 수단
    const [paymentMethod, setPaymentMethod] = useState(1);

    // 결제 수단 라디오 버튼 선택 해제
    const handleCardChange = () => {
        setPaymentMethod(1);
        //console.log(paymentMethod);
    }

    // 결제 수단 라디오 버튼 선택 해제
    const handleCashChange = () => {
        setPaymentMethod(2);
    }

    // 이름 관련 선언
    const [name, setName] = useState();
    const [namecheck, setNameCheck] = useState(); // 이름 작성 확인 여부

    // 이름 이벤트
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    useEffect(() => {
        console.log("1", name);
        const koreanRegex = /^[가-힣]+$/;
    
        // 정규식과의 일치 여부를 확인하여 상태 업데이트
        if (koreanRegex.test(name)) {
          setNameCheck(true);
          console.log(true);
        } else {
          setNameCheck(false);
          console.log(false);
        }
      }, [name]); // name 상태가 변경될 때마다 useEffect가 실행됨

    // 전화번호
    const [cellphone, setCellphone] = useState();
    const [cellphonecheck, setCellphonecheck] = useState(); // 전화번호 작성 확인 여부

    useEffect(() => {
        const koreanphone = /^01(?:0|1|[6-9])\d{8}$/;
    
        // 정규식과의 일치 여부를 확인하여 상태 업데이트
        if (koreanphone.test(cellphone)) {
            setCellphonecheck(true);
        } else {
            setCellphonecheck(false);
        }
      }, [cellphone]); // cellphone 상태가 변경될 때마다 useEffect가 실행됨

    // 전화번호 이벤트
    const handleCellphoneChange = (e) => {
        setCellphone(e.target.value);
        //console.log(cellphone);
    }

    // 이메일 이벤트
    const [email, setEmail] = useState();
    const [emailcheck, setEmailCheck] = useState();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        //console.log(email);
    }

    useEffect(() => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
        // 정규식과의 일치 여부를 확인하여 상태 업데이트
        if (emailRegex.test(email)) {
            setEmailCheck(true);
        } else {
            setEmailCheck(false);
        }
      }, [email]); // email 상태가 변경될 때마다 useEffect가 실행됨

    // 결제
    const onPayClick = async() => {
        try {
            const res = await axios.post('/api/lecturespay', { 
                LectureID: params?.LectureID,
                UserID: currentUser?.UserID,
                Name: name,
                Cellphone: cellphone,
                Email: email,
                Amount: lecture?.Price,
                Payment: paymentMethod
            })
            if (res.data.code === 200) {

                console.log(res.data);

                // 결제 api //

                alert('결제되었습니다.');
                nav('/myonline');
            }
        } catch (err) {
            console.log(err);
        }
    }


    // 결제 추가 부분
    let body = {
        LectureID: params?.LectureID,
        UserID: currentUser?.UserID,
        Name: name,
        Cellphone: cellphone,
        Email: email,
        Amount: lecture?.Price,
        Payment: paymentMethod
     } 


    return (
        <div className="payment">
        <div className="left">
            <h1>선택 강의</h1>
            <img src={ lecture?.LectureImageURL } alt="강의 이미지"></img>
            <p>{ lecture?.Title }</p>
        </div>
        <div className="right">
            <form>
            <h1>결제 수단</h1>

            <div>
                <input type='radio' name='payment' id='card' onChange={ handleCardChange } checked/><label htmlFor='card'>신용 카드</label>
                <input type='radio' name='payment' id='cash' onChange={ handleCashChange }/><label htmlFor='cash'>무통장 입금</label>
            </div>

            <div className="amount">
                <div className="amount-left"><h1>총계</h1></div>
                <div className="amount-right"><h1>{ lecture?.Price }₩</h1></div>
            </div>
            <div className="log">
                <div><h3>이름</h3></div>
                <div><input required type="text" placeholder='이름을 입력해주세요.' onChange={ handleNameChange }/></div>
                { namecheck === false ? (
                    <p>이름은 한글로만 입력 가능합니다.</p>
                    ) : (null)}
                <div><h3>전화번호</h3></div>
                <div><input required type="text" placeholder='전화번호를 입력해주세요.' onChange={ handleCellphoneChange }/></div>
                { cellphonecheck === false ? (
                    <p>010을 포함한 전화번호 11자리를 입력해주세요.( - 제외)</p>
                ) : (null)}
                <div><h3>이메일주소</h3></div>
                <div><input required type="email" placeholder='이메일을 입력해주세요.' onChange={ handleEmailChange }/></div>
                { emailcheck === false ? (
                    <p>이메일 형식에 맞지 않습니다. ( example@domain.com )</p>
                ): (null)}
                <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
                <div className="payment-button">
                    {paymentMethod === 1 ? (
                            <Payinfo payinfo={body}/> // 결제 추가 부분    
                    ) : ( <button type='button' onClick={ onPayClick } >결제</button> // type="button" 을 해야 정확하게 작동 된다! 이유는 모른다!
                    )}
                    
                </div> 
            </div>
            </form>
        </div> 
        </div>
    )
}

export default Payment
