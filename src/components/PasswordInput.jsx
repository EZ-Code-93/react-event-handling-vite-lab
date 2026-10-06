// Code PasswordInput Component Here
import React from 'react';
import { useState } from 'react';

function PasswordInput (){
    const [password, setPassword] = useState('');

    function handleChange(event){
        event.preventDefault();
        console.log('Entering password...', event.target.value);
        setPassword(event.target.value);
    }

    return(
        <>
        <input
            type="password"
            value={password}
            onChange={handleChange}
        />
        </>
    )
}

export default PasswordInput;