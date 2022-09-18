import React, { useState, useContext } from 'react'
import axios from 'axios';

import FormInput from '../FormInput/FormInput';
import Button from '../Button/Button';
import { UserContext } from '../../context/UserContext'

import { SignInContainer, ButtonsContainer } from './SignInForm.styles'

const SignInForm = () => {
    const { setCurrentUser } = useContext(UserContext)
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await axios.post(`/login`, user);
            setCurrentUser(data);
            alert("sign in completed")
            resetFormFields();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <SignInContainer>
            <h2>Already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label="Email"
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

                <ButtonsContainer>
                    <Button type="submit">Sign In</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm;