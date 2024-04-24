import { Container } from 'react-bootstrap'
import './style/Account.css'
import ButtonCast from '../Components/OftenUsed/ButtonCast'
import ContainerCast from "../Components/OftenUsed/ContainerCast";
import BlockPages from '../Components/Account/BlockPages';
import BorderButton from '../Components/Account/BorderButton'

// страница аккаунта
const Account = () => {
    return (
        <>
            <div className='test'>
                <ContainerCast className='blockAcc'>
                    <Container className='headBlockAcc'>
                        <h1 className="textAcc ">Мой профиль</h1>
                        <ButtonCast name='Выйти' href='/' />
                    </Container>
                    <BorderButton className='btn-analytics' href="/statistic">Статистика по посетителям</BorderButton>
                    <h3 className='h3-acc'>Страницы</h3>
                    <BlockPages name="В разработке" isAdd={true} href='/page' text1='День открытых дверей' text2='Тест драйв' />
                    <BlockPages name="Опубликовано" isAdd={false} className='block-pub' text1='Школа Екатеринбург' text2='Пик ИТ' />
                    <h3 className='h3-acc h3-forms'>Формы обратной связи</h3>
                    <BlockPages isAdd={true} href='/form' text1='Фестиваль радиоэлектроники' text2='День открытых дверей' />
                </ ContainerCast >
            </div>
        </>
    )
}

export default Account
