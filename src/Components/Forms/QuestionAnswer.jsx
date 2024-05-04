import { Form, CloseButton } from 'react-bootstrap'
import '../style/questionAnswer.css'

const QuestionAnswer = ({ question, handleRemove, handleQuestionChange }) => {

    return (
        <>
            <Form.Group className='intro-block-form'>
                <CloseButton className='remove-block-form' onClick={handleRemove} />
                <Form.Control
                    className='title-form-control'
                    placeholder='Текст вопроса'
                    value={question.title_question}
                    onChange={(e) => handleQuestionChange(question.id, e.target.value)}
                />
                <Form.Control
                    disabled
                    className='text-form-control text-form-border'
                    placeholder='Развёрнутый ответ'
                />
            </Form.Group>
        </>
    )
}

export default QuestionAnswer;
