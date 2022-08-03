import axios from 'axios';



const PostLogin = async (data: any) => {

    // const url = 'https://first-server-express.herokuapp.com/login'
    const url = 'https://server-react-ohxipstsla-od.a.run.app/login'

    return await axios.post(url, data)

}

export default PostLogin;