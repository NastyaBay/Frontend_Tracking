import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

import '../style/modal.css'
import ButtonCast from '../OftenUsed/ButtonCast'
import { Tab, Tabs } from 'react-bootstrap';

import ModalUrlCont from './ModalUrlCont';
import ModalUrlDes from './ModalUrlDes';

const ModalUrl = ({ show, handleClose, handleSave }) => {
    const [content, setContent] = useState({ type: "url", key: generateKey() });
    const [dataContent, setDataContent] = useState({});
    
    const dataChange = (e) => {
        const { name, value } = e.target
        setDataContent(prevData => ({
            ...prevData,
            [name]: value
        }))
    }
    const handleSaveContent = () => {
        const updateContent = { ...content, data: dataContent }
        handleSave(updateContent);
        setDataContent({});
        setContent({ type: "url", key: generateKey() });
    }
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
                    <Modal.Title>Ссылка</Modal.Title>
                </Modal.Header>
                <Tabs
                    defaultActiveKey="content"
                    id="uncontrolled-tab-example"
                >
                    <Tab eventKey="content" title="Контент">
                        <ModalUrlCont dataChange={dataChange} />
                    </Tab>
                    <Tab eventKey="design" title="Дизайн">
                        <ModalUrlDes dataChange={dataChange} />
                    </Tab>
                </Tabs>
                <Modal.Footer className='footerUrl'>
                    <ButtonCast onClick={handleSaveContent} name='Сохранить' className='btn1' />
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default ModalUrl
function generateKey() {
    return Math.random().toString(36);
}