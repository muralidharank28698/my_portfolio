import React, { useState } from 'react';
import './ExperiencePage.css';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

const CustomCard = styled(Card)(({ theme }) => ({
  '&.MuiCard-root': {
    height: '100%',
    width: '100%',
    background: 'none',
    boxShadow: 'none',
    padding: 0,
    borderRadius: 0,
    '& .MuiCardMedia-root': {
      borderRadius: 0,
      transform: 'rotate(0deg)',
      objectFit: 'normal',
      padding: 0,
    },
    '& .MuiButton-root': {
      color: '#7edea7',
      borderRadius: 20,
      border: '1px solid #187542',
      '&:hover': {
        color: '#00cfe8',
        border: '1px solid #00cfe8',
      },
    },
  },
}));

const ExperiencePage = () => {
  const [openLeftModel, setOpenLeftModel] = useState(false);
  const [openRightModel, setOpenRightModel] = useState(false);

  const handleLeftOpenExperience = () => {
    setOpenLeftModel(!openLeftModel);
  };
  const handleOpenRightExperience = () => {
    setOpenRightModel(!openRightModel);
  };

  return (
    <div className="experienceContainer" id="professionSection">
      <div
        style={{
          paddingTop: '3rem',
          paddingBottom: '3rem',
          textAlign: 'center',
        }}
      >
        <Typography
          style={{
            fontSize: 12,
            padding: '0.87rem 1rem',
            border: '1px solid #1d3b53',
            display: 'inline-block',
            borderRadius: '6px',
            margin: '1px',
            fontWeight: 600,
          }}
        >
          Explore My
        </Typography>
        <Typography
          variant="h2"
          style={{
            fontWeight: 600,
            marginTop: '1.6rem',
            fontSize: '2rem',
          }}
        >
          Work Experience
        </Typography>
      </div>
      <div class="workExperienceCards">
        <div class="workExperienceSinglecard">
          <div>
            <DeveloperModeIcon sx={{ fontSize: 60 }} />
            <Typography variant="body1" fontWeight={600} fontSize={18} m={1}>
              Software Developer
            </Typography>
            <Typography variant="body1" m={1} fontSize={12}>
              At Focuscraft Tech Private Limited
            </Typography>
            <Typography variant="body1" m={2} fontSize={12}>
              July 2022 - Nov 2023
            </Typography>
            <Button variant="contained" onClick={handleLeftOpenExperience}>
              {openLeftModel ? 'Read less' : 'Read more'}
            </Button>
          </div>
          {openLeftModel ? (
            <div style={{ padding: '20px 0px' }}>
              <Typography variant="body1" className="content">
                Developed and maintained websites for clients across various industries, focusing on
                user-centered design. Utilized HTML, CSS, and JavaScript to create visually
                appealing and functional web interfaces. Utilized React and Material UI to create
                dynamic and interactive user interfaces. Utilized Redux concept for state
                management, enhancing application scalability and maintainability.
              </Typography>
              <Typography variant="body1" className="content">
                Implemented hooks concept to improve the efficiency of functional components and
                reduce code complexity. Collaborated with designers and clients to gather
                requirements and translate them into engaging user experiences. Managed version
                control using Git, facilitating efficient collaboration with team members. Worked in
                an Agile/Scrum environment, participating in daily stand-up meetings and sprint
                planning.
              </Typography>
            </div>
          ) : null}
        </div>

        <div class="workExperienceSinglecard">
          <div>
            <DeveloperModeIcon sx={{ fontSize: 60 }} />
            <Typography variant="body1" fontWeight={600} fontSize={18} m={1}>
              Intern in Web Development
            </Typography>
            <Typography variant="body1" m={1} fontSize={12}>
              At Focuscraft Tech Private Limited
            </Typography>
            <Typography variant="body1" m={2} fontSize={12}>
              Nov 2021 - June 2022
            </Typography>
            <Button variant="contained" onClick={handleOpenRightExperience}>
              {openRightModel ? 'Read less' : 'Read more'}
            </Button>
          </div>
          {openRightModel ? (
            <div style={{ padding: '20px 0px' }}>
              <Typography variant="body1" className="content">
                During my internship, I gained valuable expertise in web development and key
                technologies in the field. This proficiency empowers me to excel in crafting web
                applications that are both responsive and user-centric. Learned Typescript with
                React and Redux by creating the online shopping cart application.
              </Typography>
              <Typography variant="body1" className="content">
                Learned to create reusable React components.Learned Basics of React Native for
                cross-platform mobile application development.
              </Typography>
            </div>
          ) : null}
        </div>
      </div>
      <div
        style={{
          paddingTop: '5rem',
          paddingBottom: '10rem',
          textAlign: 'center',
        }}
      >
        <Typography
          style={{
            fontSize: 12,
            padding: '0.87rem 1rem',
            border: '1px solid #1d3b53',
            display: 'inline-block',
            borderRadius: '6px',
            margin: '1px',
            fontWeight: 600,
          }}
        >
          Explore My
        </Typography>
        <Typography
          variant="h2"
          style={{
            fontWeight: 600,
            marginTop: '1.6rem',
            fontSize: '2rem',
          }}
        >
          Project Works
        </Typography>
      </div>
      <div className="projectCards_1">
        <div className="leftPart">
          <div className="topPart">
            <CustomCard sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={require('../../assets/project1image.png')}
              />
            </CustomCard>
          </div>
          <div className="bottomPart">
            <Typography variant="h5" className="title">
              Online E-commerce Shopping Portal
            </Typography>
            <Button size="small" className="btn">
              Learn More
            </Button>
          </div>
        </div>
        <div className="rightPart">
          <Typography variant="h5" className="title">
            Online E-commerce Shopping Portal
          </Typography>
          <Typography variant="h5" className="title">
            My roles and responsibilities
          </Typography>
          <br />
          <Typography variant="body1" className="content">
            In this project, I excelled in a multifaceted role, overseeing UI development, seamless
            API integration, and promptly addressing client-requested modifications. Additionally, I
            demonstrated a keen eye for detail by efficiently resolving bugs and ensuring a stable
            project environment.
          </Typography>
          <Typography variant="body1" className="content">
            This experience has equipped me with a versatile skill set, poised to make meaningful
            contributions to future projects and teams.
          </Typography>
        </div>
      </div>
      <div className="projectCards_1 projectCards_2">
        <div className="leftPart">
          <div className="topPart">
            <CustomCard sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={require('../../assets/project2image.png')}
              />
            </CustomCard>
          </div>
          <div className="bottomPart">
            <Typography variant="h5" className="title">
              Customer Selfcare Mobile App
            </Typography>
            <Button size="small" className="btn">
              Learn More
            </Button>
          </div>
        </div>
        <div className="rightPart">
          <Typography variant="h5" className="title">
            Customer Selfcare Mobile App
          </Typography>
          <Typography variant="h5" className="title">
            My roles and responsibilities
          </Typography>
          <br />
          <Typography variant="body1" className="content">
            Played a pivotal role in a React Native mobile application project, actively
            participating in various aspects. Primarily focused on honing and perfecting the user
            interface to meet the client's exact requirements, guaranteeing a user-friendly and
            visually captivating mobile app.
          </Typography>
          <Typography variant="body1" className="content">
            Integrated APIs to the app's capabilities and improve the overall user experience.
            Additionally optimizing code for maximum efficiency
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
