import Modal from 'react-bootstrap/Modal';
import { Container, Form } from 'react-bootstrap';
import QRCode from 'qrcode.react';

import '../style/modal.css'
import ButtonCast from '../OftenUsed/ButtonCast'
import FormCast from '../OftenUsed/FormCast'

import { useState } from 'react';

// модальное окно Публикация
const ModalQr = ({ show, handleClose, updatePage, data }) => {
    const [namePage, setNamePage] = useState('' || data.title);

    const savePage = (publishedPage = data.published) => {
        console.log(data, data.published, publishedPage);
        const newPageData = {
            ...data,
            title: namePage,
            published: publishedPage
        }
        updatePage(newPageData);
        handleClose();
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
                <Modal.Body className='blockEdit'>
                    <div className='blockEditName'>
                        <div className='blockFormEditName'>
                            <h3>Название проекта</h3>
                            <FormCast
                                className='formHrefEdit'
                                defaultValue={data.title}
                                onChange={(e) => setNamePage(e.target.value)}
                            />
                        </div>
                        <div className='blockFormEditName'>
                            <h3>Ссылка</h3>
                            <Form.Control
                                className='formHrefEdit'
                                defaultValue={`http://localhost:8000/${data?.page_link || data?.form_link}`}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className='headForm3 '>
                        <h3>QR-код</h3>
                        <div className='headForm2'>
                            <Container className='blockImgQr'>
                                <QRCode
                                    value={`http://localhost:8000/${data?.page_link || data?.form_link}`}
                                    className='imgQr'
                                    size={160}
                                />
                                {/* <img src='/qr.png' className='imgQr'></img> */}
                            </Container>
                            {/* <div className='btnBlock2'>
                                <ButtonCast className='btnBlockQr' name={<img className='imgBtn' src='/icons/loading.svg'></img>} />
                                <ButtonCast className='btnBlockQr' name={<img className='imgBtn' src='/icons/share.svg'></img>} />
                                <ButtonCast className='btnBlockQr' name={<img className='imgBtn' src='/icons/save.svg'></img>} />
                            </div> */}
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    {data?.page_link ?
                        <ButtonCast onClick={() => savePage(!data.published)} name={data.published ? 'Снять с публикации' : 'Опубликовать'} className='btn1' /> : null
                    }
                    <ButtonCast onClick={() => savePage(data.published)} name='Сохранить' className='btn1' />
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalQr
