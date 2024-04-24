import Modal from 'react-bootstrap/Modal';

import '../style/modal.css'
import ButtonCast from '../OftenUsed/ButtonCast'
import { Tab, Tabs } from 'react-bootstrap';

import ModalUrlCont from './ModalUrlCont';
import ModalUrlDes from './ModalUrlDes';

const ModalUrl = ({ show, handleClose, handleSave }) => {
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
                        <ModalUrlCont />
                    </Tab>
                    <Tab eventKey="design" title="Дизайн">
                        <ModalUrlDes />
                    </Tab>
                </Tabs>
                <Modal.Footer className='footerUrl'>
                    <ButtonCast onClick={handleSave} name='Сохранить' className='btn1' />
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default ModalUrl
