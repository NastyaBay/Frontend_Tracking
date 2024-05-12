import { useNavigate } from 'react-router-dom';
import { Nav, Navbar, Container } from 'react-bootstrap';
import '../style/nav.css'

/*шапка конструктора и форм */
const Navibar = (props) => {
    const navigate = useNavigate();

    const handleSavePage = () => {
        props.savePage()
        navigate('/account')
    }

    return (
        <>
            <Navbar className="navibar">
                <Container className='navCont'>
                    <Nav >
                        <Nav.Link href={props.href1} className={props.activ1}>{props.name1}</Nav.Link>
                        <Nav.Link href={props.href2} className={`h2-analytics ${props.activ2}`}>{props.name2}</Nav.Link>
                        <Nav.Link onClick={props.href3} className={`h2-analytics ${props.activ3}`}>{props.name3}</Nav.Link>
                    </Nav>
                    <Nav>
                        <img src='/icons/avatar.svg'></img>
                        <Nav.Link onClick={handleSavePage}>Мой профиль</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Navibar
