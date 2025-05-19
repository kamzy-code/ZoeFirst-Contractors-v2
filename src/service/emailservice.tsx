// ContactForm.jsx
import React from 'react';
import emailjs from '@emailjs/browser';

const sendEmail = (formData: HTMLFormElement, templateID: string) => {

  return emailjs.sendForm(
    import.meta.env.VITE_EMAILJS_SERVICE_ID as string,
    templateID,
    formData,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string
  )
};

export default sendEmail
