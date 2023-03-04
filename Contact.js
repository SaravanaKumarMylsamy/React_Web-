import React from 'react'
import PizzaLeft from '../images/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contact(){
    return(
        <div className='contact'>
           <div id='leftside' style={{backgroundImage:`url(${PizzaLeft})`}}>
           </div>
           <div id="rightside">
            <h1>Contact us</h1>
            <form id="contact-form" method='POST'>
             <label htmlFor='name'>Full Name</label>
             <input name="name" placeholder='Enter full name...' type="text"/>
             <label htmlFor='email'>Email</label>
             <input name="email" placeholder='email...' type="email"/>
             <label htmlFor='Message'>Message</label>
             <textarea rows="6" placeholder='Enter message....'></textarea>
             <button type='submit'>Send Message</button>
            </form>
           </div>
        </div>
    )
}
export default Contact