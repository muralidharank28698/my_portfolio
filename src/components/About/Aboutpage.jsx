import React from 'react';
import './Aboutpage.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Divider } from '@mui/material';
import Link from '@mui/material/Link';
import { AllData } from '../../AllData';
import Headerpage from '../Header/Headerpage';
import Footer from '../Footer';

const CustomCard = styled(Card)(({ theme }) => ({
  '&.MuiPaper-root': {
    boxShadow: 'none',
    margin: 'auto',
    textAlign: 'center',
    '& .MuiTypography-root': {
      color: '#707887',
      fontSize: 16,
    },
  },
  '& .MuiCardHeader-root': {
    paddingTop: 28,
  },
}));

const Aboutpage = () => {
  return (
    <div className="container">
      <Headerpage />
      <div className="aboutContainer">
        <div className="wrapper">
          <div className="wrapperImage">
            <img src={require('../../assets/006.png')} alt="" />
          </div>
          <CustomCard>
            <div>
              <Typography
                variant="h2"
                style={{ textAlign: 'center', color: '#0f2e66', fontSize: '5rem' }}
              >
                Wow, a whole page just about me...!
              </Typography>
              <CardHeader title="About me" subheader="June 28, 1998" />
              <Typography>Age : 25</Typography>
              <CardActions>
                <Typography variant="body1">
                  Welcome to the "About" page of my portfolio, where I invite you to learn more
                  about my professional journey. With a focus on a conversational tone, I delve into
                  my background, encompassing my skills, accomplishments, and experiences. This
                  section provides a glimpse into the narrative of my career, creating a connection
                  with visitors seeking to understand my unique story in the world of software
                  development.
                </Typography>
              </CardActions>
              <Divider style={{ width: '28%', margin: 'auto', borderColor: '#888f99' }} />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  No 89, Marriyamman Kovil street, Monnaiyampet,
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Keelputhupet Post,
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Marrakkanam Taluk, Villupuram Dt...
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Pincode: 605014
                </Typography>
              </CardContent>
              <div className="aboutIcons">
                <Link href={AllData?.followMePage?.Urls?.linkedIn} target="_blank">
                  <LinkedInIcon color="primary" fontSize="large" />
                </Link>
                <Link href={AllData?.followMePage.Urls.github} target="_blank">
                  <GitHubIcon fontSize="large" color="primary" />
                </Link>
                <FacebookIcon color="primary" fontSize="large" />
                <TwitterIcon color="primary" fontSize="large" />
              </div>
            </div>
          </CustomCard>
        </div>
      </div>
      <div style={{ height: 60 }}></div>
      <Footer />
    </div>
  );
};

export default Aboutpage;
