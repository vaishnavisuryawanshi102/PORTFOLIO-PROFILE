import React, { useState } from 'react'
import './ContactMe.css'

const ContactMe = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        alert(`Thank you ${name}! Your message has been sent.`)

        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div className="contactSection">

            <h2 className="HeadingSec">Contact Me</h2>

            <form onSubmit={handleSubmit} className="contactForm">

                <div className="formGroup">
                    <label>Name</label>
                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="formGroup">
                    <label>Email</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="formGroup">
                    <label>Message</label>
                    <textarea
                        placeholder="Write your message..."
                        rows="5"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="submitBtn">
                    Send Message
                </button>

            </form>

        </div>
    )
}

export default ContactMe

