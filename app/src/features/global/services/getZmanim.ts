import axios from "axios";
import { gqlBody } from "./queryZmanim";
import { ZmanimCitys } from "../interfices/ResponseZmanim";
export const getAllZmanim = async () => {

  const token = localStorage.getItem('x-auth-token');
  const headersList = {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token}` : '',
  };

  const bodyContent = JSON.stringify(gqlBody);

  const reqOptions = {
    url: "http://localhost:3000/graphql",
    method: "POST",
    headers: headersList,
    data: bodyContent,
  }

  try {
    let response = await axios.request(reqOptions);
    const res: ZmanimCitys = response.data.data.allZmanim[0];
    console.log('gggggggggggggggggg', res);

    const { BeerSheva, BoroPark, Jerusalem, London, Tlv, Zefat } = res;
    console.log('Response Data:244', res);
    return { BeerSheva, BoroPark, Jerusalem, London, Tlv, Zefat };
  } catch (error) {
    console.error('Axios Error:', error);
  }
}
