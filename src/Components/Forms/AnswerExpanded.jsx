import { Container } from "react-bootstrap";

const AnswerExpanded = () => {
    return (
        <>
            <div>
                <Container className='borderFormAnswer'>
                    <h1 className="h1-answer">ФИО</h1>
                    <p className="answer-variant">Романова Елизавета Данииловна</p>
                    <p className="answer-variant">Фролова Кристина Давидовна</p>
                    <p className="answer-variant">Захарова Софья Марковна</p>
                </Container>
            </div>
        </>
    )
}

export default AnswerExpanded
