import React, { useState } from 'react';
import { BrowserRouter as Router, Route, useHistory} from 'react-router-dom';
import axios from 'axios';

const initialValue = {
    username: '',
    password: ''
}

function Login() {
    const [value, setValue] = useState(initialValue)
    const {push} = useHistory()

    const handleChange = (evt) => {
        const {value, id} = evt.target
        console.log(value)
        setValue({
            ...value,
            [id]: value
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        axios.post('http://localhost:9000/api/login', value)
            .then(res => {
                // debugger
                localStorage.setItem('token', res.data.token)
                push('/friends')
            })
            .catch(err => {
                console.error(err.response.data.error)
                // debugger
            })
    }

    return(
        <form className = 'form' onSubmit={handleSubmit}>
            <h2> LOGIN </h2>
            <label htmlFor='username'> Username </label>
            <input 
            className = 'input'
            type = 'text'
            id = 'name' 
            onChange = {handleChange}
            value = {value.username}
            />
            <label htmlFor='password'> Password </label>
            <input
            className = 'input'
            type = 'text'
            id = 'name'
            onChange = {handleChange}
            value = {value.password}
            />
            <button className = 'button'> SUBMIT </button>
      </form>
    )
}

export default Login;