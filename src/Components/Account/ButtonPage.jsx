import { Button } from 'react-bootstrap'
import '../style/buttonPage.css'
import BorderButton from './BorderButton'
import { deletePage } from './backend/PagesBack'
import { useNavigate } from 'react-router-dom'

// кнопка страницы
const ButtonPage = (props) => {
    const navigate = useNavigate();
    const handleDeletePage = async () => {
        try {
            await deletePage(props.data.page_link);
            window.location.reload()
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteClick = (e) => {
        e.preventDefault(); 
        e.stopPropagation(); 
        handleDeletePage(); 
    };
    const handleGoPage = () =>{
        navigate(`/page/${props.data.page_link}`)
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
