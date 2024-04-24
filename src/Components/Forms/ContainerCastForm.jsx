import { Container, Form } from 'react-bootstrap'
import '../style/containerCastForm.css'

// Блок вопросов у формы (border)
const ContainerCastForm = ({ children, placeholderHead, isNotCross, onDelete }) => {
    return (
        <>
            <Container className='borderForm'>
                <Form.Control className='formHead headFont' placeholder={placeholderHead} />
                {!isNotCross && <img className='imgCrossForm' onClick={onDelete} src='/icons/cross.svg'></img>}
                {children}
            </Container>
        </>
    )
}

export default ContainerCastForm
