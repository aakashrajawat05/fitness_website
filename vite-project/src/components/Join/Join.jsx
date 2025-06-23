import React, { useRef } from "react";
import "./Join.css";
import emailjs from '@emailjs/browser';
const Join = () => {
    const form = useRef()

     const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_22pijet', 'template_8taurgt', form.current, {
        publicKey: 'AUo_TTuTONT0-MRlO',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="shape-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
         <div>
          <span>YOUR BODY</span>
          <span className="shape-text"> WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email-container" onSubmit={sendEmail}>
            <input type="email" name="user_email" placeholder="Enter your email Address" />
            <button className="btn btn-j">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
