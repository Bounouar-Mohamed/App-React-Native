import axios from "axios";



export default async function GetProfile(data: any) {

    const url = 'https://first-server-express.herokuapp.com/profile'

    return await axios.get(url, data)
}