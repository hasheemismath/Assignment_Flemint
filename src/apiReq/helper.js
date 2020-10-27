import { API } from "../backend";
import axios from 'axios';

export const getData = () => {

    return axios.get(`${API}/emp/getAll`)
        .then(res=>{
            return res.data
        })
        .catch(e=>{
            console.log(e)
        })
};


export const postData =data=>{
    return axios.post(`${API}/emp/addEmp`,data)
        .then(res=>{
            console.log("response",res)
            return res
        })
        .catch(e=>{
            return e.response
        })
}


export const deleteData = id =>{
    return axios.delete(`${API}/emp/delete/${id}`)
        .then(result=>{
            return result
        })
        .catch(e=>{
            return e;
        })
}