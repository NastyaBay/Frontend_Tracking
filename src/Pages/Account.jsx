import { Container } from 'react-bootstrap'
import './style/Account.css'
import ButtonCast from '../Components/OftenUsed/ButtonCast'
import ContainerCast from "../Components/OftenUsed/ContainerCast";
import BlockPages from '../Components/Account/BlockPages';
import BorderButton from '../Components/Account/BorderButton'
import { logoutUser, authUser } from '../Components/Account/backend/LoginBack';

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPages } from '../Components/Account/backend/PagesBack';
import { getAllForms } from '../Components/Forms/backend/FormsBackend';

// страница аккаунта
const Account = () => {
    const navigate = useNavigate();
    const [drafts, setDrafts] = useState([]);
    const [publicPages, setPublicPages] = useState([]);
    const [forms, setForms] = useState([]);
    

    const handleLogout = () => {
        logoutUser()
        window.location.reload()
    }

    useEffect(() => {
        authenticated()
    }, [])

    const authenticated = async () => {
        try {
            const response = await authUser()
            if (!response) {
                navigate("/")
            } else{
                getAllPages()
            }
        } catch (error) {
            console.error(error);
        }
    }

    const getAllPages = async () => {
        try {
            const pagesResponse = await getPages()
            const drafts = pagesResponse.filter(page => !page.published)
            setDrafts(drafts)
            const publicPages = pagesResponse.filter(page => page.published)
            setPublicPages(publicPages)

            const formsResponse = await getAllForms()
            setForms(formsResponse)
        } catch (error) {
            console.error(error);
        }
    }

    const handleClickStatisticUser = () => {
        navigate('/statistic')
    }

    return (
        <>
            <div className='test'>
                <ContainerCast className='blockAcc'>
                    <Container className='headBlockAcc'>
                        <h1 className="textAcc ">Мой профиль</h1>
                        <ButtonCast name='Выйти' onClick={handleLogout} />
                    </Container>
                    <BorderButton className='btn-analytics' onClick={handleClickStatisticUser}>Статистика по посетителям</BorderButton>

                    <h3 className='h3-acc'>Страницы</h3>
                    <BlockPages name="В разработке" isAdd={true} data={drafts} isPage={true}/>
                    <BlockPages className='block-pub' name="Опубликовано" isAdd={false} data={publicPages} />

                    <h3 className='h3-acc h3-forms'>Формы обратной связи</h3>
                    <BlockPages isAdd={true} isPage={false} data={forms} />
                </ContainerCast>
            </div>
        </>
    )
}

export default Account
