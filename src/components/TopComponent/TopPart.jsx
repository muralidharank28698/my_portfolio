import React from 'react';
import './TopPart.css';
import { IconButton, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { AllData } from '../../AllData';
import Link from '@mui/material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Pdf from '../../Document/muralidharan.pdf';

const TopPart = () => {
  return (
    <div className="TopPartContainer">
      <div className="container">
        <div className="profile">
          <img src={require('../../assets/profile.png')} alt="" />
        </div>
        <div className="TopPartContent">
          <Typography className="myTitle">
            Hey there! I am
            <br />
            <span className="name">Muralidharan K</span>
          </Typography>
          <Typography className="role">Frontend Developer</Typography>
          <div className="btn">
            <a href={Pdf} target="-blank">
              <Button
                size="small"
                variant="outlined"
                className="cv button"
                endIcon={<FileDownloadOutlinedIcon fontSize="large" />}
              >
                Download CV
              </Button>
            </a>
            <Button
              size="small"
              variant="outlined"
              className="contact button"
              endIcon={<InfoOutlinedIcon fontSize="large" />}
            >
              Contact Info
            </Button>
          </div>
          <div className="TopPartIcons">
            <Link
              href={AllData?.followMePage.Urls.linkedIn}
              target="_blank"
              style={{ display: 'inline-block', width: '50px' }}
            >
              <IconButton>
                <LinkedInIcon fontSize="large" style={{ fontSize: '2.5rem' }} />
              </IconButton>
            </Link>
            <Link href={AllData?.followMePage.Urls.github} target="_blank">
              <IconButton>
                <GitHubIcon fontSize="large" style={{ fontSize: '2.5rem' }} />
              </IconButton>
            </Link>
          </div>
        </div>
        <div className="bgImage">
          <img src={require('../../assets/background_5.png')} alt="" />
        </div>
      </div>
    </div>
  );
};

export default TopPart;
