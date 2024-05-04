import { Container, Form } from 'react-bootstrap'
import '../style/containerCastForm.css'

// Блок вопросов у формы (border)
const ContainerCastForm = ({ children, placeholderHead, isNotCross, onDelete, idValue, nameValue, dataValue, dataChange }) => {
    return (
        <>
            <Container className='borderForm'>
                <Form.Control 
                    id={idValue}
                    className='formHead headFont' 
                    placeholder={placeholderHead}
                    name={nameValue}
                    defaultValue={dataValue}
                    onChange={(e) => dataChange(e)}
                />
                {!isNotCross && <img className='imgCrossForm' onClick={onDelete} src='/icons/cross.svg'></img>}
                {children}
            </Container>
        </>
    )
};

export default ContainerCastForm;
