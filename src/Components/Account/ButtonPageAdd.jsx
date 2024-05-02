import '../style/buttonPage.css'
import BorderButton from './BorderButton'
import { createPage } from './backend/PagesBack'
import { useNavigate } from 'react-router-dom'

// кнопка страницы
const ButtonPageAdd = (props) => {
    const navigate = useNavigate();

    const handleNewPage = async () =>{
        try{
            const page_url = await createPage()
            console.log(page_url)
            if (page_url){
                navigate(`/page/${page_url}`)
            }
        } catch(error){
            console.error(error);
        }
    }
    const test2 = () =>{
        
        console.log('НЕok')
    }
    return (
        <>
            <BorderButton className='btnPageAdd' onClick={props.isPage ? handleNewPage : test2}>
                <img src='/icons/add.svg' alt='add'></img>
            </BorderButton>
        </>
    )
}

export default ButtonPageAdd
