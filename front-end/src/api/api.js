import Axios from "axios"

export const getAxiosInstanceApi = () => {
    return Axios.create({
        baseURL: "http://localhost:3000/",
        headers: {
            'x-auth-token' : localStorage.getItem("x-auth-token")
        }
    })
};
