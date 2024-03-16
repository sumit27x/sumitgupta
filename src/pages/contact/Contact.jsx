import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import "./../../App.css";
import ContactImage from "./../../assets/robot.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const form = useRef();
  const send = () => {
    toast.success('Successfully Submitted', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  const sendEmail = (e) => {
    e.preventDefault();  
    emailjs
    .sendForm(process.env.REACT_APP_EMAILJS_SERVICE, process.env.REACT_APP_EMAILJS_TEMPLATE,
       form.current,
       process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  e.target.reset();
  };
  return (
    <div className="contact-container">
      <div className=" container">
        <p className="section-subtitle">Let's get in touch</p>
        <h1 className="section-title">Contact us.</h1>
        <div className="contact">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <div className="contact-div">
              <h3>Name</h3>
              <input
                type="text"
                name="from_name"
                className="form-control"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="contact-div">
              <h3>Email</h3>
              <input
                type="email"
                name="from_email"
                className="form-control"
                placeholder="Email Address"
                required
              />
            </div>
            <div className="contact-div">
              <h3>Phone No.</h3>
              <input
                type="tel"
                name="from_number"
                minLength={10}
                maxLength={10}   
                pattern="[0-9]{10}"
                className="form-control"
                placeholder="Contact Number" required
              />
            </div>
            <div className="contact_form-area contact-div">
              <h3>Message</h3>
              <textarea
                type="text"
                name="message"
                placeholder="What's do you Want?"
                className="form-control textarea"
                required
              />
            </div>
            <button className="btn" type="submit" value="Send" onClick={send}>
              Send
            </button>
            <ToastContainer/>
          </form>
          <div  style={{  display: "flex",   alignItems: "center",  justifyContent: "center",}}>
            <img src={ContactImage} alt="" className="contact-image" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;
