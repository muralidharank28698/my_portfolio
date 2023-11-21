import React from 'react';
import './Aboutpage.css';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import Avatar from '@mui/material/Avatar';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Aboutpage = () => {
  return (
    <div className="contactContainer" id="aboutSection">
      <div
        style={{
          paddingTop: '3rem',
          textAlign: 'center',
        }}
      >
        <Typography
          style={{
            fontSize: 12,
            textAlign: 'center',
            marginBottom: '6rem',
            padding: '0.87rem 1rem',
            border: '1px solid #1d3b53',
            display: 'inline-block',
            borderRadius: '6px',
            margin: '1px',
            fontWeight: 600,
          }}
        >
          Send us a message
        </Typography>
      </div>

      <div className="contactForm">
        <div className="contactFormLeft">
          <div style={{ textAlign: 'center', marginBottom: 10 }}>
            <div className="contactImg">
              <Avatar
                variant="rounded"
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'none',
                }}
              >
                <EmailIcon fontSize="medium" />
              </Avatar>
            </div>
            <Typography variant="h5">MailId</Typography>
            <Typography variant="body1" className="contactNames">
              muralidharank28698@gmail.com
            </Typography>
          </div>

          <div style={{ textAlign: 'center', marginBottom: 10 }}>
            <div className="contactImg">
              <Avatar
                variant="rounded"
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'none',
                }}
              >
                <CallIcon fontSize="medium" />
              </Avatar>
            </div>
            <Typography variant="h5">Mobile</Typography>
            <Typography variant="body1" className="contactNames">
              +91 8098633412
            </Typography>
          </div>

          <div style={{ textAlign: 'center', marginBottom: 10 }}>
            <div className="contactImg">
              <Avatar
                variant="rounded"
                style={{
                  width: '100%',
                  height: '100%',
                  background: 'none',
                }}
              >
                <LocationOnIcon fontSize="medium" />
              </Avatar>
            </div>
            <Typography variant="h5">Location</Typography>
            <Typography variant="body1" className="contactNames">
              Puducherry
            </Typography>
          </div>
        </div>
        <Divider orientation="vertical" className="separator" />
        <div className="contactFormRight">
          <div class="form">
            <input type="text" id="name" placeholder="Your Name" />
            <input type="email" id="mail" placeholder="Your Email" />
            <textarea
              name="message"
              id="message"
              cols="20"
              rows="5"
              placeholder="Enter Your message"
            ></textarea>
            <div class="button-container">
              <div class="send-button">Send</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
