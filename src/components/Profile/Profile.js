import { useState } from 'react';

import './Profile.css';



const Profile = () => {
    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setPersonalData({ ...personalData, [name]: value })
    // }

    return (
        <>
            <div className='flex-container'>

                <h1>Personal Details</h1>

                <div className='col-1'>
                    <h4>Title:</h4>
                    <p>Mr.</p>
                </div>
                <div className='col-1'>
                    <h4>First Name:</h4>
                    <p>Shawn</p>
                </div>

                <div className='col-1'>
                    <h4>Middle Name:</h4>
                    <p>Leonard</p>
                </div>

                <div className='col-1'>
                    <h4>Last Name:</h4>
                    <p>Cooper</p>
                </div>

                <div className='col-1'>
                    <h4>Gender:</h4>
                    <p>Male</p>
                </div>

                <div className='col-1'>
                    <h4>Date of Birth:</h4>
                    <p>26-03-1983</p>
                </div>

                <div className='col-1'>
                    <h4>Nationality:</h4>
                    <p>Indian</p>
                </div>

                <div className='col-1'>
                    <h4>Marital Status:</h4>
                    <p>Married</p>
                </div>

                <div className='col-1'>
                    <h4>Qualification:</h4>
                    <p>Post Graduate</p>
                </div>

            </div>
        </>
    )
}

export default Profile