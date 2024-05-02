import { Button } from 'react-bootstrap'
import '../style/borderButton.css'

/*кнопка с обводкой */
const BorderButton = ({ className, children, href, onClick}) => {
  return (
    <>
     <Button className={`btnPageBorder ${className}`}  onClick={onClick}>
        {children}
    </Button>
    </>
  )
}

export default BorderButton
