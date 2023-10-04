import React from 'react';
import './index.css';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
// import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import { AllData } from '../../AllData';

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
        <Link href="/" underline="none">
          <Typography variant="body1" className="footerLogoText">
            <span className="myName">muralidharan</span>portfolio
          </Typography>
        </Link>
      </div>
      <div className="footerCenter">
        <CustomTypography>©Copyright 2023.All rights reserved.</CustomTypography>
      </div>
      <div className="footerIcons">
        <div className="icons">
          <Link href={AllData?.followMePage.Urls.linkedIn} target="_blank">
            <LinkedInIcon color="info" fontSize="large" />
          </Link>
          <Link href={AllData?.followMePage.Urls.github} target="_blank">
            <GitHubIcon color="info" fontSize="large" />
          </Link>
          <YouTubeIcon color="info" fontSize="large" />
          <TwitterIcon color="primary" fontSize="large" />
          {/* <FacebookIcon color="info" style={{ fontSize: 24 }} /> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
