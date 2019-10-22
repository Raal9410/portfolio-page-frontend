import axios from 'axios'
const baseURL = process.env.NODE_ENV === 'production' ? '' : 'http://localhost:3001/api/'

const SERVICE = axios.create({baseURL})

const MAIL_SERVICE = {
    sendMail: (data) =>{
     return SERVICE.post('mail', data)
    }
}

export default MAIL_SERVICE