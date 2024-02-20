import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import logo from "../img/로고6.png";

const Login = () => {

    const [ inputs, setInputs ] = useState({
        username : "",
        paswword : "",
    });
    const [ err, setError ] = useState(null);
    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (inputs) {
                await login(inputs)
                navigate("/");
            }
        } catch (err) {
            alert('아이디와 비밀번호를 다시 확인해주세요.');
            setError(err.response.data);
        }
    };

    return (
        <div className='auth'>
            <form>
                <img src={logo} alt=""/>
                <input type="text" placeholder='아이디' name='UserID' onChange={ handleChange }/>
                <input type="password" placeholder='비밀번호' name='Password' onChange={ handleChange }/>
                <button onClick={ handleSubmit }>로그인</button>
                <span>아직 회원이 아니신가요? <Link to="/register">회원가입하기</Link></span>

            </form>
        </div>
    )
}

export default Login
