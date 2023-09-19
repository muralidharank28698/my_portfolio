import React, { useState } from 'react';
import './Headerpage.css';
import { Link } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { AllData } from '../../AllData';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const CustomTypographyLink = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    marginLeft: 3,
    fontSize: 15,
    lineHeight: 3.8,
    textTransform: 'capitalize',
    letterSpacing: 1.2,
  },
}));

const Headerpage = () => {
  const [toggleOpen, setToggleOpen] = useState(false);

  const handleToggleIcon = () => {
    setToggleOpen(!toggleOpen);
  };
  const handleClose = () => {
    setToggleOpen(!toggleOpen);
  };

  return (
    <div className="headerContainer">
      <header className="header-fixed">
        <div className="titleLogoContainer">
          <Typography fontSize="12px" className="mailId" variant="h3">
            <Link color="#e3ecf3" underline="none">
              {AllData?.header?.mailId}
            </Link>
            <br />
            {AllData?.header?.phoneNoOnly}
          </Typography>
        </div>
        <div style={{ display: 'flex', lineHeight: '10px' }} className="links">
          <Link href="/">
            <img
              src={require('../../../src/assets/logo.png')}
              alt=""
              style={{ width: '43px', height: '45px', marginRight: 6, marginTop: 2 }}
              className="logoImage"
            />
          </Link>
          <Link underline="none" href="/">
            <div className="menuText">
              <CustomTypographyLink>Home</CustomTypographyLink>
            </div>
          </Link>
          <Link underline="none" href="/skillsExperience">
            <div className="menuText">
              <CustomTypographyLink>Skills</CustomTypographyLink>
            </div>
          </Link>
          <Link underline="none" href="education">
            <div className="menuText">
              <CustomTypographyLink>Education</CustomTypographyLink>
            </div>
          </Link>
          <Link underline="none" href="profession">
            <div className="menuText">
              <CustomTypographyLink>Experience</CustomTypographyLink>
            </div>
          </Link>
          <Link underline="none" href="followme">
            <div className="menuText">
              <CustomTypographyLink>Follow me</CustomTypographyLink>
            </div>
          </Link>
          <Link underline="none" href="about">
            <div className="menuText">
              <CustomTypographyLink>About</CustomTypographyLink>
            </div>
          </Link>
        </div>
        <div className="header-limiter">
          <Typography color="#FFFFFF" fontSize="15px">
            <Link color="#FFFFFF" underline="none">
              {AllData?.header?.mailId}
            </Link>
            <br />
            <span style={{ color: 'rgb(3 225 255)' }}>{AllData?.header?.phoneNO}</span>
          </Typography>
        </div>
        <div className="menuIcon">
          <IconButton aria-label="delete" color="primary" onClick={handleToggleIcon}>
            <MenuIcon style={{ fontSize: 35, color: '#FFFFFF' }} />
          </IconButton>
          <React.Fragment key={0}>
            <Drawer anchor="top" open={toggleOpen} onClose={handleClose}>
              <Box style={{ background: 'rgb(7 10 14)', width: '100%' }} role="presentation">
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText style={{ textAlign: 'center' }}>
                        <Link underline="none" href="/">
                          <Typography variant="h5" className="mobileViewLink">
                            Home
                          </Typography>
                        </Link>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText style={{ textAlign: 'center' }}>
                        <Link underline="none" href="/skillsExperience">
                          <Typography variant="h5" className="mobileViewLink">
                            Skills
                          </Typography>
                        </Link>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText style={{ textAlign: 'center' }}>
                        <Link underline="none" href="education">
                          <Typography variant="h5" className="mobileViewLink">
                            Education
                          </Typography>
                        </Link>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText style={{ textAlign: 'center' }}>
                        <Link underline="none" href="profession">
                          <Typography variant="h5" className="mobileViewLink">
                            Experience
                          </Typography>
                        </Link>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText style={{ textAlign: 'center' }}>
                        <Link underline="none" href="followme">
                          <Typography variant="h5" className="mobileViewLink">
                            Follow me
                          </Typography>
                        </Link>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText style={{ textAlign: 'center' }}>
                        <Link underline="none" href="about">
                          <Typography variant="h5" className="mobileViewLink">
                            About
                          </Typography>
                        </Link>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText style={{ textAlign: 'center' }}>
                        <CloseIcon
                          style={{ color: '#FFFFFF', fontSize: 28 }}
                          onClick={handleClose}
                        />
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </React.Fragment>
        </div>
      </header>
    </div>
  );
};

export default Headerpage;
