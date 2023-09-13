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
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Dialog from '@mui/material/Dialog';

const CustomCertificateCard = styled(Card)(({ theme }) => ({
  '&.MuiCard-root': {
    background: 'none',
    '& .MuiCardMedia-root': {
      objectFit: 'fill',
    },
    '& .MuiButton-root': {
      width: '100%',
      fontSize: 13,
    },
  },
}));

const CertificationView = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialog-paper': {
    maxWidth: 1000,
    height: 500,
  },
  '& .MuiDialogContent-root': {
    padding: 0,
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
    marginTop: 6,
    fontSize: 18,
  },
}));

const Certification = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="certificateCards">
        <CustomCertificateCard sx={{ maxWidth: 345, margin: 2 }}>
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
            <Button size="small" color="primary" onClick={handleClickOpen}>
              View
            </Button>
          </CardActions>
        </CustomCertificateCard>
        <CustomCertificateCard sx={{ maxWidth: 345, margin: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={require('../../assets/dummy.jpg')}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Title: I will add in future
              </Typography>
              <Typography variant="h6" color="text.secondary">
                I have to plan to learn some other courses to improve my professional career in
                udemy platform. Once I complete the course, I will add the certificate here in
                future...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View
            </Button>
          </CardActions>
        </CustomCertificateCard>
        <CustomCertificateCard sx={{ maxWidth: 345, margin: 2 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={require('../../assets/dummy.jpg')}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Title: I will add in future
              </Typography>
              <Typography variant="h6" color="text.secondary">
                I have to plan to learn some other courses in udemy platform. Once I complete the
                course, I will add the certificate here in future...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View
            </Button>
          </CardActions>
        </CustomCertificateCard>
      </div>
      <div className="certification">
        <CertificationView
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle>
            <Typography variant="h4">
              Microfrontends with React: A complete Developer's Guide
            </Typography>
          </DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              fontSize: 108,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent dividers>
            <img
              src={require('../../assets/certificate.jpg')}
              alt=""
              style={{ width: '100%', height: '100%' }}
            />
          </DialogContent>
        </CertificationView>
      </div>
    </>
  );
};

export default Certification;
