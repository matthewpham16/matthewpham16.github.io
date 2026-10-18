import React from 'react';
import '../assets/styles/Contact.scss';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Based in Austin, TX / Sugar Land, TX. Email is the best way to reach me.</p>
          <Button variant="contained" endIcon={<EmailIcon />} href="mailto:mattpham016@gmail.com">
            mattpham016@gmail.com
          </Button>
          <p>Phone: 832-746-6047</p>
          <Button variant="outlined" endIcon={<DescriptionIcon />} component={Link} to="/resume">
            View Resume
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
