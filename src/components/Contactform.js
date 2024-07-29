import React, { useState } from 'react';
import './Contactform.css';
import Box from '@mui/material/Box';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });
      setStatus('SUCCESS');
      form.reset();
    } catch (error) {
      setStatus('ERROR');
    }
  };

  let statusMessage;
  if (status === "SUCCESS") {
    statusMessage = (
      <Box sx={{ bgcolor: 'green', color: 'white', p: 2  }}>
        Thanks for contacting us. If your Email is correct we will reach you soon.
      </Box>
    );
  }
  return (
    <div>
        <h2>Contact Us</h2>
        {statusMessage}
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xpzejeob"
          method="POST"
        >
          <label htmlFor="name">Name</label><br></br>
          <input type="text" id="name" name="name" required /><br></br>
          <label htmlFor="email">Email</label><br></br>
          <input type="email" id="email" name="email" required /><br></br>
          <label htmlFor="message">Message</label><br></br>
          <textarea id="message" name="message" required></textarea><br></br>
          <button type="submit">Send</button>
        </form><br></br>
        {/* {status === 'SUCCESS' && <p>Thanks for contacting us.If your Email is correct we will reach you soon.</p>} */}
        {status === 'ERROR' && <p>Oops! There was an error.</p>}
      </div>
  );
};

export default Contact;