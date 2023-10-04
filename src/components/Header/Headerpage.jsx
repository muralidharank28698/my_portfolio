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
import { NavLink } from 'react-router-dom';

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

  const navLinks = document.querySelectorAll('.activeLink');
  navLinks.forEach((navLinksEl) => {
    navLinksEl.addEventListener('click', () => {
      document.querySelector('.active').classList.remove('active');
      navLinksEl.classList.add('active');
    });
  });
  return (
    <div className="headerContainer">
      <header className="header-fixed">
        <div className="titleLogoContainer">
          <Typography className="mailId" variant="h3" color="rgb(255, 255, 255)">
            {AllData?.header?.mailId}
          </Typography>
          <Typography className="mailId" color="rgb(3 225 255)">
            {AllData?.header?.phoneNoOnly}
          </Typography>
        </div>
        <div style={{ display: 'flex', lineHeight: '10px' }} className="menutext">
          <Link href="/">
            <img
              src={require('../../../src/assets/logo.png')}
              alt=""
              style={{ width: '43px', height: '45px', marginRight: 6, marginTop: 2 }}
              className="logoImage"
            />
          </Link>
          <div className="links">
            <NavLink to="/" className="activeLink">
              <CustomTypographyLink>Home</CustomTypographyLink>
            </NavLink>
          </div>
          <div className="links">
            <NavLink to="/skillsExperience" className="activeLink">
              <CustomTypographyLink>Skills</CustomTypographyLink>
            </NavLink>
          </div>
          <div className="links">
            <NavLink to="/education" className="activeLink">
              <CustomTypographyLink>Education</CustomTypographyLink>
            </NavLink>
          </div>
          <div className="links">
            <NavLink to="/profession" className="activeLink">
              <CustomTypographyLink>Experience</CustomTypographyLink>
            </NavLink>
          </div>
          <div className="links">
            <NavLink to="/followme" className="activeLink">
              <CustomTypographyLink>Follow me</CustomTypographyLink>
            </NavLink>
          </div>
          <div className="links">
            <NavLink to="/about" className="activeLink">
              <CustomTypographyLink>About</CustomTypographyLink>
            </NavLink>
          </div>
        </div>
        <div className="header-limiter">
          <Typography color="#FFFFFF" fontSize="15px">
            {AllData?.header?.mailId}
          </Typography>
          <Typography style={{ color: 'rgb(3 225 255)', fontSize: '15px' }}>
            {AllData?.header?.phoneNO}
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
                        <NavLink to="/" className="activeLink">
                          <Typography variant="h5">Home</Typography>
                        </NavLink>
                        {/* <Link underline="none" href="/">
                          <Typography variant="h5" className="mobileViewLink">
                            Home
                          </Typography>
                        </Link> */}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText style={{ textAlign: 'center' }}>
                        {/* <Link underline="none" href="/skillsExperience">
                          <Typography variant="h5" className="mobileViewLink">
                            Skills
                          </Typography>
                        </Link> */}
                        <NavLink to="/skillsExperience" className="activeLink">
                          <Typography variant="h5">Skills</Typography>
                        </NavLink>
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText style={{ textAlign: 'center' }}>
                        <NavLink to="/education" className="activeLink">
                          <Typography variant="h5">Education</Typography>
                        </NavLink>
                        {/* <Link underline="none" href="education">
                          <Typography variant="h5" className="mobileViewLink">
                            Education
                          </Typography>
                        </Link> */}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText style={{ textAlign: 'center' }}>
                        <NavLink to="/profession" className="activeLink">
                          <Typography variant="h5">Experience</Typography>
                        </NavLink>
                        {/* <Link underline="none" href="profession">
                          <Typography variant="h5" className="mobileViewLink">
                            Experience
                          </Typography>
                        </Link> */}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText style={{ textAlign: 'center' }}>
                        <NavLink to="/followme" className="activeLink">
                          <Typography variant="h5"> Follow me</Typography>
                        </NavLink>
                        {/* <Link underline="none" href="followme">
                          <Typography variant="h5" className="mobileViewLink">
                            Follow me
                          </Typography>
                        </Link> */}
                      </ListItemText>
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemText style={{ textAlign: 'center' }}>
                        <NavLink to="/about" className="activeLink">
                          <Typography variant="h5">About</Typography>
                        </NavLink>
                        {/* <Link underline="none" href="about">
                          <Typography variant="h5" className="mobileViewLink">
                            About
                          </Typography>
                        </Link> */}
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
