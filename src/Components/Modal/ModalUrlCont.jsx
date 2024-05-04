import FormCast from '../OftenUsed/FormCast'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Container } from 'react-bootstrap';

// контент модального окна ссылки
const ModalUrlCont = ({dataChange, selectedBlock}) => {


    return (
        <>
            <Modal.Body className='bodyUrl'>
                <Container className=' headFormUrl'>
                    <h3>Текст</h3>
                    <div className='formText'>
                        <FormCast
                            className='formHref'
                            placeholder='Заголовок'
                            name='title'
                            defaultValue={'' || selectedBlock.data?.title}
                            onChange={(e)=>dataChange(e)}
                        />
                        <FormCast
                            className='formHref'
                            placeholder='Основной текст'
                            name='text'
                            defaultValue={'' || selectedBlock.data?.text}
                            onChange={(e)=>dataChange(e)}
                        />
                    </div>
                </Container>
                <Container className=' headFormUrl'>
                    <h3>Ссылка</h3>
                    <FormCast
                        className='formHref'
                        name='url'
                        defaultValue={'' || selectedBlock.data?.url}
                        onChange={(e)=>dataChange(e)}
                    />
                </Container>
            </Modal.Body>
        </>
    )
}

export default ModalUrlCont
