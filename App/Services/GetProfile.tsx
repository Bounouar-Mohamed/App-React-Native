import axios from "axios";



export default async function GetProfile(data: any) {


    // const url = 'https://first-server-express.herokuapp.com/profile'
    const url = 'https://server-react-ohxipstsla-od.a.run.app/profile'

    return await axios.get(url, data)
}