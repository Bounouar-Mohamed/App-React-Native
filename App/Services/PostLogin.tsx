import axios from 'axios';
import Config from "react-native-config";



const PostLogin = async (data: any) => {
    
    const url = Config.API_URL+'/login'

    // const url = 'https://first-server-express.herokuapp.com/login'
    // const url = 'https://server-react-ohxipstsla-od.a.run.app/login'

    return await axios.post(url, data)

}

export default PostLogin;