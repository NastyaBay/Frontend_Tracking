import { Container } from 'react-bootstrap'
import '../style/blockUrl.css'
import ButtonUpDown from '../OftenUsed/ButtonUpDown'

// блок ссылочный
const BlockUrl = ({ titleColor, textColor, bgColor, moveBlockDown, moveBlockUp, removeBlock, data, defaultText, defaultTitle}) => {
  const handleContainerClick = (event) => {
/*     if (event.target.tagName === 'BUTTON' || event.target.tagName === 'IMG') {
        event.stopPropagation();
    } else {
        onClick(); */
    }
  return (
    <>
      <Container className='blockUrl' style={{ backgroundColor: data?.colorBg || bgColor }} onClick={handleContainerClick}>
        <ButtonUpDown moveBlockUp={moveBlockUp} moveBlockDown={moveBlockDown} />
        <img className='imgCross' src='/icons/cross.svg' onClick={removeBlock}></img>
        <h1 className='headUrl' style={{ color: data?.colorTitle || titleColor }}>{data?.title || defaultTitle}</h1>
        <h2 className='textUrl' style={{ color: data?.colorText || textColor }}>{data?.text || defaultText}</h2>
      </Container>
    </>
  )
}

export default BlockUrl
