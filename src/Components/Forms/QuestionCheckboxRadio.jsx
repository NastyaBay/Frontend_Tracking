import { Container, Form } from 'react-bootstrap'
import '../style/questionCheckboxRadio.css'
import ContainerCastForm from './ContainerCastForm'
import { useState } from 'react'
import ButtonUpDown from '../OftenUsed/ButtonUpDown'

// блок вопроса с множественным выбором
const QuestionCheckboxRadio = ({ imgSrc, onDelete, moveQuestionDown, moveQuestionUp }) => {
    const [optionsAnswer, setoptionsAnswer] = useState([{ id: 1, value: 'Вариант 1' }]);

    const handleAddOption = () => {
        const newId = optionsAnswer.length > 0 ? optionsAnswer[optionsAnswer.length - 1].id + 1 : 1;
        const newoptionsAnswer = [...optionsAnswer, { id: newId, value: `Вариант ${newId}` }];
        setoptionsAnswer(newoptionsAnswer);
    };

    const handleRemoveOption = (idToRemove) => {
        const newoptionsAnswer = optionsAnswer.filter(option => option.id !== idToRemove);
        setoptionsAnswer(newoptionsAnswer);
    };

    const handleChange = (id, value) => {
        const updatedoptionsAnswer = optionsAnswer.map(option =>
            option.id === id ? { ...option, value: value } : option
        );
        setoptionsAnswer(updatedoptionsAnswer);
    };
    return (
        <>
            <ContainerCastForm onDelete={onDelete} placeholderHead='Вопрос'>
                <Container className='blockChecks'>
                    {optionsAnswer.map(option => (
                        <Container key={option.id} className='formBlockCheck'>
                            <img src={imgSrc} />
                            <Form.Control className='textFont formCheck'
                                placeholder='Добавить вариант' value={option.value}
                                onChange={e => handleChange(option.id, e.target.value)} />
                            <img src='/icons/cross.svg' onClick={() => handleRemoveOption(option.id)} />
                        </Container>
                    ))}
                    <Container className='formBlockCheck'>
                        <img src={imgSrc} />
                        <Form.Control onClick={handleAddOption} className='textFont formCheck'
                            placeholder='Добавить вариант' />
                    </Container>
                </Container>
                <ButtonUpDown moveBlockUp={moveQuestionUp} moveBlockDown={moveQuestionDown} />
            </ContainerCastForm>
        </>
    )
}

export default QuestionCheckboxRadio
