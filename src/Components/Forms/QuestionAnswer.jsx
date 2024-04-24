import { Form } from 'react-bootstrap'
import '../style/questionAnswer.css'
import ContainerCastForm from './ContainerCastForm'
import ButtonUpDown from '../OftenUsed/ButtonUpDown'

const QuestionAnswer = ({ onDelete, moveQuestionDown, moveQuestionUp }) => {
    return (
        <>
            <ContainerCastForm onDelete={onDelete} placeholderHead='Вопрос'>
                <Form.Control disabled className='formAnswer textFont' placeholder='Развернутый ответ' />
                <ButtonUpDown moveBlockUp={moveQuestionUp} moveBlockDown={moveQuestionDown} />
            </ContainerCastForm>
        </>
    )
}

export default QuestionAnswer
