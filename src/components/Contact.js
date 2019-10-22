import React, {useState} from 'react'
import MAIL_SERVICE from '../services/mail'

function Contact(){
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [notification, setNotification] = useState(undefined)

const onSubmit = async(e)=>{
    e.preventDefault()
    try{
        await MAIL_SERVICE.sendMail({email, name, message})
        setNotification(<div>Your email was sent</div>)
    }catch(e){
        setNotification(<div>There was an error, try on another moment.</div>)
    }
}
    return(
        <div>
            <form onSubmit={onSubmit}>
                {notification}
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={(e)=>{setName(e.target.value)}} value={name}/>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} value={email}/>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"
                  onChange={(e)=>{setMessage(e.target.value)}} value={message}
                  >Message
                  </textarea>
                  <input type="submit" value="Sumbit"/>
            </form>
        </div>
    )
    }

    export default Contact