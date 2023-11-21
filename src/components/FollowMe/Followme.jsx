import React from 'react';
import './FollowMe.css';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import { AllData } from '../../AllData';

export const CustomTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    color: '#0f2e66',
    display: 'inline-block',
    borderRadius: 3,
    fontWeight: 'bold',
    fontSize: 23,
    letterSpacing: 'normal',
    marginLeft: 10,
  },
}));

const FollowMe = () => {
  return (
    <div className="FollowContainer" id="followmeSection">
      <div className="main_container">
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <Typography
            style={{
              fontSize: 12,
              padding: '0.87rem 1rem',
              border: '1px solid #1d3b53',
              display: 'inline-block',
              borderRadius: '6px',
              margin: '1px',
              fontWeight: 600,
            }}
          >
            Get In Touch
          </Typography>
        </div>
        <div className="linkCard">
          <div className="cards">
            <div className="cardTitle">
              <Typography variant="h6" className="connectTitle">
                {AllData?.followMePage?.followMeTitle?.github}
              </Typography>
              <br />
              <Link href={AllData?.followMePage.Urls.github} underline="none" target="_blank">
                <Button
                  size="small"
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  className="connectBtn"
                >
                  {AllData?.followMePage?.followLinksButtonText}
                </Button>
              </Link>
            </div>
            <Divider orientation="vertical" className="separator" />
            <div className="cardTitle">
              <Typography variant="h6" className="connectTitle">
                {AllData?.followMePage?.followMeTitle?.linkedIn}
              </Typography>
              <br />
              <Link href={AllData?.followMePage.Urls.github} underline="none" target="_blank">
                <Button
                  size="small"
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  className="connectBtn"
                >
                  {AllData?.followMePage?.followLinksButtonText}
                </Button>
              </Link>
            </div>
            <Divider orientation="vertical" className="separator" />
            <div className="cardTitle">
              <Typography variant="h6" className="connectTitle">
                {AllData?.followMePage?.followMeTitle?.naukri}
              </Typography>
              <br />
              <Link href={AllData?.followMePage.Urls.github} underline="none" target="_blank">
                <Button
                  size="small"
                  variant="outlined"
                  endIcon={<ArrowForwardIcon />}
                  className="connectBtn"
                >
                  {AllData?.followMePage?.followLinksButtonText}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowMe;
