import React, { useState } from 'react';
import './MainPage.css';
import { Typography } from '@mui/material';
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

const CustomCertificateCard = styled(Card)(({ theme }) => ({
  '&.MuiCard-root': {
    background: 'none',
    maxWidth: 308,
    boxShadow: 'none',
    border: '1px solid #d7dddc',
    '& .MuiCardMedia-root': {
      objectFit: 'fill',
    },
    '& .MuiTypography-h5': {
      color: '#0f2e66',
      fontSize: 18,
    },
    '& .MuiTypography-h6': {
      color: '#707887',
      fontSize: 12,
    },
    '& .MuiButton-root': {
      width: '100%',
      fontSize: 12,
      fontWeight: 'bold',
    },
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
    padding: 10,
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
    title: 'Web Development',
    imageUrl: require('../../assets/web-development-certificate.jpeg'),
  },
  {
    key: 'three',
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
      default:
    }
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="certificateCards">
        <CustomCertificateCard sx={{ maxWidth: 345, margin: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={require('../../assets/certificate.jpg')}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Microfrontends with React: A complete Developer's Guide
              </Typography>
              <Typography variant="h6" color="text.secondary">
                Basic things learned and utilizing Microfrontends with React to construct modular
                web applications for improved scalability and maintainability.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => handleClickOpen('first')}>
              View
            </Button>
          </CardActions>
        </CustomCertificateCard>
        <CustomCertificateCard sx={{ maxWidth: 345, margin: 3 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={require('../../assets/web-development-certificate.jpeg')}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Web Development (NEURA 2020)
              </Typography>
              <Typography variant="h6" color="text.secondary">
                In 2020, I secured first place in my college's Neura web development competition.
                This win showcases my strong skills and commitment in crafting web solutions,
                marking a significant milestone in my journey as a web developer.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => handleClickOpen('two')}>
              View
            </Button>
          </CardActions>
        </CustomCertificateCard>
        <CustomCertificateCard sx={{ maxWidth: 345, margin: 3 }}>
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
                {/* Learn the basics of entrepreneurship with PDC02_196. Gain essential skills and
                knowledge to kickstart your business journey and equipped with essential knowledge. */}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={() => handleClickOpen('three')}>
              View
            </Button>
          </CardActions>
        </CustomCertificateCard>
      </div>
      {modelDialogContent?.map((item) =>
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
                <Divider style={{ width: '95%', margin: 'auto' }} />
                <DialogContent dividers>
                  <img src={item?.imageUrl} alt="" style={{ width: '100%', height: '100%' }} />
                </DialogContent>
              </CertificationView>
            </div>
          </>
        ) : null,
      )}
    </>
  );
};

export default Certification;
