import { Nav, Navbar, Container } from 'react-bootstrap';
import '../style/nav.css'

/*шапка конструктора и форм */
const Navibar = (props) => {
    return (
        <>
            <Navbar className="navibar">
                <Container className='navCont'>
                    <Nav >
                        <Nav.Link href={props.href1}>{props.name1}</Nav.Link>
                        <Nav.Link href={props.href2} className='h2-analytics'>{props.name2}</Nav.Link>
                        <Nav.Link onClick={props.href3} className='h2-analytics'>{props.name3}</Nav.Link>
                    </Nav>
                    <Nav>
                        <img src='/icons/avatar.svg'></img>
                        <Nav.Link href='/account'>Мой профиль</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navibar
