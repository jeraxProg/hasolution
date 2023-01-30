import axios from 'axios';
import baseUrl from '../baseUrl';


export const searchEmployers = async(details) => {
    try {
        const {keyword} = details;
        const res = await axios.get(`${baseUrl}/api/employer/employer-list?keyword=${keyword || ''}`)
        return res.data;
    } catch(error) {
        if(error.response.status === 404) {
            return {response: {data: 'Invalid. 404'}};
        }
        else return error;
    }
}