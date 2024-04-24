import '../style/blockText.css'

import { Container } from 'react-bootstrap'
import ButtonUpDown from '../OftenUsed/ButtonUpDown'

// блок текстовый
const BlockText = ({ moveBlockDown, moveBlockUp, removeBlock }) => {
    return (
        <>
            <Container className='blockText'>
                <ButtonUpDown moveBlockUp={moveBlockUp} moveBlockDown={moveBlockDown} />
                <img className='imgCross' src='/icons/cross.svg' onClick={removeBlock}></img>
                <h1 className='text'>Заголовок ссылочного блока</h1>
            </Container>
        </>
    )
}

export default BlockText
