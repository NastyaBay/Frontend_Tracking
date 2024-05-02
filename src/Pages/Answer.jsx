import './style/Answer.css'

import { useState } from "react";
import { Container } from "react-bootstrap";
import Navibar from "../Components/OftenUsed/Navibar";
import ContainerCast from "../Components/OftenUsed/ContainerCast";
import AnswerCheckboxRadio from "../Components/Forms/AnswerCheckboxRadio";
import AnswerExpanded from "../Components/Forms/AnswerExpanded";

import ModalQr from '../Components/Modal/ModalQr'

import { authUser } from '../Components/Account/backend/LoginBack';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/*ответы на форму */
const Answer = () => {
    const [showQr, setShowQr] = useState(false);
    const handleCloseQr = () => setShowQr(false);
    const handleShowQr = () => setShowQr(true);
    const navigate = useNavigate();

    useEffect(() => {
        authenticated()
    }, [])

    const authenticated = async () => {
        try {
            const response = await authUser()
            if (!response) {
                navigate("/")
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Navibar name1='Конструктор формы' name2='Ответы' name3='Ссылка' href1='/form' href3={handleShowQr} />

            <Container className="bodyFormAnswer">
                <ContainerCast className='blockFormAnswer '>
                    <Container className='borderFormAnswer'>
                        <p className="textAnswerCount">
                            Получено ответов: 3
                        </p>
                    </Container>
                    <AnswerExpanded />
                    <AnswerCheckboxRadio question={'Статус'} labels={['Студент', 'Школьник']} data={[1, 2]} />
                    <AnswerCheckboxRadio question={'Как вы узнали о мероприятии?'} labels={['Из социальных сетей', 'В учебном заведении', 'От друзей']} data={[2, 3, 1]} />

                </ContainerCast>
            </Container>
            <ModalQr show={showQr} handleClose={handleCloseQr} />
        </>
    )
}

export default Answer
