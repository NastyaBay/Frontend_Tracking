import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import BlockUrl from '../Constructor/BlockUrl';
import { useState } from 'react';

// дизайн модального окна ссылки
const ModalUrlDes = () => {
    const [titleColor, setTitleColor] = useState('#222');

    const handleTitleColorChange = (event) => {
        setTitleColor(event.target.value);
    };

    const [textColor, setTextColor] = useState('#222');

    const handleTextColorChange = (event) => {
        setTextColor(event.target.value);
    };

    const [bgColor, setBgColor] = useState('#C7D9FD');

    const handleBgColorChange = (event) => {
        setBgColor(event.target.value);
    };
    return (
        <>
            <Modal.Body className='bodyUrl'>
                <Container className='exempleDes'>
                    <BlockUrl titleColor={titleColor} textColor={textColor} bgColor={bgColor} />
                </Container>
                <Container className='colorsBlock'>
                    <Container className='designColor'>
                        <h3>Цвет заголовка</h3>
                        <Form.Control className='blockColor' type="color" defaultValue={titleColor} onChange={handleTitleColorChange} />
                    </Container>
                    <Container className='designColor'>
                        <h3>Цвет подзаголовка</h3>
                        <Form.Control className='blockColor' type="color" defaultValue={textColor} onChange={handleTextColorChange} />
                    </Container>
                    <Container className='designColor'>
                        <h3>Цвет фона</h3>
                        <Form.Control className='blockColor' type="color" defaultValue={bgColor} onChange={handleBgColorChange} />
                    </Container>
                </Container>
            </Modal.Body>
        </>
    )
}

export default ModalUrlDes
