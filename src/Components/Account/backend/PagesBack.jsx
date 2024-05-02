import axios from "axios";

/*создание страницы */
export const createPage = async () =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }

    const body = JSON.stringify({
        page_link: getRandomString(10),
    })

    try{
        const response = await axios.post("http://localhost:8000/api/pages/", body, config)
        localStorage.setItem("pageData", JSON.stringify(response.data))
        return response.data.page_link
    } catch(error){
        console.error(error);
    }
}

/* получение страниц */
export const getPages = async () =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }

    try{
        const response = await axios.get("http://localhost:8000/api/pages/", config )
        return response.data
    } catch (error){
        console.error(error);
        throw error
    }
}

/*получение одной страницы */
export const getPage = async (urlPage) =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }

    try{
        const response = await axios.get(`http://localhost:8000/api/pages/${urlPage}/`, config )
        return response.data
    } catch (error){
        console.error(error);
        throw error
    }
}

/*обновление данных страницы */
export const updatePage = async (urlPage, newPageData, blocks)=>{

    try{
        const response = await axios.put(`http://localhost:8000/api/pages/${urlPage}/`, {
            ...newPageData,
            json_data: blocks,
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        } )
        return response.data
    } catch(error){
        console.error(error);
        throw error
    }
}

/* удаление страницы*/
export const deletePage = async (urlPage) =>{
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }
    try{
        await axios.delete(`http://localhost:8000/api/pages/${urlPage}/`, config )
    } catch(error){
        console.error(error);
        throw error
    }
}



const getRandomString = (length) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
    for (let i = 0; i < length; i++) {
        randomString += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomString;
};