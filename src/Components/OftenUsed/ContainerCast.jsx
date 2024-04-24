import { Container } from "react-bootstrap";
import '../style/containerCast.css'

// контейнер со своим стилем
const ContainerCast = ({ className, children }) => {
    return (
        <>
            <Container className={`block ${className}`}>
                {children}
            </Container>
        </>
    )
}

export default ContainerCast
