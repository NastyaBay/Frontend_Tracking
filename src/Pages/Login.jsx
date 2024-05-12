import './style/Login.css'

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Form } from "react-bootstrap";
import ButtonCast from '../Components/OftenUsed/ButtonCast'
import FormCast from '../Components/OftenUsed/FormCast'
import ContainerCast from "../Components/OftenUsed/ContainerCast";
import { loginUser, authUser } from '../Components/Account/backend/LoginBack';

// страница с авторизацией
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        authenticated()
    }, [])

    const authenticated = async () => {
        try {
            const response = await authUser()
            if (response) {
                navigate("/account")
            }
        } catch (error) {
            console.error(error);
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault()

        try {
            await loginUser(password, email)
            navigate("/account")
        } catch (error) {
            console.error(error);
            alert("Неправильная почта или пароль")
        }
    };

    return (

        <>
            <style>
                {`
                    body {
                        background-image: url("/back.png");
                    }
                `}
            </style>
            <div className='loginCenter login-page'>
                <ContainerCast className="blockLogin ">
                    <h1 className="textLogin ">Авторизация</h1>
                    <Form className="formGroups" onSubmit={handleLogin}>
                        <Form.Group>
                            <Form.Label >Почта</Form.Label>
                            <FormCast type='email' placeholder='email@gmail.com' defaultValue={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="formGroup">
                            <Form.Label >Пароль</Form.Label>
                            <FormCast type='password' placeholder='*********' defaultValue={password} onChange={(e) => setPassword(e.target.value)} />
                        </Form.Group>
                        <ButtonCast name='Войти' type="submit" className='btnLogin' />
                    </Form>
                </ContainerCast>
            </div>
        </>
    )
}

export default Login
