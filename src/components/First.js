import React from 'react'

const First = () => {
  return (
    <div className='first-main'>
        <div className='first-text'>    
            <h1>Get Help. Get Better</h1>
            <p>No matter what's Troubling you. Get the Support you
                    need, right here, right now 
            </p>
            <div className='button-first'>
                <button className='button-chat'>Chat now</button>
                <button className='button-book'>Book Appointment</button>
            </div>
            <ul>
                <li>22 People are currently Seeking guidance </li>
            </ul>
        </div>
        <div className='first-image'>
            <img src='./image/firstpage.png' />
        </div>
    </div>
  )
}

export default First