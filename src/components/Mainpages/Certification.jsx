import React from 'react';
import './MainPage.css';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CustomCertificateCard = styled(Card)(({ theme }) => ({
  '&.MuiCard-root': {
    background: 'none',
    maxWidth: 260,
    height: 'auto',
    margin: 12,
    borderRadius: 10,
    boxShadow: '0 0px 3px 0 rgba(94, 146, 168, 0.621)',
    transition: 'all 0.3s ease',
    '&:hover': {
      opacity: 1,
      transform: 'scale(1.02)',
    },
    '& .MuiCardContent-root': {
      padding: '16px 10px',
      textAlign: 'left',
    },
    '& .MuiTypography-h5': {
      fontSize: 15,
      fontWeight: '600',
    },
    '& .MuiButton-root': {
      fontSize: 15,
      fontWeight: '500',
      display: 'inlineBlock',
      color: '#00c7f6',
      textTransform: 'capitalize',
      '&:hover': {
        color: '#00c7f6',
      },
    },
  },
}));

const Certification = () => {
  return (
    <>
      <div className="certificateCards">
        <CustomCertificateCard style={{}}>
          <div
            style={{
              width: '100%',
              height: 200,
              background: 'linear-gradient(180deg,rgb(48 182 255),rgba(24,52,72,0))',
            }}
          >
            <img
              src={require('../../assets/certificate.jpg')}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                transform: 'rotate(0deg)',
                borderRadius: 0,
                padding: 10,
              }}
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Microfrontends with React: A complete Developer's Guide
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" endIcon={<ArrowForwardIcon />}>
              Explore
            </Button>
          </CardActions>
        </CustomCertificateCard>
        <CustomCertificateCard>
          <div
            style={{
              width: '100%',
              height: 200,
              background: 'linear-gradient(180deg,rgb(48 182 255),rgba(24,52,72,0))',
            }}
          >
            <img
              src={require('../../assets/redux-toolkit-certificate.jpg')}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                transform: 'rotate(0deg)',
                borderRadius: 0,
                padding: 10,
              }}
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              The Ultimate Redux Course 2023 - [LATEST Redux-toolkit]
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" endIcon={<ArrowForwardIcon />}>
              Explore
            </Button>
          </CardActions>
        </CustomCertificateCard>
        <CustomCertificateCard>
          <div
            style={{
              width: '100%',
              height: 200,
              background: 'linear-gradient(180deg,rgb(48 182 255),rgba(24,52,72,0))',
            }}
          >
            <img
              src={require('../../assets/Typescript-certificate.jpg')}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                transform: 'rotate(0deg)',
                borderRadius: 0,
                padding: 10,
              }}
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mastering TypeScript - 2023 Edition
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" endIcon={<ArrowForwardIcon />}>
              Explore
            </Button>
          </CardActions>
        </CustomCertificateCard>
        {/* <CustomCertificateCard>
          <div
            style={{
              width: '100%',
              height: 200,
              background: 'linear-gradient(180deg,#1c3f59,rgba(24,52,72,0))',
            }}
          >
            <img
              src={require('../../assets/web-development-certificate.jpeg')}
              alt=""
              style={{
                width: '100%',
                height: '100%',
                transform: 'rotate(0deg)',
                borderRadius: 0,
                padding: 10,
              }}
            />
          </div>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Web Development (NEURA 2020)
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              onClick={() => handleClickOpen('two')}
              endIcon={<ArrowForwardIcon />}
            >
              Explore
            </Button>
          </CardActions>
        </CustomCertificateCard> */}
      </div>
    </>
  );
};

export default Certification;
