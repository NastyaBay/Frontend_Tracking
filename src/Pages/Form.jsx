import './style/Form.css'
import '../Components/style/buttonCast.css';

import { useState } from "react";
import Navibar from "../Components/OftenUsed/Navibar";
import ModalQr from '../Components/Modal/ModalQr'
import ContainerCast from '../Components/OftenUsed/ContainerCast';
import { Container, FormControl } from 'react-bootstrap';
import ContainerCastForm from '../Components/Forms/ContainerCastForm';
import QuestionAnswer from '../Components/Forms/QuestionAnswer';
import QuestionCheckboxRadio from '../Components/Forms/QuestionCheckboxRadio';
import ButtonCast from '../Components/OftenUsed/ButtonCast';

/* Конструктор формы обратной связи*/
const Form = () => {

    const [showQr, setShowQr] = useState(false);
    const handleCloseQr = () => setShowQr(false);
    const handleShowQr = () => setShowQr(true);

    const [questions, setQuestions] = useState([])

    const addQuestion = (type) => {
        setQuestions(prevQuestion => [...prevQuestion, { type: type, key: generateKey() }])
    }

    const removeQuestion = (key) => {
        setQuestions(prevQuestions => prevQuestions.filter(question => question.key !== key));
    };


    const moveQuestionUp = (index) => {
        if (index === 0) return; // Нельзя переместить блок выше, если он находится на первом месте

        const newQuestions = [...questions];
        [newQuestions[index - 1], newQuestions[index]] = [newQuestions[index], newQuestions[index - 1]];
        setQuestions(newQuestions);
    };

    const moveQuestionDown = (index) => {
        if (index === questions.length - 1) return; // Нельзя переместить блок ниже, если он находится на последнем месте

        const newQuestions = [...questions];
        [newQuestions[index], newQuestions[index + 1]] = [newQuestions[index + 1], newQuestions[index]];
        setQuestions(newQuestions);
    };

    return (
        <>
            <Navibar name1='Конструктор формы' name2='Ответы' name3='Ссылка' href3={handleShowQr} href2='/form/answer' />

            <Container className='bodyForm'>
                <ContainerCast className='blockForm'>
                    <ContainerCastForm isNotCross={true} placeholderHead='Заголовок формы'>
                        <FormControl as="textarea" className='formText textFont' placeholder='Описание' />
                    </ContainerCastForm>

                    {questions.map((question, index) => {
                        if (question.type === 'Текстовый') {
                            return <QuestionAnswer key={question.key} onDelete={() => removeQuestion(question.key)} moveQuestionDown={() => moveQuestionDown(index)} moveQuestionUp={() => moveQuestionUp(index)} />;
                        } else if (question.type === 'С множественным ответом') {
                            return <QuestionCheckboxRadio key={question.key} imgSrc="/icons/check.svg" onDelete={() => removeQuestion(question.key)}
                                moveQuestionDown={() => moveQuestionDown(index)} moveQuestionUp={() => moveQuestionUp(index)} />;
                        } else if (question.type === 'С одним ответом') {
                            return <QuestionCheckboxRadio key={question.key} imgSrc="/icons/radio.svg" onDelete={() => removeQuestion(question.key)}
                                moveQuestionDown={() => moveQuestionDown(index)} moveQuestionUp={() => moveQuestionUp(index)} />;
                        }
                        return null;
                    })}

                    <h3 className='h3-AddBlock'>Добавить блок вопроса</h3>
                    <Container className='btns-form'>
                        <ButtonCast className="btn-form" name="Текстовый" onClick={() => addQuestion('Текстовый')} />
                        <ButtonCast className="btn-form" name="С множественным ответом" onClick={() => addQuestion('С множественным ответом')} />
                        <ButtonCast className="btn-form" name="С одним ответом" onClick={() => addQuestion('С одним ответом')} />
                    </Container>
                </ContainerCast>
            </Container >
            <ModalQr show={showQr} handleClose={handleCloseQr} />
        </>
    )
}

export default Form

function generateKey() {
    return Math.random().toString(36);
}