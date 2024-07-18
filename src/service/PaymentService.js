import axios from "axios";

export const initiatePayment = (name, email, amount) =>{
    return axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/payment`,{
        name, email, amount
    })
}