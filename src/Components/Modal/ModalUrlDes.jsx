import { Container } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import BlockUrl from '../Constructor/BlockUrl';
import { useState, useEffect } from 'react';

// дизайн модального окна ссылки
const ModalUrlDes = ({ dataChange, selectedBlock }) => {
    const initialTitleColor = '#222';
    const initialTextColor = '#222';
    const initialBgColor = '#C7D9FD';

    const [titleColor, setTitleColor] = useState(initialTitleColor);
    const [textColor, setTextColor] = useState(initialTextColor);
    const [bgColor, setBgColor] = useState(initialBgColor);

    const handleTitleColorChange = (event) => {
        setTitleColor(event.target.value);
        dataChange(event);
    };

    const handleTextColorChange = (event) => {
        setTextColor(event.target.value);
        dataChange(event);
    };

    const handleBgColorChange = (event) => {
        setBgColor(event.target.value);
        dataChange(event);
    };

    useEffect(() => {
        if (selectedBlock.data !== null) {
            setTitleColor(selectedBlock.data?.colorTitle);
            setTextColor(selectedBlock.data?.colorText);
            setBgColor(selectedBlock.data?.colorBg);
        }
    }, [ selectedBlock]);

    return (
        <>
            <Modal.Body className='bodyUrl'>
                <Container className='exempleDes'>
                    <BlockUrl titleColor={titleColor} textColor={textColor} bgColor={bgColor} defaultTitle='Заголовок' defaultText='Текст' />
                </Container>
                <Container className='colorsBlock'>
                    <Container className='designColor'>
                        <h3>Цвет заголовка</h3>
                        <Form.Control
                            className='blockColor'
                            type="color"
                            name='colorTitle'
                            defaultValue={selectedBlock.data?.colorTitle || titleColor }
                            onChange={handleTitleColorChange}
                        />
                    </Container>
                    <Container className='designColor'>
                        <h3>Цвет подзаголовка</h3>
                        <Form.Control
                            className='blockColor'
                            type="color"
                            name='colorText'
                            defaultValue={selectedBlock.data?.colorText || textColor }
                            onChange={handleTextColorChange}
                        />
                    </Container>
                    <Container className='designColor'>
                        <h3>Цвет фона</h3>
                        <Form.Control
                            className='blockColor'
                            type="color"
                            name='colorBg'
                            defaultValue={selectedBlock.data?.colorBg || bgColor}
                            onChange={handleBgColorChange}
                        />
                    </Container>
                </Container>
            </Modal.Body>
        </>
    )
}

export default ModalUrlDes;
