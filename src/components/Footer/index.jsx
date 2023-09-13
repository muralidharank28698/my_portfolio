import React from 'react';
import './index.css';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';

const CustomTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    textAlign: 'center',
    margin: 'auto',
    fontSize: 16,
    color: '#707887',
  },
}));

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="footerLogo">
        <Typography variant="body1" className="footerLogoText">
          <span className="myName">muralidharan</span>portfolio
        </Typography>
      </div>
      <div className="footerCenter">
        <CustomTypography>©Copyright 2023.All rights reserved.</CustomTypography>
      </div>
      <div className="footerIcons">
        <div className="icons">
          <LinkedInIcon color="info" style={{ fontSize: 28 }} />
          <GitHubIcon color="info" style={{ fontSize: 28 }} />
          <YouTubeIcon color="info" style={{ fontSize: 28 }} />
          <FacebookIcon color="info" style={{ fontSize: 28 }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;