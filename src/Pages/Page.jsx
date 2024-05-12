import './style/Page.css'
import { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import Navibar from "../Components/OftenUsed/Navibar";
import ContainerCast from "../Components/OftenUsed/ContainerCast";
import ButtonCast from '../Components/OftenUsed/ButtonCast';
import ModalQr from '../Components/Modal/ModalQr';
import ModalUrl from '../Components/Modal/ModalUrl';
import BlockUrl from '../Components/Constructor/BlockUrl'
import BlockText from '../Components/Constructor/BlockText';
import ModalText from '../Components/Modal/ModalText';

import { authUser } from '../Components/Account/backend/LoginBack';
import { useNavigate, useParams } from 'react-router-dom';
import { getPage, updatePage } from '../Components/Account/backend/PagesBack';

/*конструктор страниц */
const Page = () => {
    const navigate = useNavigate();
    const pageUrl = useParams();
    const [pageData, setPageData] = useState({});

    useEffect(() => {
        authenticated()
    }, [])

    const authenticated = async () => {
        try {
            const response = await authUser()
            if (!response) {
                navigate("/")
            } else {
                const response = await getPage(pageUrl.pageUrl)
                setPageData(response)
                setBlocks(response.json_data || [])
            }
        } catch (error) {
            console.error(error);
        }
    }

    /*модальное окно публикации*/
    const [showQr, setShowQr] = useState(false);
    const handleCloseQr = () => setShowQr(false);
    const handleShowQr = () => setShowQr(true);

    /*модальное окно ссылочного блока*/
    const [showUrl, setShowUrl] = useState(false);
    const handleCloseUrl = () => {
        setShowUrl(false)
    };
    const handleShowUrl = () => {
        setShowUrl(true)
        setSelectedBlockIndex('');
        setSelectedBlock({});
    };
    const handleSaveUrl = (data) => {
        if (selectedBlockIndex !== '') {
            blocks[selectedBlockIndex].data = data.data
        } else {
            addBlock(data);
        }
        setShowUrl(false);
        setSelectedBlockIndex('');
        setSelectedBlock({});
    }

    /*модальное окно текстового блока*/
    const [showText, setShowText] = useState(false);

    const handleCloseText = () => {
        setShowText(false)
        setSelectedBlockIndex('');
        setSelectedBlock({});
    };
    const handleShowText = () => setShowText(true);
    const handleSaveText = (data) => {
        if (selectedBlockIndex !== '') {
            console.log(blocks[selectedBlockIndex]);
            blocks[selectedBlockIndex].data = data.data
        } else {
            addBlock(data);
        }
        setShowText(false);
        setSelectedBlockIndex('');
        setSelectedBlock({});
    }


    /*блоки в конструкторе */
    const [blocks, setBlocks] = useState([]);

    const addBlock = async (dataContent) => {
        setBlocks(prevBlocks => {
            const newBlocks = [...prevBlocks, dataContent];
            updatePage(pageUrl.pageUrl, pageData, newBlocks);
            return newBlocks;
        });
    };

    const saveNewPage = async (data = pageData, json = blocks) => {
        try {
            const response = await updatePage(pageUrl.pageUrl, data, json);
            setPageData(response)
        } catch (error) {
            console.error(error);
        }
    }

    /* перемещение блоков вверх */
    const moveBlockUp = (index) => {
        if (index === 0) return; // Нельзя переместить блок выше, если он находится на первом месте

        const newBlocks = [...blocks];
        [newBlocks[index - 1], newBlocks[index]] = [newBlocks[index], newBlocks[index - 1]];
        setBlocks(newBlocks);
    };
    /* перемещение блоков вниз */
    const moveBlockDown = (index) => {
        if (index === blocks.length - 1) return; // Нельзя переместить блок ниже, если он находится на последнем месте

        const newBlocks = [...blocks];
        [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
        setBlocks(newBlocks);
    };
    /* удаление блока */
    const removeBlock = (key) => {
        setBlocks(prevBlocks => {
            const newBlocks = prevBlocks.filter(block => block.key !== key)
            updatePage(pageUrl.pageUrl, pageData, newBlocks);
            return newBlocks
        });
    };
    /* переключение на версию компа/телефона */
    const [display, setDisplay] = useState({ className: 'constructor phone', url: '/icons/comp.svg' });

    const toggleDisplay = () => {
        const newClassName = display.className === 'constructor phone' ? 'constructor comp' : 'constructor phone';
        const newUrl = display.url === '/icons/comp.svg' ? '/icons/phone.svg' : '/icons/comp.svg';
        setDisplay({ className: newClassName, url: newUrl });
    };
    /*для обновления блоков */
    const [selectedBlockIndex, setSelectedBlockIndex] = useState('');
    const [selectedBlock, setSelectedBlock] = useState({});

    // Функция для открытия модального окна с данными выбранного блока текста
    const openTextBlockModal = (index) => {
        setSelectedBlockIndex(index);
        setSelectedBlock(blocks[index]);
        if (blocks[index].type == 'text') {
            setShowText(true); // Открываем модальное окно текста
        } else {
            setShowUrl(true);
        }

    };
    return (
        <>
            <Navibar  activ1={'activ'} name1='Конструктор' name2='Статистика' href2={`/page/${pageUrl.pageUrl}/statistic`} savePage={saveNewPage} />
            <div className='bodyConstr'>
                <ContainerCast className={` ${display.className}`}>
                    <div className='phoneComp'>
                        {blocks.map((block, index) => (
                            <div key={block.key} >
                                {block.type === 'text' ? (
                                    <BlockText data={block.data} onClick={() => openTextBlockModal(index)} moveBlockUp={() => moveBlockUp(index)} moveBlockDown={() => moveBlockDown(index)} removeBlock={() => removeBlock(block.key)} />
                                ) : (
                                    <BlockUrl data={block.data} onClick={() => openTextBlockModal(index)} moveBlockUp={() => moveBlockUp(index)} moveBlockDown={() => moveBlockDown(index)} removeBlock={() => removeBlock(block.key)} />
                                )}
                            </div>
                        ))}
                    </div>
                </ContainerCast>
                <ContainerCast className="blockBtn">
                    <div className='btnsPageBlock'>
                        <ButtonCast onClick={handleShowQr} className='btn1' name={<img className='img1' src='/icons/qr_code.svg'></img>} />
                        <ButtonCast onClick={handleShowText} className='btn2' name='Добавить текст' />
                        <ButtonCast onClick={handleShowUrl} className='btn2' name='Добавить ссылку' />
                        <ButtonCast onClick={toggleDisplay} className='btn1' name={<img className='img1' src={display.url}></img>} />
                    </div>
                    <div>
                        <hr />
                        <Button className='btnSaveForm' onClick={() => saveNewPage()}>Сохранить</Button>
                    </div>
                </ContainerCast>

            </div>

            <ModalQr show={showQr} handleClose={handleCloseQr} updatePage={saveNewPage} data={pageData} />
            <ModalUrl show={showUrl} handleClose={handleCloseUrl} handleSave={handleSaveUrl} selectedBlock={selectedBlock} selectedBlockIndex={selectedBlockIndex} />
            <ModalText show={showText} handleClose={handleCloseText} handleSave={handleSaveText} selectedBlock={selectedBlock} selectedBlockIndex={selectedBlockIndex} />

        </>
    )
}

export default Page
