import React from 'react'
import './Support.css';

import { FaPhoneAlt } from 'react-icons/fa'
import { HiMail } from 'react-icons/hi'

const Support = () => {
    return (
        <div className='support-container'>
            <h2 className='title'>Contact us on</h2>
            <div className='row'>
                <FaPhoneAlt className='icon' />
                <h4>+91-7485254174</h4>
            </div>

            <div className='row'>
                <FaPhoneAlt className='icon' />
                <h4>+91-7485254125</h4>
            </div>


            <div className='row'>
                <FaPhoneAlt className='icon' />
                <h4>+91-7485254147</h4>
            </div>

            <div className='row'>
                <HiMail className='icon' />
                <h4>metnext@contact.com</h4>
            </div>

            <div className='row'>
                <HiMail className='icon' />
                <h4>metnext2@contact.com</h4>
            </div>
        </div>
    )
}

export default Support