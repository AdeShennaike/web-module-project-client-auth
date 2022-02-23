import axios from "axios";

export default function axiosWithAuth() {
    const token = localStorage.getItem('token')

    
    return axios.create({
        header: {
            Authorization: token
        },
        baseUrl: 'http://localhost:9000'
    })
}

