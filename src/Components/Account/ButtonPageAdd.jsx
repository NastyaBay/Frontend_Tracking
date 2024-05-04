import { useNavigate } from 'react-router-dom'

import BorderButton from './BorderButton'

import { createPage } from './backend/PagesBack'
import { createForm } from '../Forms/backend/FormsBackend'

import '../style/buttonPage.css'
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
    const handleNewForm = async () =>{
        try{
            const form_url = await createForm()
            if (form_url){
                navigate(`/form/${form_url}`)
            }
        } catch(error){
            console.error(error);
        }
    }
    return (
        <>
            <BorderButton className='btnPageAdd' onClick={props.isPage ? handleNewPage : handleNewForm}>
                <img src='/icons/add.svg' alt='add'></img>
            </BorderButton>
        </>
    )
}

export default ButtonPageAdd
