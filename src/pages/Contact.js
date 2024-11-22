import React from 'react';
import ContactBannerMobile from '../components/ContactBannerMobile.js';
import ContactBanner from '../components/ContactBanner.js';
import ContactForm from '../components/ContactForm.js';
import ContactFooter from '../components/ContactFooter.js';

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