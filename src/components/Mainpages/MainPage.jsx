import React from 'react';
import './MainPage.css';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { AllData } from '../../AllData';
import Headerpage from '../Header/Headerpage';
import Footer from '../Footer';
import Certification from './Certification';
import { Divider } from '@mui/material';

const CustomCard = styled(Card)(({ theme }) => ({
  '&.MuiCard-root': {
    background: 'none',
    boxShadow: 'none',
    height: '100%',
    width: '73%',
    margin: '18px auto',
    display: 'flex',
    '& .MuiCardContent-root': {
      width: '96%',
      // padding: '0 !important',
      // '& .topic': {
      //   color: '#FFFFFF',
      //   fontSize: '7rem',
      //   borderLeft: '3px solid #ffffff',
      //   borderRadius: 6,
      //   padding: 12,
      //   textAlign: 'left',
      //   fontWeight: 'bold',
      //   textShadow: '1px 2px 3px rgb(5, 188, 255)',
      // },
      '& .objective': {
        color: '#c6cacd',
        marginTop: 23,
        lineHeight: 1.7,
        marginLeft: 16,
        fontSize: 16,
      },
      '& .role': {
        color: '#FFFFFF',
        marginTop: 26,
        fontSize: 18,
        boxShadow: '#c6cacd 0px 1px 0px',
        display: 'inline-block',
        marginLeft: 16,
        borderRadius: 2,
      },
    },
    '& .MuiCardActions-root': {
      '& .MuiButton-root': {
        background: '#3b82f5',
        marginTop: 12,
        marginBottom: 26,
        marginLeft: 23,
        color: '#FFFFFF',
        fontSize: 14,
        textTransform: 'capitalize',
      },
    },
  },
}));

const ExperienceCustomTypographyHeading = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    marginLeft: 20,
    padding: 3,
    fontSize: 26,
    fontWeight: 'bold',
    color: 'orange',
  },
}));
const ExperienceCustomTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    marginLeft: 20,
    padding: 3,
    fontSize: 15,
    color: '#a7afbe',
  },
}));

const MainPage = () => {
  return (
    <div className="MainPageContainer">
      <div className="topContainerContent">
        <Headerpage />
        <div className="center_part_top">
          <CustomCard>
            <Box>
              <CardContent>
                <div className="animationTitle">
                  <Typography className="topic">
                    Discovering my amazing
                    <br />
                    Art Space..!
                  </Typography>
                </div>
                <Typography className="objective">{AllData?.certerPart?.objective}</Typography>
                <Typography className="role">{AllData?.certerPart?.role}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="outlined">
                  Explore now
                </Button>
              </CardActions>
            </Box>
          </CustomCard>
        </div>
        <div className="topContent">
          <div className="topContentContainer">
            <div>
              <CardContent>
                <Typography className="topic">
                  Discovering my amazing
                  <br />
                  Art Space..!
                </Typography>
                <Typography className="objective">{AllData?.certerPart?.objective}</Typography>
                <Typography className="role">{AllData?.certerPart?.role}</Typography>
              </CardContent>
              <div className="btn">
                <Button size="large" variant="contained" style={{ color: '#ffffff' }}>
                  Explore now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="experienceData">
        <div className="experienceDataContentLeft">
          <img
            src={require('../../assets/ss-br.png')}
            alt=""
            style={{ width: '80%', height: '100%', margin: '10px auto' }}
          />
        </div>
        <div className="experienceDataContentRight">
          <Typography variant="h2" className="exTitle">
            Discover my experience <br />
            and projects...
          </Typography>
          <div className="experienceColumn">
            <div
              // style={{
              //   // display: 'flex',
              //   // justifyContent: 'space-between',
              //   // marginRight: '8rem',
              // }}
              className="experienceColumnLeft"
            >
              <div className="individualExperience">
                <ExperienceCustomTypographyHeading>
                  {AllData?.certerPart?.reactDeveloper}
                </ExperienceCustomTypographyHeading>
                <ExperienceCustomTypography>
                  {AllData?.certerPart?.experience}
                </ExperienceCustomTypography>
              </div>
              <div className="individualExperience">
                <ExperienceCustomTypographyHeading>
                  {AllData?.certerPart?.projects}
                </ExperienceCustomTypographyHeading>
                <ExperienceCustomTypography>
                  {AllData?.certerPart?.projectDescription}
                </ExperienceCustomTypography>
              </div>
            </div>
            <div
              // style={{
              //   display: 'flex',
              //   justifyContent: 'space-between',
              //   marginRight: '8rem',
              // }}
              className="experienceColumnLeft"
            >
              <div className="individualExperience">
                <ExperienceCustomTypographyHeading>
                  {AllData?.certerPart?.hackerRank}
                </ExperienceCustomTypographyHeading>
                <ExperienceCustomTypography>
                  {AllData?.certerPart?.hackerRankDes}
                </ExperienceCustomTypography>
              </div>
              <div className="individualExperience">
                <ExperienceCustomTypographyHeading>
                  {AllData?.certerPart?.deployProjects}
                </ExperienceCustomTypographyHeading>
                <ExperienceCustomTypography>
                  {AllData?.certerPart?.deployProjectsDes}
                </ExperienceCustomTypography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="certification">
        <Typography variant="h3" className="title">
          Certification
        </Typography>
        {/* <Divider style={{ width: '78%', margin: 'auto' }} /> */}
        <Certification />
      </div>
      <div style={{ height: 100 }}></div>
      <Footer />
    </div>
  );
};

export default MainPage;
