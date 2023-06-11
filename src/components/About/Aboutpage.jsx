import React from 'react';
import Menus from '../MenuSide/Menus';
import './Aboutpage.css';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { CustomTypography } from '../FollowMe/Followme';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const CustomCard = styled(Card)(({ theme }) => ({
  '&.MuiPaper-root': {
    // boxShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px',
    // boxShadow: 'none',
    // width: '100%',
    margin: '10px auto',
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
  },
  '& .MuiCardHeader-root': {
    paddingTop: 80,
  },
}));

const Aboutpage = () => {
  return (
    <div className="container">
      <div className="aboutContainer">
        <Typography variant="h4" color="text.secondary" style={{ textAlign: 'center' }}>
          Wow, a whole page just about me...!
        </Typography>

        <div style={{ width: '100%', textAlign: 'center' }}>
          <CustomCard>
            <div>
              <img
                src={require('../../assets/about.jpg')}
                alt=""
                style={{ width: '360px', height: '396px' }}
              />
            </div>
            <div>
              <CardHeader
                title="About me"
                subheader="June 28, 1998"
                style={{
                  textAlign: 'center',
                  color: '#0f2e66',
                  fontWeight: 'bold',
                  fontSize: 18,
                  letterSpacing: 'normal',
                }}
              />
              <CardActions
                style={{
                  textAlign: 'center',
                  color: '#0f2e66',
                  fontSize: 16,
                }}
              >
                <Typography variant="body1" color="text.secondary">
                  An "about me" section is the introductory segment of your resume. It briefly
                  explains your professional background, skills and accomplishments. This section is
                  typically between three and four lines of text and is like a resume summary but
                  has a more conversational tone.
                </Typography>
              </CardActions>
              <CardContent style={{ textAlign: 'center' }}>
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
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '26%',
                  margin: 'auto',
                }}
              >
                <LinkedInIcon color="primary" fontSize="medium" />
                <GitHubIcon fontSize="medium" />
                {/* <YouTubeIcon color="error" fontSize="medium" /> */}
                <FacebookIcon color="primary" fontSize="medium" />
                <TwitterIcon color="primary" fontSize="medium" />
              </div>
            </div>
          </CustomCard>
        </div>
      </div>
      <Menus />
    </div>
  );
};

export default Aboutpage;
