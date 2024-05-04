import ButtonPageAdd from './ButtonPageAdd';
import ButtonPage from './ButtonPage';
import { Container } from 'react-bootstrap';
import '../style/blockPages.css'

// компонент с ссылками на страницы
const BlockPages = (props) => {

    return (
        <>
            <Container className={`blockPages ${props.className}`}>
                <h2 className='h2-block'>{props.name}</h2>
                {props.isAdd && <ButtonPageAdd isPage={props.isPage}/>}

                {props.data && props.data.map(page => (
                    <ButtonPage data={page} key={page.id}/>
                ))}

            </Container>
        </>
    )
}

export default BlockPages;
