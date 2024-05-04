import axios from "axios";

export const createForm = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }

    const body = JSON.stringify({
        form_link: getRandomString(10),
    })

    try {
        const response = await axios.post('http://localhost:8000/api/forms/', body, config)
        return response.data.form_link
    } catch (error) {
        console.error(error);
        throw error
    }
};

export const getAllForms = async () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }

    try {
        const response = await axios.get('http://localhost:8000/api/forms/', config)
        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getOneForm = async (urlForm) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }

    try {
        const response = await axios.get(`http://localhost:8000/api/forms/${urlForm}/`, config)
        return response.data
    } catch (error) {
        console.error(error);
        throw error
    }
}

export const updateForm = async (dataForm) => {

    console.log(dataForm);

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }

    const body = JSON.stringify({
        title: dataForm.title,
        form_link: dataForm.form_link,
        json_data: dataForm.json_data,
        questions: dataForm.questions
    })

    try {
        const response = await axios.put(`http://localhost:8000/api/forms/${dataForm.form_link}/`, body, config)
        console.log(response.data);
        return response.data
    } catch (error) {
        console.error(error);
        throw error
    }
}


export const deleteForm = async (urlForm) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
            'Accept': 'application/json'
        }
    }
    try {
        await axios.delete(`http://localhost:8000/api/forms/${urlForm}/`, config)
    } catch (error) {
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