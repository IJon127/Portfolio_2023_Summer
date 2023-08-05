import React, { useRef, useState, useEffect, useCallback } from "react";
import emailjs from "@emailjs/browser";

import "./ContactForm.css";

function ContactForm({
  submitActive,
  setClickedSend,
  setEmailSent,
  setValidName,
  setValidEmail,
  setValidMessage,
}) {
  //email.js---------------
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        process.env.REACT_APP_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  //input validation-------------------------------
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputMessage, setInputMessage] = useState("");
  const [btnType, setBtnType] = useState("button");

  const validateText = (e, setValidValue) => {
    if (e.trim().length !== 0) {
      setValidValue(true);
    } else {
      setValidValue(false);
    }
  };

  const validateEmail = useCallback(
    (e) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (e && e.match(regex)) {
        setValidEmail(true);
      } else {
        setValidEmail(false);
      }
    },
    [setValidEmail]
  );

  useEffect(() => {
    validateText(inputName, setValidName);
  }, [inputName, setValidName]);

  useEffect(() => {
    validateEmail(inputEmail);
  }, [inputEmail, validateEmail]);

  useEffect(() => {
    validateText(inputMessage, setValidMessage);
  }, [inputMessage, setValidMessage]);

  useEffect(() => {
    if (submitActive === true) {
      setBtnType("submit");
    } else {
      setBtnType("button");
    }
  }, [submitActive]);

  const submitHandler = () => {
    setClickedSend(true);
    if (submitActive) {
      setEmailSent(true);
      console.log("sent!");
    }
  };

  return (
    <form className="contact-form" ref={form} onSubmit={sendEmail}>
      <label className="contact-form__label">Name*</label>
      <input
        className="contact-form__input-box"
        type="text"
        name="guest_name"
        onChange={(e) => setInputName(e.target.value)}
      />
      <label className="contact-form__label">Email*</label>
      <input
        className="contact-form__input-box"
        type="email"
        name="guest_email"
        onChange={(e) => setInputEmail(e.target.value)}
      />
      <label className="contact-form__label">Message*</label>
      <textarea
        className="contact-form__input-box contact-form__message"
        name="message"
        onChange={(e) => setInputMessage(e.target.value)}
      />
      <input
        className="contact-form__submit-btn"
        onClick={submitHandler}
        type={btnType}
        value="Send"
      />
    </form>
  );
}

export default ContactForm;
