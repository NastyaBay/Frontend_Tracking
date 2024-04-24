import Modal from 'react-bootstrap/Modal';

import '../style/modal.css';
import ButtonCast from '../OftenUsed/ButtonCast';
import { Form } from 'react-bootstrap';

// модальное окно блока ссылки
const ModalText = ({ show, handleClose, handleSave }) => {
    return (
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                animation={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Текст</Modal.Title>
                </Modal.Header>
                <Modal.Body className='bodyTextArea'>
                    <Form.Control as="textarea" rows={3} className='formTextArea' placeholder='Введите текст' />
                </Modal.Body>
                <Modal.Footer className='footerUrl'>
                    <ButtonCast onClick={handleSave} name='Сохранить' className='btn1' />
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalText
