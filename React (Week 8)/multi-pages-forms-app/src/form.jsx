import React, {useState} from 'react'

import Navbar from './navbar'


const form = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(email)
        console.log(message)
    }

  return (
    <>
        <Navbar/>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
            <label>Email</label>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <label>Message</label>
            <textarea value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
            <button type='submit'>Submit</button>
        </form>
    </>
  )
}

export default form
