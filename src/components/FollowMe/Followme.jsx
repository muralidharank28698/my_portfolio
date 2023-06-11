import React from 'react';
import './FollowMe.css';
import Menus from '../MenuSide/Menus';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Divider from '@mui/material/Divider';
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from '@mui/material/Link';
import { AllData } from '../../AllData';

const CustomCard = styled(Card)(({ theme }) => ({
  '&.MuiCard-root': {
    marginTop: 20,
    boxShadow:
      'box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px;',
    '& .MuiTypography-root': {
      '&.MuiTypography-body1': {
        color: '#9caabd',
        fontFamily: 'cursive',
      },
    },
    '& .MuiCardActions-root': {
      float: 'right',
      marginBottom: 10,
      marginRight: 10,
    },
    '& .MuiLink-root': {
      color: '#eee',
      fontSize: 12,
      // textTransform: 'capitalize',
      // fontFamily: 'cursive',
    },
  },
}));

export const CustomTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    color: '#0f2e66',
    // borderBottom: '1px solid #eee',
    display: 'inline-block',
    // borderRadius: 7,
    // fontWeight: '500',
    fontWeight: 'bold',
    fontSize: 18,
    letterSpacing: 'normal',
    // fontFamily: 'cursive',
    // marginBottom: 30,
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
    fontSize: 16,
    fontWeight: 'bold',
    color: 'orange',
    fontFamily: 'cursive',
    letterSpacing: 'normal',
  },
}));

const FollowMe = () => {
  return (
    <div className="Container">
      <div className="main_container">
        <CustomTypography variant="h6">{AllData?.followMePage?.followMePageTitle}</CustomTypography>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <CustomCard>
              <CardContent>
                <div className="cardTitle">
                  <CardTitle variant="h6">{AllData?.followMePage?.followMeTitle?.github}</CardTitle>
                  <GitHubIcon color="secondary" fontSize="medium" />
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
          </Grid>
          <Grid item xs={6}>
            <CustomCard>
              <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <CardTitle variant="h6">
                    {AllData?.followMePage?.followMeTitle?.linkedIn}
                  </CardTitle>
                  <LinkedInIcon color="info" fontSize="medium" />
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
          </Grid>
          <Grid item xs={6}>
            <CustomCard>
              <CardContent>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <CardTitle variant="h6">{AllData?.followMePage?.followMeTitle?.naukri}</CardTitle>
                  <img
                    src={require('../../assets/naukri.png')}
                    alt=""
                    style={{ width: '40px', height: '30px' }}
                  />
                </div>
                <CustomDivider variant="fullWidth" />
                <Typography>{AllData?.followMePage?.followMeDescription?.naukriDes}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  variant="contained"
                  endIcon={<ArrowForwardIcon />}
                  color="info"
                >
                  <Link href={AllData?.followMePage?.Urls?.naukri} underline="none" target="_blank">
                    {AllData?.followMePage?.followLinksButtonText}
                  </Link>
                </Button>
              </CardActions>
            </CustomCard>
          </Grid>
        </Grid>
      </div>
      <Menus />
    </div>
  );
};

export default FollowMe;
