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
import Link from '@mui/material/Link';
import SkillsExperience from '../SkillsExperience';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const CustomCard = styled(Card)(({ theme }) => ({
  '&.MuiCard-root': {
    background: 'none',
    boxShadow: 'none',
    height: '100%',
    // width: '73%',
    margin: 'auto',
    // paddingTop: 100,
    display: 'flex',
    '& .MuiCardContent-root': {
      // width: '88%',
      // margin: 'auto',
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
      // '& .objective': {
      //   color: '#c6cacd',
      //   marginTop: 23,
      //   lineHeight: 1.9,
      //   // marginLeft: 16,
      //   fontSize: 16,
      //   textAlign: 'justify',
      // },
      // '& .role': {
      //   color: '#FFFFFF',
      //   marginTop: 26,
      //   fontSize: 18,
      //   boxShadow: '#c6cacd 0px 1px 0px',
      //   display: 'inline-block',
      //   // marginLeft: 16,
      //   borderRadius: 2,
      // },
    },
    // '& .MuiCardActions-root': {
    //   '& .MuiButton-root': {
    //     // background: '#3b82f5',
    //     marginTop: 12,
    //     marginBottom: 26,
    //     marginLeft: 12,
    //     color: '#FFFFFF',
    //     fontSize: 14,
    //     textTransform: 'capitalize',
    //     border: '1px solid #00a6d5',
    //     // '&:hover': {
    //     //   border: '1px solid orange',
    //     // },
    //   },
    // },
  },
}));

const ExperienceCustomTypographyHeading = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    marginLeft: 20,
    // padding: 3,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00c7f6',
  },
}));
const ExperienceCustomTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    marginLeft: 20,
    marginTop: 6,
    // padding: 3,
    fontSize: 15,
    // color: '#a7afbe',
  },
}));

const MainPage = () => {
  return (
    <div className="MainPageContainer">
      <CustomCard>
        {/* <Box> */}
        <div className="objectiveContent">
          <Typography style={{ fontSize: 12, fontWeight: 600, marginBottom: 16 }}>
            Get to know more
          </Typography>
          <div className="animationTitle">
            <Typography variant="h2" className="topic">
              About me
            </Typography>
          </div>
          <Typography variant='body1' className="objective">{AllData?.certerPart?.objective}</Typography>
          {/* <Typography className="role">{AllData?.certerPart?.role}</Typography> */}
        </div>
        {/* <CardActions>
            <Link href={AllData?.followMePage.Urls.linkedIn} target="_blank">
              <Button size="small" variant="outlined">
                Explore now
              </Button>
            </Link>
          </CardActions> */}
        {/* </Box> */}
      </CustomCard>
      {/* <div className="topContent">
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
                <Link href={AllData?.followMePage.Urls.linkedIn} target="_blank">
                  <Button size="large" variant="outlined" style={{ color: '#ffffff' }}>
                    Explore now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div> */}
      <div className="experienceData">
        <div className="experienceDataContentLeft">
          <img
            src={require('../../assets/aaaa.png')}
            alt=""
            // style={{ width: '90%', height: '90%' }}
          />
        </div>
        <div className="experienceDataContentRight">
          <Typography variant="h2" className="exTitle">
            Discover my experience <br />
            and projects
          </Typography>
          {/* <div className="experienceColumn">
            <div className="experienceRowTop">
              <div className="individualExperience">
                <Typography className='experienceTitle'>{AllData?.certerPart?.reactDeveloper}</Typography>
                <Typography className='experienceSubContent'>
                  {AllData?.certerPart?.experience}
                </Typography>
              </div>
              <div className="individualExperience">
                <Typography className='experienceTitle'>{AllData?.certerPart?.projects}</Typography>
                <Typography className='experienceSubContent'>
                  {AllData?.certerPart?.projectDescription}
                </Typography>
              </div>
            </div>
            <div className="experienceRowBottom">
              <div className="individualExperience">
                <Typography className='experienceTitle'>{AllData?.certerPart?.hackerRank}</Typography>
                <Typography className='experienceSubContent'>
                  {AllData?.certerPart?.hackerRankDes}
                </Typography>
              </div>
              <div className="individualExperience">
                <Typography className='experienceTitle'>{AllData?.certerPart?.deployProjects}</Typography>
                <Typography className='experienceSubContent'>
                  {AllData?.certerPart?.deployProjectsDes}
                </Typography>
              </div>
            </div>
          </div> */}
          <div class="experienceGridContainer">
            <div class="grid-cell-1" className="individualExperience">
              <ExperienceCustomTypographyHeading>
                {AllData?.certerPart?.reactDeveloper}
              </ExperienceCustomTypographyHeading>
              <ExperienceCustomTypography>
                {AllData?.certerPart?.experience}
              </ExperienceCustomTypography>
            </div>
            <div class="grid-cell-2" className="individualExperience">
              <ExperienceCustomTypographyHeading>
                {AllData?.certerPart?.projects}
              </ExperienceCustomTypographyHeading>
              <ExperienceCustomTypography>
                {AllData?.certerPart?.projectDescription}
              </ExperienceCustomTypography>
            </div>
            <div class="grid-cell-3" className="individualExperience">
              <ExperienceCustomTypographyHeading>
                {AllData?.certerPart?.hackerRank}
              </ExperienceCustomTypographyHeading>
              <ExperienceCustomTypography>
                {AllData?.certerPart?.hackerRankDes}
              </ExperienceCustomTypography>
            </div>
            <div class="grid-cell-4" className="individualExperience">
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
      <div className="certification">
        <Typography
          style={{
            fontSize: 12,
            // marginBottom: '3rem',
            padding: '0.87rem 1rem',
            border: '1px solid #1d3b53',
            // background: 'linear-gradient(95.05deg,#3fa3ef 0,#1d3b53 54.06%)',
            display: 'inline-block',
            borderRadius: '6px',
            margin: '1px',
            fontWeight: 600,
          }}
        >
          Browse My Recent
        </Typography>
        <Typography variant="h3" className="title">
          Certification
        </Typography>
        {/* <Divider style={{ width: '78%', margin: 'auto' }} /> */}
        <Certification />
      </div>
      {/* <div style={{ paddingBottom: "-50" }}></div> */}
      {/* <div style={{ height: 100 }}></div>
      <Footer /> */}
    </div>
  );
};

export default MainPage;
