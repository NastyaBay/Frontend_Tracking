import React from 'react'
import Modal from 'react-bootstrap/Modal';
import { Container } from 'react-bootstrap';
import '../style/modal.css'
import ButtonCast from '../OftenUsed/ButtonCast'
import FormCast from '../OftenUsed/FormCast'

import { useState } from 'react';

// модальное окно Публикация
const ModalQr = ({ show, handleClose }) => {
    const [url, setUrl] = useState('http://');

    const handleChange = (e) => {
        setUrl(e.target.value);
    };

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
                    <Modal.Title>Публикация</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='headForm'>
                        <h3>Ссылка</h3>
                        <FormCast className='formHref' onChange={handleChange} value={url} />
                    </div>
                    <div className='headForm headForm2'>
                        <h3>QR-код</h3>
                        <Container className='blockImgQr'>
                            <img src='/qr.png' className='imgQr'></img>
                        </Container>
                        <div className='btnBlock2'>
                            <ButtonCast className='btnBlockQr' name={<img className='imgBtn' src='/icons/loading.svg'></img>} />
                            <ButtonCast className='btnBlockQr' name={<img className='imgBtn' src='/icons/share.svg'></img>} />
                            <ButtonCast className='btnBlockQr' name={<img className='imgBtn' src='/icons/save.svg'></img>} />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>

                    <ButtonCast onClick={handleClose} name='Опубликовать' className='btn1' />
                    <ButtonCast onClick={handleClose} name='Сохранить' className='btn1' />
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalQr
