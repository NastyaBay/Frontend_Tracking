import Modal from 'react-bootstrap/Modal';

import '../style/modal.css';
import ButtonCast from '../OftenUsed/ButtonCast';
import { Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';

// модальное окно блока ссылки
const ModalText = ({ show, handleClose, handleSave, selectedBlock, selectedBlockIndex }) => {
    const [content, setContent] = useState({ type: "text", key: generateKey() });
    const [dataContent, setDataContent] = useState({});

    const dataChange = (e) => {
        const { name, value } = e.target
        setDataContent(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSaveContent = () => {
        
        const updateContent = { ...content, data: dataContent ? dataContent : {} }
        handleSave(updateContent);
        setContent({ type: "text", key: generateKey() })
    };


    useEffect(() => {
        if (show && selectedBlockIndex !== null) {
            setDataContent(selectedBlock.data);
        }
    }, [show, selectedBlock, selectedBlockIndex]);

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
                    <Form.Control
                        as="textarea"
                        rows={3}
                        className='formTextArea'
                        placeholder='Введите текст'
                        name='text'
                        defaultValue={'' || selectedBlock.data?.text}
                        onChange={(e) => dataChange(e)}
                    />
                </Modal.Body>
                <Modal.Footer className='footerUrl'>
                    <ButtonCast onClick={handleSaveContent} name='Сохранить' className='btn1' />
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalText

function generateKey() {
    return Math.random().toString(36);
}