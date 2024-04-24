import FormCast from '../OftenUsed/FormCast'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

// контент модального окна ссылки
const ModalUrlCont = () => {
    const [url, setUrl] = useState('http://');

    const handleChange = (e) => {
        setUrl(e.target.value);
    };
    return (
        <>
            <Modal.Body className='bodyUrl'>
                <Container className=' headFormUrl'>
                    <h3>Текст</h3>
                    <div className='formText'>
                        <FormCast className='formHref' placeholder='Заголовок' />
                        <FormCast className='formHref' placeholder='Основной текст' />
                    </div>
                </Container>
                <Container className=' headFormUrl'>
                    <h3>Ссылка</h3>
                    <FormCast className='formHref' onChange={handleChange} value={url} />
                </Container>
            </Modal.Body>
        </>
    )
}

export default ModalUrlCont
