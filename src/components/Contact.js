import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


// import { useState, useRef } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';
// import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();


  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Enviar');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const sendEmail = (e) => {

    const apiUrl = process.env.REACT_APP_API_URL
    console.log(apiUrl)

    const service = process.env.REACT_APP_SERVICE_ID;
    const template = process.env.REACT_APP_TEMPLATE_ID;
    const key = process.env.REACT_APP_PUBLIC_KEY;

    // const service = process.env.YOUR_SERVICE_ID;
    // const key = process.env.YOUR_PUBLIC_KEY;
    // const template = process.env.YOUR_TEMPLATE_ID;

    e.preventDefault();
    setButtonText("Enviando...");

    emailjs
      .sendForm(service, template, form.current, { publicKey: key })
      .then(
        () => {
          setButtonText("Enviar");
          setStatus({ success: true, message: 'Mensagem enviada com sucesso!' });
          setFormDetails(formInitialDetails);
        },
        (error) => {
          setButtonText("Enviar");
          setStatus({ success: false, message: 'Falha ao enviar. Tente novamente mais tarde.' });
          console.log('FAILED...', error.text);
        }
      );
  };

  // export const ContactUs = () => {
  //   const form = useRef();

  //   const service = process.env.YOUR_SERVICE_ID;
  //   const key = process.env.YOUR_PUBLIC_KEY;
  //   const template = process.env.YOUR_TEMPLATE_ID;

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs
  //     .sendForm(
  //       service,
  //       template,
  //       form.current,
  //       {
  //         publicKey: key,
  //       }
  //     )
  //     .then(
  //       () => {
  //         console.log('SUCCESS!');
  //       },
  //       (error) => {
  //         console.log('FAILED...', error.text);
  //       }
  //     );
  //   }


  // };


  // export const Contact = () => {
  //   const formInitialDetails = {
  //     firstName: '',
  //     lastName: '',
  //     email: '',
  //     phone: '',
  //     message: ''
  //   }
  //   const [formDetails, setFormDetails] = useState(formInitialDetails);
  //   const [buttonText, setButtonText] = useState('Enviar');
  //   const [status, setStatus] = useState({});

  //   const onFormUpdate = (category, value) => {
  //     setFormDetails({
  //       ...formDetails,
  //       [category]: value
  //     })
  //   }

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText("Send");
  //   let result = await response.json();
  //   setFormDetails(formInitialDetails);
  //   if (result.code == 200) {
  //     setStatus({ succes: true, message: 'Message sent successfully'});
  //   } else {
  //     setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
  //   }
  // };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Realize seu orçamento</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input name="firstname" type="text" value={formDetails.firstName} placeholder="Primeiro Nome" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input name="lastname" type="text" value={formDetails.lastName} placeholder="Ultimo Nome" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input name="email" type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input name="phone" type="tel" value={formDetails.phone} placeholder="Telefone" onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea name="message" rows="6" value={formDetails.message} placeholder="Mensagem" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button name="message" type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
