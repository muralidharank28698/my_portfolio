import React from 'react';
import './ExperiencePage.css';
import Headerpage from '../Header/Headerpage';
import Footer from '../Footer';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Divider from '@mui/material/Divider';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CustomCard = styled(Card)(({ theme }) => ({
  '&.MuiCard-root': {
    // margin: 10,
    borderRadius: 10,
    background: 'rgb(11 11 11)',
    border: '1px solid rgb(55 54 54)',
    '& .MuiCardActions-root': {
      float: 'right',
      marginBottom: 10,
      marginRight: 10,
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
const CustomDivider = styled(Divider)(({ theme }) => ({
  '&.MuiDivider-root': {
    marginBottom: 18,
    marginTop: 15,
    background: '#343535',
  },
}));

const ExperiencePage = () => {
  return (
    <div className="container">
      <Headerpage />
      <div className="experienceContainer">
        <Typography variant="h6" className="ExperienceFirstHeading">
          Experience
        </Typography>
        <Accordion expanded={true}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography variant="h4" className="experienceTitle">
              FRONT-END DEVELOPER | FOCUSCRAFT TECH PRIVATE LIMITED, CHENNAI | JULY 2022 - PRESENT
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h5" className="experiencePoints">
              # Developed and maintained websites for clients across various industries, focusing on
              user-centered design.
            </Typography>
            <Typography variant="h5" className="experiencePoints">
              # Utilized HTML, CSS, and JavaScript to create visually appealing and functional web
              interfaces.
            </Typography>
            <Typography variant="h5" className="experiencePoints">
              # Utilized React and Material UI to create dynamic and interactive user interfaces.
            </Typography>
            <Typography variant="h5" className="experiencePoints">
              # Utilized Redux concept for state management, enhancing application scalability and
              maintainability.
            </Typography>
            <Typography variant="h5" className="experiencePoints">
              # Implemented hooks concept to improve the efficiency of functional components and
              reduce code complexity.
            </Typography>
            <Typography variant="h5" className="experiencePoints">
              # Collaborated with designers and clients to gather requirements and translate them
              into engaging user experiences.
            </Typography>
            <Typography variant="h5" className="experiencePoints">
              # Managed version control using Git, facilitating efficient collaboration with team
              members.
            </Typography>
            <Typography variant="h5" className="experiencePoints">
              # Worked in an Agile/Scrum environment, participating in daily stand-up meetings and
              sprint planning.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion expanded={true} style={{ marginTop: 40 }}>
          <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
            <Typography variant="h4" className="experienceTitle">
              INTERN | FOCUSCRAFT TECH PRIVATE LIMITED, CHENNAI | NOVEMBER 2021 – JUNE 2022
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="h5" className="experiencePoints">
              # During my internship, I gained valuable expertise in web development and key
              technologies in the field. This proficiency empowers me to excel in crafting web
              applications that are both responsive and user-centric.
            </Typography>
            <Typography variant="h5" className="experiencePoints">
              # Learned Typescript with React and Redux by creating the online shopping cart
              application. Click the below link to view{' '}
              <span className="fullLink">
                <Link
                  href={'https://github.com/muralidharank28698/TypescriptShoppingCart'}
                  target="_blank"
                  style={{ fontSize: 14 }}
                >
                  https://github.com/muralidharank28698/TypescriptShoppingCart
                </Link>
              </span>
              <span className="linkName">
                <Link
                  href={'https://github.com/muralidharank28698/TypescriptShoppingCart'}
                  target="_blank"
                >
                  TypescriptShoppingCart
                </Link>
              </span>
            </Typography>
            <Typography variant="h5" className="experiencePoints">
              # Deployed URL Link{' '}
              <span className="">
                <Link
                  href={'https://shopping-cart-using-typescript.vercel.app/'}
                  target="_blank"
                  style={{ fontSize: 14 }}
                >
                  https://shopping-cart-using-typescript.vercel.app/
                </Link>
              </span>
            </Typography>
            <Typography variant="h5" className="experiencePoints">
              # Learned to create reusable React components
            </Typography>
            <Typography variant="h5" className="experiencePoints">
              # Learned Basics of React Native for cross-platform mobile application development.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div className="projectsContainer">
        <div className="experienceContainer">
          <Typography variant="h6" className="ExperienceHeading">
            Projects
          </Typography>
          <div className="projectsContent">
            <CustomCard>
              <CardContent>
                <Typography variant="h6" className="proTitle">
                  Online E-commerce Shopping Portal
                </Typography>
                <CustomDivider variant="fullWidth" />
                <Typography variant="h5" className="projectsDes">
                  In this project, I excelled in a multifaceted role, overseeing UI development,
                  seamless API integration, and promptly addressing client-requested modifications.
                  Additionally, I demonstrated a keen eye for detail by efficiently resolving bugs
                  and ensuring a stable project environment. My contributions underscored my
                  adaptability and commitment to delivering high-quality results. This experience
                  has equipped me with a versatile skill set, poised to make meaningful
                  contributions to future projects and teams.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" variant="outlined" endIcon={<NavigateNextIcon />}>
                  Explore
                </Button>
              </CardActions>
            </CustomCard>
            <CustomCard>
              <CardContent>
                <Typography variant="h6" className="proTitle">
                  Customer Selfcare Mobile App
                </Typography>
                <CustomDivider variant="fullWidth" />
                <Typography variant="h5" className="projectsDes">
                  {/* Contributed significantly to a React Native mobile application project, taking a
                  hands-on role in multiple facets. Developed and refined the user interface to
                  align with client specifications, ensuring an intuitive and visually appealing
                  mobile app. Integrated APIs seamlessly to enhance app functionality and user
                  experience. Managed and optimized codebase for efficiency, ensuring clean and
                  maintainable code throughout the project lifecycle. */}
                  Played a pivotal role in a React Native mobile application project, actively
                  participating in various aspects. Primarily focused on honing and perfecting the
                  user interface to meet the client's exact requirements, guaranteeing a
                  user-friendly and visually captivating mobile app. Integrated APIs to the app's
                  capabilities and improve the overall user experience. Additionally optimizing code
                  for maximum efficiency, thereby maintaining a high standard of clean and
                  sustainable code throughout the entire project journey.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="large" variant="outlined" endIcon={<NavigateNextIcon />}>
                  Explore
                </Button>
              </CardActions>
            </CustomCard>
            {/* <CustomPaper variant="outlined" square>
              <Typography
                variant="h6"
                style={{ margin: 12, color: '#7edea7', fontSize: '3rem', fontWeight: 'bold' }}
              >
                Online E-commerce Shopping Portal
              </Typography>
              <Typography variant="h5" className="projectsDes">
                In this project, I excelled in a multifaceted role, overseeing UI development,
                seamless API integration, and promptly addressing client-requested modifications.
                Additionally, I demonstrated a keen eye for detail by efficiently resolving bugs and
                ensuring a stable project environment. My contributions underscored my adaptability
                and commitment to delivering high-quality results. This experience has equipped me
                with a versatile skill set, poised to make meaningful contributions to future
                projects and teams.
              </Typography>
              <Button size="large" variant="outlined" style={{ color: '#ffffff' }}>
                Explore now
              </Button>
            </CustomPaper> */}
            {/* <CustomPaper variant="outlined" square>
              <Typography
                variant="h6"
                style={{ margin: 12, color: '#7edea7', fontSize: '3rem', fontWeight: 'bold' }}
              >
                Customer Selfcare Mobile App
              </Typography>
              <Typography variant="h5" className="projectsDes">
                Contributed significantly to a React Native mobile application project, taking a
                hands-on role in multiple facets. Developed and refined the user interface to align
                with client specifications, ensuring an intuitive and visually appealing mobile app.
                Integrated APIs seamlessly to enhance app functionality and user experience. Managed
                and optimized codebase for efficiency, ensuring clean and maintainable code
                throughout the project lifecycle.
              </Typography>
              <Button size="large" variant="outlined" style={{ color: '#ffffff' }}>
                Explore now
              </Button>
            </CustomPaper> */}
          </div>
        </div>
      </div>

      <div style={{ height: 120 }}></div>
      <Footer />
    </div>
  );
};

export default ExperiencePage;
