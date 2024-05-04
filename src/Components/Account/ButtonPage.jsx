import { useNavigate } from 'react-router-dom'

import BorderButton from './BorderButton'

import { deletePage } from './backend/PagesBack'
import { deleteForm } from '../Forms/backend/FormsBackend'

import '../style/buttonPage.css'
// кнопка страницы
const ButtonPage = (props) => {
    const navigate = useNavigate();
    const handleDeletePage = async () => {
        if (props.data?.page_link) {
            try {
                await deletePage(props.data.page_link);
                window.location.reload()
            } catch (error) {
                console.error(error);
            }
        } else if (props.data?.form_link) {
            try {
                await deleteForm(props.data.form_link);
                window.location.reload()
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleDeleteClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        handleDeletePage();
    };
    const handleGoPage = () => {
        if (props.data?.page_link) {
            navigate(`/page/${props.data.page_link}`)
        } else if (props.data?.form_link) {
            navigate(`/form/${props.data.form_link}`)
        }

    }
    return (
        <>
            <BorderButton onClick={handleGoPage} className='btnPage'>
                <p className='headBtnPage'>{props.data.title}</p>
                <a href="#" onClick={handleDeleteClick}>
                    <img src='/icons/delete.svg' alt='delete'></img>
                </a>
            </BorderButton>
        </>
    );
};
export default ButtonPage
