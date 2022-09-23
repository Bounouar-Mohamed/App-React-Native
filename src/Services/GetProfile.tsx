import axios from "axios";
import Config from "react-native-config";



export default async function GetProfile(data: any) {


    const url = Config.API_URL+'/profile'
    // const url = process.env.DATABASE_URL_HEROKU
    // const url = 'https://server-react-ohxipstsla-od.a.run.app/profile'

    return await axios.get(url, data)

}