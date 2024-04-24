import './style/Login.css'

import { useState } from 'react';
import axios from 'axios';
import { Form } from "react-bootstrap";
import ButtonCast from '../Components/OftenUsed/ButtonCast'
import FormCast from '../Components/OftenUsed/FormCast'
import ContainerCast from "../Components/OftenUsed/ContainerCast";

// страница с авторизацией
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/auth/jwt/create/', {
                email: email,
                password: password
            });
            const token = response.data.token; // Предполагаем, что сервер возвращает токен
            console.log(token)

            localStorage.setItem('token', token); // Сохраняем токен в локальное хранилище
            // Другие действия после успешной аутентификации
        } catch (error) {
            setError('Неверные учетные данные. Попробуйте еще раз.');
        }
    };
    
    return (
        <>
            <ContainerCast className="blockLogin ">
                <h1 className="textLogin ">Авторизация</h1>
                <Form className="formGroups" onSubmit={handleLogin}>
                    <Form.Group>
                        <Form.Label >Почта</Form.Label>
                        <FormCast type='email' placeholder='email@gmail.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="formGroup">
                        <Form.Label >Пароль</Form.Label>
                        <FormCast type='password' placeholder='*********' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <ButtonCast name='Войти' type="submit" className='btnLogin' />
                </Form>
            </ContainerCast>
        </>
    )
}

export default Login
