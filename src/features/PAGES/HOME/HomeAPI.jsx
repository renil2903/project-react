import axios from "axios"

export const HomeAPI = () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/products`)
}

export const getLoginDataAPI = (values) => {
    return axios.post(`${process.env.REACT_APP_ENDPOINT}/auth/login`,values,{
        headers: { 'Content-Type': 'application/json' }
    })
}

export const getCartDataAPI = async () => {
    return axios.get(`${process.env.REACT_APP_ENDPOINT}/carts`,{
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
        },
    }).then((res) => {
        return res
    }).catch((err) => {
        return err
    })
}