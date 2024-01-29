import axios from 'axios';
import RegisterInterface from '../types/RegisterInterface';

export const regiter = async (user: RegisterInterface) => {

    const bodyContent = user


    let headersList = {
        "Content-Type": "application/json"
    }

    let reqOptions = {
        url: "http://localhost:3000/users",
        method: "POST",
        headers: headersList,
        data: bodyContent,
    }


    try {
        let response = await axios.request(reqOptions);
        console.log('jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj', response.data);

        return response.data
    } catch (error) {
        console.log(error);
    }
}



