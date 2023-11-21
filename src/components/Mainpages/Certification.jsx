import React, { useState } from 'react';
import './MainPage.css';
import { Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Link from '@mui/material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CustomCertificateCard = styled(Card)(({ theme }) => ({
  '&.MuiCard-root': {
    // background: 'linear-gradient(180.2deg, rgb(31 58 80) 80.28%,rgb(9 35 55) 91.98%)',
    background: 'none',
    // background: 'linear-gradient(70deg,#003bfd,#00cebc)',
    width: 260,
    height: 'auto',
    // boxShadow: 'none',
    margin: 12,
    // border: '1px solid #c9e5fb',
    borderRadius: 10,
    // padding: 16,
    // boxShadow: '0 10px 18px rgb(12 87 102 / 25%)',
    boxShadow: '0 0px 3px 0 rgba(94, 146, 168, 0.621)',
    // textAlign: 'center',
    // alignItems: 'center',
    transition: 'all 0.3s ease',
    '&:hover': {
      // background: 'linear-gradient(180.2deg, red 80.28%,rgb(9 35 55) 91.98%)',
      // background: 'linear-gradient(180.2deg,#173045 69.99%,rgb(7 136 188 / 80%) 91.98%)',
      opacity: 1,
      // transition: 'opacity .15s',
      // transform: 'scale(0.9)',
      transform: 'scale(1.02)',
    },
    '& .MuiCardContent-root': {
      padding: '16px 10px',
      textAlign: 'left',
      // marginBottom: 10,
    },
    '& .MuiTypography-h5': {
      // color: '#00c7f6',
      fontSize: 15,
      // textAlign: 'left',
      fontWeight: '600',
    },
    '& .MuiButton-root': {
      // background: 'linear-gradient(180deg,#2dc4e3,#1186a9)',
      // paddingBottom: 10,
      // width: '100%',
      fontSize: 15,
      fontWeight: '500',
      // // border: '1px solid #00c7f6',
      display: 'inlineBlock',
      // // margin: 'auto',
      // borderRadius: 30,
      color: '#00c7f6',
      textTransform: 'capitalize',
      // textAlign: 'left',
      '&:hover': {
        color: '#00c7f6',
        // border: '1px solid #00c7f6',
      },
    },
    // '& .MuiSvgIcon-root': {
    //   color: 'red !important',
    // },
  },
}));

const CertificationView = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialog-paper': {
    height: 'auto',
    maxWidth: 700,
    width: 700,
    display: 'block',
  },
  '& .MuiDialogContent-root': {
    // padding: 10,
    // paddingTop: 10,
    // paddingLeft: 0,
    // paddingRight: 0,
    // paddingBottom: 0,
    borderTop: 0,
    borderBottom: 0,
  },

  '& .MuiTypography-root': {
    marginTop: 6,
    color: '#0f2e66',
    fontSize: 16,
    fontWeight: 'bold',
  },
  '& .MuiSvgIcon-root': {
    color: '#0f2e66',
    marginTop: 2,
    fontSize: 18,
  },
}));

const modelDialogContent = [
  {
    key: 'first',
    title: "Microfrontends with React: A complete Developer's Guide",
    imageUrl: require('../../assets/certificate.jpg'),
  },
  {
    key: 'two',
    title: 'The Ultimate Redux Course 2023 - [LATEST Redux-toolkit]',
    imageUrl: require('../../assets/redux-toolkit-certificate.jpg'),
  },
  {
    key: 'three',
    title: 'Web Development',
    imageUrl: require('../../assets/web-development-certificate.jpeg'),
  },
  {
    key: 'four',
    title: 'Orientatition to Entrepreneurship (PDC02_196)',
    imageUrl: require('../../assets/PTU-PDC--008.jpg'),
  },
];

const Certification = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const handleClickOpen = (item) => {
    setOpen(true);
    switch (item) {
      case 'first':
        setName(item);
        break;
      case 'two':
        setName(item);
        break;
      case 'three':
        setName(item);
        break;
      case 'four':
        setName(item);
        break;
      default:
    }
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [spacing, setSpacing] = React.useState(2);
  return (
    <>
      <div className="certificateCards">
        <CustomCertificateCard style={{}}>
          <div
            style={{
              width: '100%',
              height: 200,
              // background: 'linear-gradient(70deg,#003bfd,#00cebc)',
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
            <Button
              size="small"
              onClick={() => handleClickOpen('two')}
              endIcon={<ArrowForwardIcon />}
            >
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
            <Button
              size="small"
              onClick={() => handleClickOpen('two')}
              endIcon={<ArrowForwardIcon />}
            >
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
            <Button
              size="small"
              onClick={() => handleClickOpen('two')}
              endIcon={<ArrowForwardIcon />}
            >
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

      {/* <CustomCertificateCard sx={{ maxWidth: 345, margin: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={require('../../assets/PTU-PDC--008.jpg')}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Orientatition to Entrepreneurship (PDC02_196)
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Orientation to Entrepreneurship, gaining valuable insights into the fundamentals of
                entrepreneurship, business strategy, innovation and equipped with essential
                knowledge.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => handleClickOpen('four')}>
              View
            </Button>
          </CardActions>
        </CustomCertificateCard> */}
      {/* </div> */}
      {/* {modelDialogContent?.map((item) =>
        item?.key === name ? (
          <>
            <div className="certification">
              <CertificationView
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <Typography variant="h5" style={{ margin: '18px' }}>
                  {item?.title}
                </Typography>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: 'absolute',
                    right: 6,
                    top: 11,
                    fontSize: 108,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
                <Divider style={{ width: '97%', margin: 'auto' }} />
                <DialogContent dividers>
                  <img src={item?.imageUrl} alt="" style={{ width: '100%', height: '100%' }} />
                </DialogContent>
              </CertificationView>
            </div>
          </>
        ) : null,
      )} */}
    </>
  );
};

export default Certification;
