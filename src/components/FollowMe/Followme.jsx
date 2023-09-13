import React from 'react';
import './FollowMe.css';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import { AllData } from '../../AllData';
import Headerpage from '../Header/Headerpage';
import Footer from '../Footer';

const CustomCard = styled(Card)(({ theme }) => ({
  '&.MuiCard-root': {
    marginTop: 16,
    background: 'none',
    paddingTop: 0,
    boxShadow: 'rgba(21,183,255) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
    '& .MuiTypography-root': {
      '&.MuiTypography-body1': {
        color: '#707887',
        fontSize: 16,
        lineHeight: 1.6,
      },
    },
    '& .MuiCardActions-root': {
      float: 'right',
      marginBottom: 10,
      marginRight: 10,
    },
    '& .MuiLink-root': {
      color: '#eee',
      fontSize: 14,
      textTransform: 'capitalize',
    },
  },
}));
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
const CustomDivider = styled(Divider)(({ theme }) => ({
  '&.MuiDivider-root': {
    marginBottom: 18,
    marginTop: 15,
  },
}));
const CardTitle = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'orange',
    letterSpacing: 'normal',
  },
}));

const FollowMe = () => {
  return (
    <div className="Container">
      <Headerpage />
      <div className="main_container">
        <Typography variant="h6" className="followHeading">
          {AllData?.followMePage?.followMePageTitle}
        </Typography>
        <div className="topContainer">
          <div className="linkCard">
            <CustomCard>
              <CardContent>
                <div className="cardTitle">
                  <CardTitle variant="h6">{AllData?.followMePage?.followMeTitle?.github}</CardTitle>
                  <GitHubIcon fontSize="large" />
                </div>
                <CustomDivider variant="fullWidth" className="divider" />
                <Typography>{AllData?.followMePage?.followMeDescription?.githubDes}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  color="info"
                >
                  <Link href={AllData?.followMePage.Urls.github} underline="none" target="_blank">
                    {AllData?.followMePage?.followLinksButtonText}
                  </Link>
                </Button>
              </CardActions>
            </CustomCard>
          </div>
          <div className="linkCard">
            <CustomCard>
              <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <CardTitle variant="h6">
                    {AllData?.followMePage?.followMeTitle?.linkedIn}
                  </CardTitle>
                  <LinkedInIcon fontSize="large" />
                </div>
                <CustomDivider variant="fullWidth" />
                <Typography>{AllData?.followMePage?.followMeDescription?.linkedInDes}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  color="info"
                >
                  <Link
                    href={AllData?.followMePage?.Urls?.linkedIn}
                    underline="none"
                    target="_blank"
                  >
                    {AllData?.followMePage?.followLinksButtonText}
                  </Link>
                </Button>
              </CardActions>
            </CustomCard>
          </div>
        </div>
        <div className="topContainer">
          <div className="linkCard">
            <CustomCard>
              <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <CardTitle variant="h6">{AllData?.followMePage?.followMeTitle?.naukri}</CardTitle>
                  <img
                    src={require('../../assets/naukriwhite.png')}
                    alt=""
                    style={{ width: '34px', height: '23px' }}
                  />
                </div>
                <CustomDivider variant="fullWidth" />
                <Typography>{AllData?.followMePage?.followMeDescription?.naukriDes}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  endIcon={<ArrowForwardIcon color="#eee" />}
                  color="info"
                >
                  <Link href={AllData?.followMePage?.Urls?.naukri} underline="none" target="_blank">
                    {AllData?.followMePage?.followLinksButtonText}
                  </Link>
                </Button>
              </CardActions>
            </CustomCard>
          </div>
        </div>
      </div>
      <div style={{ height: 30 }}></div>
      <Footer />
    </div>
  );
};

export default FollowMe;
