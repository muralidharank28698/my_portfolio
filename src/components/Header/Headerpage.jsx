import React, { useState } from 'react';
import './Headerpage.css';
import { Link } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { AllData } from '../../AllData';
// import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DarkMode from '../DarkMode/DarkMode';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as HLink } from 'react-router-hash-link';
import MainPage from '../Mainpages/MainPage';
import Educationpage from '../Education/Educationpage';
import SkillsExperience from '../SkillsExperience';
import ExperiencePage from '../Experience/ExperiencePage';
import Aboutpage from '../About/Aboutpage';
import FollowMe from '../FollowMe/Followme';
import Footer from '../Footer';
import TopPart from '../TopComponent/TopPart';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Avatar from '@mui/material/Avatar';
import { ReactComponent as MenuIcon } from './MenuIcon.svg';

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
      document.querySelector('active').classList.remove('active');
      navLinksEl.classList.add('active');
    });
  });

  return (
    <div className="headerContainer" id="topSection">
      <div className="leftContainer">
        <div className="profile">
          <img src={require('../../assets/profile.png')} alt="" />
        </div>
        <div>
          <div className="name">
            <Typography className="myName">Muralidharan K</Typography>

            <Link
              href={AllData?.followMePage.Urls.linkedIn}
              target="_blank"
              style={{ display: 'inline-block', width: '50px' }}
            >
              <IconButton>
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Link>
            <Link href={AllData?.followMePage.Urls.github} target="_blank">
              <IconButton>
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Link>
          </div>
        </div>
        <BrowserRouter>
          <div className="menus">
            <HLink to="#topSection" className="activeLink">
              <div className="links">
                <HomeOutlinedIcon fontSize="large" />
                <Typography className="menuName">Home</Typography>
              </div>
            </HLink>
            <HLink to="#SkillsAnsExperienceSection" className="activeLink">
              <div className="links">
                <SettingsSuggestOutlinedIcon fontSize="large" />
                <Typography className="menuName">Skills</Typography>
              </div>
            </HLink>
            <HLink to="#educationSection" className="activeLink">
              <div className="links">
                <SchoolOutlinedIcon fontSize="large" />
                <Typography className="menuName">Education</Typography>
              </div>
            </HLink>
            <HLink to="#professionSection" className="activeLink">
              <div className="links">
                <WorkOutlineOutlinedIcon fontSize="large" />
                <Typography className="menuName">Experience</Typography>
              </div>
            </HLink>
            <HLink to="#followmeSection" className="activeLink">
              <div className="links">
                <LinkOutlinedIcon fontSize="large" />
                <Typography className="menuName">Follow me</Typography>
              </div>
            </HLink>
            <HLink to="#aboutSection" className="activeLink">
              <div className="links">
                <InfoOutlinedIcon fontSize="large" />
                <Typography className="menuName">Contact</Typography>
              </div>
            </HLink>
          </div>
        </BrowserRouter>
        <div className="theme">
          <Typography fontSize="14px" style={{ marginTop: 9, color: '#f57701', fontWeight: 600 }}>
            Theme
          </Typography>
          <div className="themeSwitchBtn">
            <DarkMode />
          </div>
        </div>
        <div className="footer">
          <Typography fontSize="14px" style={{ marginTop: 3 }}>
            &copy; copyright 2023
          </Typography>
          <Typography fontSize="14px" style={{ marginTop: 10 }}>
            designed by <span style={{ color: '#f57701', fontWeight: 600 }}>muralidharan</span>
          </Typography>
        </div>
      </div>
      <div className="rightContainer">
        <div className="headerPart">
          <div className="headerPartContent">
            <IconButton
              aria-label="delete"
              color="primary"
              onClick={handleToggleIcon}
              style={{ width: '40px' }}
            >
              {/* <MenuIcon style={{ fontSize: 35, color: '#FFFFFF' }} /> */}
              <MenuIcon />
            </IconButton>
            <div style={{ display: 'flex' }}>
              <div style={{ marginTop: 10, marginRight: 20 }}>
                <DarkMode />
              </div>
              <div className="headerPartContentAvatar">
                <Link href="/" underline="none">
                  <Avatar
                    variant="rounded"
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'none',
                    }}
                    src={require('../../assets/logoProfile.png')}
                  ></Avatar>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <TopPart />
        <MainPage />
        <SkillsExperience />
        <Educationpage />
        <ExperiencePage />
        <FollowMe />
        <Aboutpage />
        <Footer />
      </div>
      <div className="mobileSideNav">
        <BrowserRouter>
          <Drawer
            anchor="left"
            open={toggleOpen}
            onClose={handleClose}
            style={{ border: 'none', background: 'none !important' }}
          >
            <Box
              style={{
                width: '280px',
                height: '100%',
                background: 'radial-gradient(circle, rgb(1 7 11) 37%, rgb(1 18 27) 100%)',
              }}
              role="presentation"
            >
              <div
                className="name"
                style={{
                  borderBottom: '1px solid #173b56',
                  boxShadow: '0 5px 30px rgba(0, 0, 0, 0.7)',
                  paddingBottom: 10,
                  background: 'radial-gradient(circle, rgb(0 4 4) 37%, rgb(2 11 16) 100%)',
                }}
              >
                <Typography className="myName" style={{ marginTop: 28 }}>
                  Muralidharan K
                </Typography>
                <Link
                  href={AllData?.followMePage.Urls.linkedIn}
                  target="_blank"
                  style={{ display: 'inline-block', width: '50px' }}
                >
                  <IconButton>
                    <LinkedInIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Link>
                <Link href={AllData?.followMePage.Urls.github} target="_blank">
                  <IconButton>
                    <GitHubIcon sx={{ fontSize: 30 }} />
                  </IconButton>
                </Link>
              </div>
              <List style={{ paddingTop: 20, paddingLeft: 20 }}>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText>
                      <HLink to="#topSection" className="activeLink" onClick={handleClose}>
                        <div className="links">
                          <HomeOutlinedIcon fontSize="large" />
                          <Typography className="menuName" style={{ color: '#a9bbcb' }}>
                            Home
                          </Typography>
                        </div>
                      </HLink>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText>
                      <HLink
                        to="#SkillsAnsExperienceSection"
                        className="activeLink"
                        onClick={handleClose}
                      >
                        <div className="links">
                          <SettingsSuggestOutlinedIcon fontSize="large" />
                          <Typography className="menuName" style={{ color: '#a9bbcb' }}>
                            Skills
                          </Typography>
                        </div>
                      </HLink>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText>
                      <HLink to="#educationSection" className="activeLink" onClick={handleClose}>
                        <div className="links">
                          <SchoolOutlinedIcon fontSize="large" />
                          <Typography className="menuName" style={{ color: '#a9bbcb' }}>
                            Education
                          </Typography>
                        </div>
                      </HLink>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText>
                      <HLink to="#professionSection" className="activeLink" onClick={handleClose}>
                        <div className="links">
                          <WorkOutlineOutlinedIcon fontSize="large" />
                          <Typography className="menuName" style={{ color: '#a9bbcb' }}>
                            Experience
                          </Typography>
                        </div>
                      </HLink>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText>
                      <HLink to="#followmeSection" className="activeLink" onClick={handleClose}>
                        <div className="links">
                          <LinkOutlinedIcon fontSize="large" />
                          <Typography className="menuName" style={{ color: '#a9bbcb' }}>
                            Follow me
                          </Typography>
                        </div>
                      </HLink>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemText>
                      <HLink to="#aboutSection" className="activeLink" onClick={handleClose}>
                        <div className="links">
                          <InfoOutlinedIcon fontSize="large" />
                          <Typography className="menuName" style={{ color: '#a9bbcb' }}>
                            Contact
                          </Typography>
                        </div>
                      </HLink>
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </List>
            </Box>
          </Drawer>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Headerpage;
