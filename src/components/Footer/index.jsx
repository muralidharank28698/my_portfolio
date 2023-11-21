import React from 'react';
import './index.css';
import { Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import { AllData } from '../../AllData';

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
      <div className="footerIcons">
        <div className="icons">
          <Link href={AllData?.followMePage.Urls.linkedIn} target="_blank">
            <LinkedInIcon color="info" fontSize="large" style={{ fontSize: '2.8rem' }} />
          </Link>
          <Link href={AllData?.followMePage.Urls.github} target="_blank">
            <GitHubIcon color="info" fontSize="large" style={{ fontSize: '2.8rem' }} />
          </Link>
          <YouTubeIcon color="info" fontSize="large" style={{ fontSize: '2.8rem' }} />
          <TwitterIcon color="primary" fontSize="large" style={{ fontSize: '2.8rem' }} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
