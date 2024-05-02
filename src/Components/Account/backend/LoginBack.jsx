/* Функции которые делают запросы на сервер */
import axios from "axios";

export const loginUser = async (password, email) => {
    try {
        const response = await axios.post("http://localhost:8000/auth/jwt/create/", {
            password: password,
            email: email
        })
        localStorage.setItem("refresh", response.data.refresh)
        localStorage.setItem("access", response.data.access)
    } catch (error) {
        console.error(error);
        throw error
    }

}

export const authUser = async () => {
    if (localStorage.getItem("access")){
        try {
            const response = await axios.post("http://localhost:8000/auth/jwt/verify/" ,{
                token: localStorage.getItem("access")
            })
            if (response.data.code !== "token_not_valid"){
                return response.data
            } else{
                console.error("Срок действия сеанса истек")
            }
        } catch (error) {
            console.error(error)
        }
    } else {
        console.error("Пользователь не авторизован")
    }
}

export const logoutUser = () => {
    localStorage.removeItem("access")
    localStorage.removeItem("refresh")
}