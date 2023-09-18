import React from 'react';
import './index.css';
import Headerpage from '../Header/Headerpage';
import { Box, Typography, Divider, CircularProgress } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { AllData } from '../../AllData';
import Paper from '@mui/material/Paper';
import Footer from '../Footer';

const CustomSkillsTypographyHeading = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    textAlign: 'center',
    marginTop: 3,
    marginBottom: 8,
    fontSize: 16,
    color: '#048fd7',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
}));
const LanguageTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    fontSize: 16,
    marginTop: 10,
    color: '#0f2e66',
  },
}));
const CustomSkillsPaper = styled(Paper)(({ theme }) => ({
  '&.MuiPaper-root': {
    background: 'none',
    width: '100%',
    height: 200,
    margin: 10,
    padding: 16,
    boxShadow: 'none',
  },
}));
const CustomCircularProgress = styled(CircularProgress)(({ theme }) => ({
  '&.MuiCircularProgress-root': {
    color: '#f27718',
  },
}));
function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CustomCircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0f2e66',
        }}
      >
        <Typography variant="h6" component="div">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
const SkillsExperience = () => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 4,
    borderRadius: 1,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 1,
      backgroundColor: theme.palette.mode === 'light' && '#c200f7',
    },
  }));

  return (
    <div className="container">
      <Headerpage />
      <div class="skills">
        <Typography variant="h3" style={{ textAlign: 'center', fontWeight: 'bold' }}>
          <span>My</span> Skills
        </Typography>
        <div class="skill-card">
          <div class="card">
            <div className="image">
              <img src={require('../../../src/assets/html.png')} alt="" className="" />
            </div>
            <div style={{ marginTop: 40 }}>
              <Typography
                variant="body1"
                style={{ color: '#707887', textAlign: 'left', fontSize: 13 }}
              >
                Proficient in creating semantic and responsive HTML markup for web development.
              </Typography>
              <div className="technicalSkills">
                <Typography variant="h5" style={{ color: '#707887' }}>
                  HTML5
                </Typography>
                <Typography variant="h5" style={{ color: '#707887' }}>
                  90%
                </Typography>
              </div>
              <BorderLinearProgress variant="determinate" value={90} />
            </div>
          </div>
          <div class="card">
            <div className="image">
              <img src={require('../../../src/assets/css.png')} alt="" className="" />
            </div>
            <div style={{ marginTop: 40 }}>
              <Typography
                variant="body1"
                style={{ color: '#707887', textAlign: 'left', fontSize: 13 }}
              >
                Skilled in CSS3 for designing visually engaging and responsive web interfaces.
              </Typography>
              <div className="technicalSkills">
                <Typography variant="h5" style={{ color: '#707887' }}>
                  CSS3
                </Typography>
                <Typography variant="h5" style={{ color: '#707887' }}>
                  86%
                </Typography>
              </div>
              <BorderLinearProgress variant="determinate" value={86} />
            </div>
          </div>
          <div class="card">
            <div className="image">
              <img src={require('../../../src/assets/js.png')} alt="" className="" />
            </div>
            <div style={{ marginTop: 40 }}>
              <Typography
                variant="body1"
                style={{ color: '#707887', textAlign: 'left', fontSize: 13 }}
              >
                Proficient in JavaScript for developing dynamic and interactive web applications.
              </Typography>
              <div className="technicalSkills">
                <Typography variant="h5" style={{ color: '#707887' }}>
                  JavaScript
                </Typography>
                <Typography variant="h5" style={{ color: '#707887' }}>
                  82%
                </Typography>
              </div>
              <BorderLinearProgress variant="determinate" value={82} />
            </div>
          </div>
          {/* <div class="skill-card"> */}
          <div class="card">
            <div className="image">
              <img src={require('../../../src/assets/react_js.png')} alt="" className="" />
            </div>
            <div style={{ marginTop: 40 }}>
              <Typography
                variant="body1"
                style={{ color: '#707887', textAlign: 'left', fontSize: 13 }}
              >
                Experienced in building modern web applications using React.js for efficient
                front-end development.
              </Typography>
              <div className="technicalSkills">
                <Typography variant="h5" style={{ color: '#707887' }}>
                  React.js
                </Typography>
                <Typography variant="h5" style={{ color: '#707887' }}>
                  78%
                </Typography>
              </div>
              <BorderLinearProgress variant="determinate" value={78} />
            </div>
          </div>
          <div class="card">
            <div className="image">
              <img src={require('../../../src/assets/mui.png')} alt="" className="" />
            </div>
            <div style={{ marginTop: 40 }}>
              <Typography
                variant="body1"
                style={{ color: '#707887', textAlign: 'left', fontSize: 13 }}
              >
                Proficient in creating visually appealing and responsive user interfaces using
                Material-UI for React.
              </Typography>
              <div className="technicalSkills">
                <Typography variant="h5" style={{ color: '#707887' }}>
                  Material UI
                </Typography>
                <Typography variant="h5" style={{ color: '#707887' }}>
                  75%
                </Typography>
              </div>
              <BorderLinearProgress variant="determinate" value={75} />
            </div>
          </div>
          <div class="card">
            <div className="image">
              <img src={require('../../../src/assets/native.png')} alt="" className="" />
            </div>
            <div style={{ marginTop: 40 }}>
              <Typography
                variant="body1"
                style={{ color: '#707887', textAlign: 'left', fontSize: 13 }}
              >
                Intermediate level familiarity with React Native for mobile app development, excited
                to learn and grow.
              </Typography>
              <div className="technicalSkills">
                <Typography variant="h5" style={{ color: '#707887' }}>
                  React native
                </Typography>
                <Typography variant="h5" style={{ color: '#707887' }}>
                  52%
                </Typography>
              </div>
              <BorderLinearProgress variant="determinate" value={52} />
            </div>
          </div>
        </div>

        {/* </div> */}
      </div>
      {/* <div style={{ width: '70%', margin: 'auto' }}> */}
      <div className="languages">
        <div className="languageContent">
          <div className="languageDivPart">
            <Typography variant="body1" className="LanguageName">
              Tamil
            </Typography>
            {/* <Typography variant="body1" className="lanText">
            Proficient in Tamil, capable of fluent communication in both written and spoken forms
          </Typography> */}
            <Box sx={{ width: '80%', margin: 'auto' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '70%', margin: 'auto' }}>
                  <LinearProgress variant="determinate" value={100} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="h5" color="text.secondary">
                    100%
                  </Typography>
                </Box>
              </Box>
            </Box>
          </div>
          <Divider
            orientation="vertical"
            style={{
              margin: 'auto',
              textAlign: 'center',
              // padding: 10,
            }}
            className="separator"
          />
          <div className="languageDivPart">
            <Typography variant="body1" className="LanguageName">
              English
            </Typography>
            {/* <Typography variant="body1" className="lanText">
            Fluent in English, enabling clear and effective communication in various professional
            contexts.
          </Typography> */}
            <Box sx={{ width: '80%', margin: 'auto' }}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '70%', margin: 'auto' }}>
                  <LinearProgress variant="determinate" value={85} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                  <Typography variant="h5" color="text.secondary">
                    85%
                  </Typography>
                </Box>
              </Box>
            </Box>
          </div>
        </div>
      </div>
      {/* <div className="detAndLanguage">
        <CustomSkillsPaper>
          <CustomSkillsTypographyHeading>Personal Details</CustomSkillsTypographyHeading>
          <div className="tableData">
            <table className="table">
              <tr>
                <th>Residence :</th>
                <td>{AllData?.leftSideData?.tableData?.residence}</td>
              </tr>
              <tr>
                <th>City :</th>
                <td>{AllData?.leftSideData?.tableData?.city}</td>
              </tr>
              <tr>
                <th>Age :</th>
                <td>{AllData?.leftSideData?.tableData?.age}</td>
              </tr>
            </table>
          </div>
        </CustomSkillsPaper>
        <Divider orientation="vertical" style={{ borderColor: '#8d9cba' }} />
        <CustomSkillsPaper>
          <CustomSkillsTypographyHeading>Languages Known</CustomSkillsTypographyHeading>
          <Paper style={{ background: 'none', boxShadow: 'none' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '26px' }}>
              <CircularProgressWithLabel value="100" />
              <CircularProgressWithLabel value="90" />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-evenly',
              }}
            >
              <LanguageTypography>{AllData?.leftSideData?.languageKnown?.tamil}</LanguageTypography>
              <LanguageTypography style={{ marginRight: -5 }}>
                {AllData?.leftSideData?.languageKnown?.english}
              </LanguageTypography>
            </Box>
          </Paper>
        </CustomSkillsPaper>
      </div> */}
      {/* </div> */}
      <div style={{ height: 80 }}></div>
      <Footer />
    </div>
  );
};

export default SkillsExperience;
