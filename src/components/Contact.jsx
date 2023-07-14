import React from 'react'

function Contact() {
  return (
    <div className="contact" id='contact'>
        <main>
            <h1>Contact Us</h1>
            <form>
                <div>
                    <label htmlFor="">Name</label>
                    <input type="text" required/>
                </div>

                <div>
                    <label htmlFor="">Email</label>
                    <input type="email" required placeholder='abc@gmail.com'/>
                </div>

                <div>
                    <label htmlFor="">Message</label>
                    <input type="text" required placeholder='Tell Us About your query...'/>
                </div>
                <button type='submit'>send</button>
            </form>
        </main>
    </div>
  )
}

export default Contact
