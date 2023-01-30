import axios from 'axios';
import baseUrl from '../baseUrl';

export const addCategory = async() => {
    try{
        await axios.post(`${baseUrl}/api/category`);
    } catch(e) {
        console.error(`Add Category: ${e}`);
    }
}

export const registerEmployer = async() => {
    try {
        await axios.post(`${baseUrl}/api/employer`, {employer_details});
    } catch(e) {
        console.error(`RegisterEmployer: ${e}`);
    }
} 