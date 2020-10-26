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