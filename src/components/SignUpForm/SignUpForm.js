import React, { useState } from 'react'
import axios from 'axios';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';

import { SignUpContainer, ButtonContainer } from './SignUpForm.styles'


const SignUpForm = () => {
    const [user, setUser] = useState({
        userName: "",
        userPassword: ""
    });

    const resetFormFields = () => {
        setUser({
            userName: "",
            userPassword: ""
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.post(`/register`, user);
            resetFormFields();
            alert("Signup successful!!!")
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    }

    return (
        <SignUpContainer>
            <h2>Don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Username"
                    inputOptions={{
                        type: "text",
                        name: "userName",
                        value: user.userName,
                        onChange: handleChange,
                        required: true
                    }}
                />

                <FormInput
                    label="Password"
                    inputOptions={{
                        type: "password",
                        name: "userPassword",
                        value: user.userPassword,
                        onChange: handleChange,
                        required: true
                    }}
                />

                <ButtonContainer>
                    <Button type="submit">Sign Up</Button>
                </ButtonContainer>
            </form>
        </SignUpContainer>
    )
}

export default SignUpForm;