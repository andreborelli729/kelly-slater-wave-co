import React from 'react';
import ContactBannerMobile from '../components/contactPage/ContactBannerMobile.js';
import ContactBanner from '../components/contactPage/ContactBanner.js';
import ContactForm from '../components/contactPage/ContactForm.js';
import ContactFooter from '../components/contactPage/ContactFooter.js';

function Contact(){
    return(
        <>
        <ContactBannerMobile/>
        <ContactBanner/>
        <ContactForm/>
        <ContactFooter/>
        </>
    );
}

export default Contact;