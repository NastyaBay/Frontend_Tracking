import { Button } from 'react-bootstrap'
import '../style/borderButton.css'

/*кнопка с обводкой */
const BorderButton = ({ className, children, href}) => {
  return (
    <>
     <Button className={`btnPageBorder ${className}`} href={href}>
        {children}
    </Button>
    </>
  )
}

export default BorderButton
