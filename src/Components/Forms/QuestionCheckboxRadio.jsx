import { Form, CloseButton } from 'react-bootstrap'
import '../style/questionCheckboxRadio.css'

// блок вопроса с множественным выбором
const QuestionCheckboxRadio = ({ question, imgSrc, handleRemoveQuestion, handleQuestionChange, handleAddAnswer, handleRemoveAnswer, handleAnswerChange }) => {

    return (
        <>
            <Form.Group className='intro-block-form'>
                <CloseButton className='remove-block-form' onClick={handleRemoveQuestion} />

                <Form.Control
                    className='title-form-control'
                    placeholder='Текст вопроса'
                    value={question.title_question}
                    onChange={(e) => handleQuestionChange(question.id, e.target.value)}
                />

                <div className='answers-groups'>

                    {question.answers.map((answer) => (
                        <div className='answer-form-control-group' key={answer.id}>
                            <img src={imgSrc} />
                            <Form.Control
                                className='answer-form-control'
                                placeholder='Добавить вариант'
                                value={answer.title_answer}
                                onChange={(e) => handleAnswerChange(question.id, answer.id, e.target.value)}
                            />
                            <img src='/icons/cross.svg' alt='delete' onClick={() => handleRemoveAnswer(question.id, answer.id)} />
                        </div>
                    ))}


                    <div className='answer-form-control-group'>
                        <img src={imgSrc} />
                        <Form.Control
                            className='answer-form-control'
                            placeholder='Добавить вариант'
                            onClick={() => handleAddAnswer(question.id)}
                        />
                    </div>
                </div>

            </Form.Group>
        </>
    )
}

export default QuestionCheckboxRadio;
