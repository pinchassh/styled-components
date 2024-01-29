import axios from 'axios';

export const login = async (user: string) => {


    const headersList = {
        "Content-Type": "application/json"
    }

    const bodyContent = user

    const reqOptions = {
        url: "http://localhost:3000/users/login",
        method: "POST",
        headers: headersList,
        data: bodyContent,
    }

    try {
        const response = await axios.request(reqOptions);


        console.log('gggggggggggggggghhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh', response.data);

        return response.data
    } catch (error) {
        console.log(error);
    }
}
