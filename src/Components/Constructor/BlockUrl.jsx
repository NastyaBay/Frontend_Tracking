import { Container } from 'react-bootstrap'
import '../style/blockUrl.css'
import ButtonUpDown from '../OftenUsed/ButtonUpDown'

// блок ссылочный
const BlockUrl = ({ titleColor, textColor, bgColor, moveBlockDown, moveBlockUp, removeBlock }) => {
  return (
    <>
    <Container className='blockUrl' style={{ backgroundColor: bgColor }}>
    <ButtonUpDown moveBlockUp={moveBlockUp} moveBlockDown={moveBlockDown}/>
        <img className='imgCross' src='/icons/cross.svg' onClick={removeBlock}></img>
        <h1 className='headUrl' style={{ color: titleColor }}>Заголовок ссылочного блока</h1>
        <h2 className='textUrl' style={{ color: textColor }}>Текст ссылочного блока</h2>
    </Container>
</>
  )
}

export default BlockUrl
