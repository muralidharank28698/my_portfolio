import React from 'react';
import './ExperiencePage.css';
import Headerpage from '../Header/Headerpage';
import Footer from '../Footer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const ExperiencePage = () => {
  return (
    <div className="container">
      <Headerpage />
      <div className="experienceContainer">
        <Typography variant="h6" className="ExperienceHeading">
          Experience
        </Typography>
        <Accordion expanded={true}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography variant="h4" style={{ color: '#0f2e66', fontSize: 18, fontWeight: 'bold' }}>
              FRONT-END DEVELOPER | FOCUSCRAFT TECH PRIVATE LIMITED, CHENNAI | JULY 2022 - PRESENT
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h5" style={{ marginBottom: 16 }}>
               Developed and maintained websites for clients across various industries, focusing on
              user-centered design.
            </Typography>
            <Typography variant="h5" style={{ marginBottom: 16 }}>
               Utilized HTML, CSS, and JavaScript to create visually appealing and functional web
              interfaces.
            </Typography>
            <Typography variant="h5" style={{ marginBottom: 16 }}>
               Utilized React and Material UI to create dynamic and interactive user interfaces.
            </Typography>
            <Typography variant="h5" style={{ marginBottom: 16 }}>
               Utilized Redux concept for state management, enhancing application scalability and
              maintainability.
            </Typography>
            <Typography variant="h5" style={{ marginBottom: 16 }}>
               Implemented hooks concept to improve the efficiency of functional components and
              reduce code complexity.
            </Typography>
            <Typography variant="h5" style={{ marginBottom: 16 }}>
               Collaborated with designers and clients to gather requirements and translate them
              into engaging user experiences.
            </Typography>
            <Typography variant="h5" style={{ marginBottom: 16 }}>
               Managed version control using Git, facilitating efficient collaboration with team
              members.
            </Typography>
            <Typography variant="h5" style={{ marginBottom: 16 }}>
               Worked in an Agile/Scrum environment, participating in daily stand-up meetings and
              sprint planning.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={true} style={{ marginTop: 40 }}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography variant="h4" style={{ color: '#0f2e66', fontSize: 18, fontWeight: 'bold' }}>
              INTERN | FOCUSCRAFT TECH PRIVATE LIMITED, CHENNAI | NOVEMBER 2021 – JUNE 2022
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h5" style={{ marginBottom: 16 }}>
               During my internship, I gained valuable expertise in web development and key
              technologies in the field. This proficiency empowers me to excel in crafting web
              applications that are both responsive and user-centric.
            </Typography>
            <Typography variant="h5" style={{ marginBottom: 16 }}>
               Learned Typescript with React and Redux by creating the online shopping cart
              application
              <span style={{ color: '#20a8d1' }}>
                (https://github.com/muralidharank28698/ShoppingCartUsingReactReduxTypescript)
              </span>
            </Typography>
            <Typography variant="h5" style={{ marginBottom: 16 }}>
               Learned to create reusable React components
            </Typography>
            <Typography variant="h5" style={{ marginBottom: 16 }}>
               Learned Basics of React Native for cross-platform mobile application development.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="experienceContainer">
        <Typography variant="h6" className="ExperienceHeading">
          Projects
        </Typography>
        <Box
          sx={{
            display: 'flex',
            '& > :not(style)': {
              m: 1,
              width: '50%',
              height: 'maxcontent',
            },
          }}
        >
          <Paper variant="outlined" square>
            <Typography
              variant="h6"
              style={{ margin: 10, color: '#0f2e66', fontSize: 20, fontWeight: 'bold' }}
            >
              Project 1: Online E-commerce Shopping Portal
            </Typography>
            <Typography variant="h5" className="projectsDes">
              In this project, I excelled in a multifaceted role, overseeing UI development,
              seamless API integration, and promptly addressing client-requested modifications.
              Additionally, I demonstrated a keen eye for detail by efficiently resolving bugs and
              ensuring a stable project environment. My contributions underscored my adaptability
              and commitment to delivering high-quality results. This experience has equipped me
              with a versatile skill set, poised to make meaningful contributions to future projects
              and teams.
            </Typography>
          </Paper>
          <Paper variant="outlined" square>
            <Typography
              variant="h6"
              style={{ margin: 10, color: '#0f2e66', fontSize: 20, fontWeight: 'bold' }}
            >
              Project 2: Online E-commerce Shopping Mobile App
            </Typography>
            <Typography variant="h5" className="projectsDes">
              Contributed significantly to a React Native mobile application project, taking a
              hands-on role in multiple facets. Developed and refined the user interface to align
              with client specifications, ensuring an intuitive and visually appealing mobile app.
              Integrated APIs seamlessly to enhance app functionality and user experience. Managed
              and optimized codebase for efficiency, ensuring clean and maintainable code throughout
              the project lifecycle.
            </Typography>
          </Paper>
        </Box>
      </div>

      <div style={{ height: 20 }}></div>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
