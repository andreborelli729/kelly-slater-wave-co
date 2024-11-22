import { useState, React } from "react";
import '../../css/contactForm.css';

function ContactForm(){
    const[firstName, setFirstName] = useState('');
    const[lastName,setLastName] = useState('');
    const[company, setCompany] = useState('');
    const[website,setWebsite] = useState('');
    const[email,setEmail]= useState('');
    const[phone,setPhone]= useState('');
    const[message,setMessage]= useState('');


    
    return(
<section className="contactForm">
    <h2 className="contactFormTitle">Developer
    Inquiry</h2>
    <p className="contactFormParagraph">We work with qualified development partners in the construction and operation of surfing experiences around the world. If you are interested in learning more about our products and services, please fill out the following form.
    </p>
        <form className="contactFormForm">
    <div className="contactFormArea">
    <input
          type="text"
          className='contactFormInput1'
          placeholder="First Name"
          name='firstName'
          id='firstName'
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}/>

<input
          type="text"
          className='contactFormInput2'
          placeholder="Last Name"
          name='lastName'
          id='lastName'
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}/>

<input
          type="text"
          className='contactFormInput3'
          placeholder="Company"
          name='company'
          id='company'
          value={company}
          onChange={(e) => {
            setCompany(e.target.value);
          }}/>

<input
          type="text"
          className='contactFormInput4'
          placeholder="Company Website"
          name='website'
          id='website'
          value={website}
          onChange={(e) => {
            setWebsite(e.target.value);
          }}/>

<input
          type="email"
          className='contactFormInput5'
          placeholder="Email"
          name='email'
          id='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}/>

<input
          type="phone"
          className='contactFormInput6'
          placeholder="Phone"
          name='phone'
          id='phone'
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}/>


    </div>

    <input
          type="text"
          className='contactFormInput7'
          placeholder="Additional Information about the project"
          name='message'
          id='message'
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}/>
        <button className="contactFormBtn">Enviar</button>
    </form>
</section>

    );
}


export default ContactForm;