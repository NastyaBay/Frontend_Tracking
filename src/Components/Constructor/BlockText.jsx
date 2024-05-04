import '../style/blockText.css'

import { Container } from 'react-bootstrap'
import ButtonUpDown from '../OftenUsed/ButtonUpDown'

// блок текстовый
const BlockText = ({ moveBlockDown, moveBlockUp, removeBlock, data, onClick }) => {
    const handleContainerClick = (event) => {
        if (event.target.tagName === 'BUTTON' || event.target.tagName === 'IMG') {
            event.stopPropagation();
        } else {
            onClick();
        }
    };

    return (
        <>
            <Container className='blockText' onClick={handleContainerClick}>
                <ButtonUpDown moveBlockUp={moveBlockUp} moveBlockDown={moveBlockDown} />
                <img className='imgCross' src='/icons/cross.svg' onClick={removeBlock}></img>
                <h1 className='text'>{data.text}</h1>
            </Container>
        </>
    )
}

export default BlockText