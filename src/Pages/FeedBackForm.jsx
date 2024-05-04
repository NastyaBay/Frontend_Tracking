import { useState, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';

import { Button, Container, Form } from 'react-bootstrap';

import Navibar from "../Components/OftenUsed/Navibar";
import ModalQr from '../Components/Modal/ModalQr'

import QuestionAnswer from '../Components/Forms/QuestionAnswer';
import QuestionCheckboxRadio from '../Components/Forms/QuestionCheckboxRadio';
import ButtonCast from '../Components/OftenUsed/ButtonCast';
import ButtonUpDown from "../Components/OftenUsed/ButtonUpDown";

import { authUser } from '../Components/Account/backend/LoginBack';
import { getOneForm, updateForm } from '../Components/Forms/backend/FormsBackend';

import './style/Form.css'
import '../Components/style/buttonCast.css';
/* Конструктор формы обратной связи*/
const FeedBackForm = () => {
    const [showQr, setShowQr] = useState(false);
    const handleCloseQr = () => setShowQr(false);
    const handleShowQr = () => setShowQr(true);

    const urlForm = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        authenticated()
    }, [])

    const authenticated = async () => {
        try {
            const response = await authUser()
            if (!response) {
                navigate("/")
            } else {
                const response = await getOneForm(urlForm.formUrl)
                setFormData(response)
                setFormDataJson(response.json_data)
                setQuestions(response.questions)
            }
        } catch (error) {
            console.error(error);
        }
    }

    /* Страница */
    const [formData, setFormData] = useState({})
    const [formDataJson, setFormDataJson] = useState({})

    const handleSaveNewForm = async (updateFormData) => {
        try {
            const response = await updateForm(updateFormData)
            setFormData(response)
            setFormDataJson(response.json_data)
            setQuestions(response.questions)
        } catch (error) {
            console.error(error);
        }

        console.log('save');
    }
/*     console.log(formData) */
    const handleUpdateFormData = (newFormData=formData) => {
        const updateFormData = {
            ...newFormData,
            json_data: formDataJson,
            questions: questions
        }
        setFormData(updateFormData);
        handleSaveNewForm(updateFormData);
    }

    const dataChange = (e) => {
        const { name, value } = e.target
        setFormDataJson(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    /* Вопросы */
    const [questions, setQuestions] = useState([])

    const addQuestion = (type) => {
        setQuestions(prevQuestion => [...prevQuestion, { id: generateId(), type: type, title_question: '', answers: [] }])
    }

    const handleQuestionChange = (id, newText) => {
        setQuestions(prevQuestions => {
            return prevQuestions.map(question => {
                if (question.id === id) {
                    return { ...question, title_question: newText };
                }
                return question;
            });
        });
    }

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

    const removeQuestion = (id) => {
        setQuestions(prevQuestions => prevQuestions.filter(question => question.id !== id));
    };

    /* Ответы */

    // Функция добавления ответа к вопросу
    const addAnswerToQuestion = (questionId) => {
        const updatedQuestions = questions.map(question => {
            if (question.id === questionId) {
                const newAnswerId = generateId();
                return {
                    ...question,
                    answers: [...question.answers, { id: newAnswerId, title_answer: '' }]
                };
            }
            return question;
        });
        setQuestions(updatedQuestions);
    };

    const handleAnswerChange = (questionId, answerId, newText) => {
        setQuestions(prevQuestions => {
            return prevQuestions.map(question => {
                if (question.id === questionId) {
                    // Создаем новый массив ответов с обновленным текстом нужного ответа
                    const updatedAnswers = question.answers.map(answer => {
                        if (answer.id === answerId) {
                            return { ...answer, title_answer: newText };
                        }
                        return answer;
                    });
                    return { ...question, answers: updatedAnswers };
                }
                return question;
            });
        });
    };

    // Функция удаления ответа из вопроса
    const removeAnswerFromQuestion = (questionId, answerId) => {
        const updatedQuestions = questions.map(question => {
            if (question.id === questionId) {
                const updatedAnswers = question.answers.filter(answer => answer.id !== answerId);
                return {
                    ...question,
                    answers: updatedAnswers
                };
            }
            return question;
        });
        setQuestions(updatedQuestions);
    };

    return (
        <>
            <Navibar
                name1='Конструктор формы'
                name2='Ответы'
                name3='Ссылка'
                href3={handleShowQr}
                href2={`/form/${urlForm.formUrl}/answer`}
                savePage={handleSaveNewForm}
            />

            <div className='main-block-Form'>
                <div className='block blockForm'>

                    <Form.Group className='intro-block-form'>
                        <Form.Control
                            className='title-form-control'
                            placeholder='Заголовок формы'
                            name='title'
                            value={formDataJson && formDataJson.title ? formDataJson.title : ''}
                            onChange={(e) => dataChange(e)}
                        />
                        <Form.Control
                            as='textarea'
                            className='text-form-control'
                            placeholder='Описание'
                            name='text'
                            value={formDataJson && formDataJson.text ? formDataJson.text : ''}
                            onChange={(e) => dataChange(e)}
                        />
                    </Form.Group>

                    {questions.map((question, index) => {
                        if (question.type === 'text') {
                            return (
                                <>
                                    <div className="render-questions" key={question.id}>
                                        <QuestionAnswer
                                            question={question}
                                            handleRemove={() => removeQuestion(question.id)}
                                            handleQuestionChange={handleQuestionChange}
                                        />
                                        <ButtonUpDown
                                            moveBlockUp={() => moveQuestionUp(index)}
                                            moveBlockDown={() => moveQuestionDown(index)}
                                        />
                                    </div>
                                </>
                            )
                        } else if (question.type === 'lot_answer') {
                            return (
                                <>
                                    <div className="render-questions" key={question.id}>
                                        <QuestionCheckboxRadio
                                            question={question}
                                            imgSrc="/icons/check.svg"
                                            handleRemoveQuestion={() => removeQuestion(question.id)}
                                            handleQuestionChange={handleQuestionChange}
                                            handleAddAnswer={addAnswerToQuestion}
                                            handleRemoveAnswer={removeAnswerFromQuestion}
                                            handleAnswerChange={handleAnswerChange}
                                        />
                                        <ButtonUpDown
                                            moveBlockUp={() => moveQuestionUp(index)}
                                            moveBlockDown={() => moveQuestionDown(index)}
                                        />
                                    </div>
                                </>
                            )
                        } else if (question.type === 'one_answer') {
                            return (
                                <>
                                    <div className="render-questions" key={question.id}>
                                        <QuestionCheckboxRadio
                                            question={question}
                                            imgSrc="/icons/radio.svg"
                                            handleRemoveQuestion={() => removeQuestion(question.id)}
                                            handleQuestionChange={handleQuestionChange}
                                            handleAddAnswer={addAnswerToQuestion}
                                            handleRemoveAnswer={removeAnswerFromQuestion}
                                            handleAnswerChange={handleAnswerChange}
                                        />
                                        <ButtonUpDown
                                            moveBlockUp={() => moveQuestionUp(index)}
                                            moveBlockDown={() => moveQuestionDown(index)}
                                        />
                                    </div>
                                </>
                            )
                        }
                    })}

                    <h3 className='h3-AddBlock'>Добавить блок вопроса</h3>
                    <Container className='btns-form'>
                        <ButtonCast className="btn-form" name="Текстовый" onClick={() => addQuestion('text')} />
                        <ButtonCast className="btn-form" name="С множеством ответов" onClick={() => addQuestion('lot_answer')} />
                        <ButtonCast className="btn-form" name="С одним ответом" onClick={() => addQuestion('one_answer')} />
                    </Container>
                    <hr />
                    <Button className='btnSaveForm' onClick={() => handleUpdateFormData()}>Сохранить</Button>

                </div>
            </div>


            <ModalQr show={showQr} handleClose={handleCloseQr} updatePage={handleUpdateFormData} data={formData} />
        </>
    )
}

export default FeedBackForm;

function generateId() {
    return Math.random().toString(36);
}