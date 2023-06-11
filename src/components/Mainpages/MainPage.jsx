import React from 'react';
import './MainPage.css';
import { Box, Typography, Avatar, Divider, CircularProgress } from '@mui/material';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import { AllData } from '../../AllData';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Menus from '../MenuSide/Menus';

import { CustomTypography } from '../FollowMe/Followme';

const TechnicalSkillData = [
  {
    id: 1,
    SkillName: 'HTML',
    percentage: 94,
  },
  {
    id: 2,
    SkillName: 'CSS',
    percentage: 82,
  },
  {
    id: 3,
    SkillName: 'Javascript',
    percentage: 78,
  },
  {
    id: 4,
    SkillName: 'React',
    percentage: 72,
  },
  {
    id: 5,
    SkillName: 'Material UI',
    percentage: 78,
  },
  {
    id: 6,
    SkillName: 'React Native',
    percentage: 52,
  },
];

const ExperienceCustomTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    color: '#535659',
    margin: '10px auto',
    padding: 3,
    width: '280px',
    fontSize: 16,
    borderRadius: 2,
    textAlign: 'center',
    // boxShadow: 'rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
    // background: '#800080',
    // border: '1px solid #1694f5',
    fontFamily: 'cursive',
    // boxShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px',
    // boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
    boxShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px',
  },
}));

const LeftTypographyHeading = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    textAlign: 'center',
    marginTop: 28,
    fontSize: 12,
    padding: 4,
    background: '#ff795d',
    borderRadius: 6,
    color: 'white',
    textTransform: 'uppercase',
  },
}));
const NameTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    fontSize: 16,
    textAlign: 'center',
    color: '#FF7F50',
    fontWeight: 'bold',
  },
}));
const LanguageTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    fontSize: 13,
    marginTop: 10,
    // color: '#9573bf',
    color: '#535659',
    fontFamily: 'cursive',
  },
}));
const ContentTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    color: '#535659',
    marginTop: 8,
    lineHeight: 1.4,
    padding: 8,
    textAlign: 'justify',
    fontSize: 16,
    fontFamily: 'cursive',
    // fontFamily: 'Roboto,Helvetica,Arial',
  },
}));

const CustomDivider = styled(Divider)(({ theme }) => ({
  '&.MuiDivider-root': {
    width: '80%',
    margin: '16px auto',
  },
}));

const CustomCircularProgress = styled(CircularProgress)(({ theme }) => ({
  '&.MuiCircularProgress-root': {
    color: '#b46cf0',
  },
}));

const CustomCard = styled(Card)(({ theme }) => ({
  '&.MuiCard-root': {
    // boxShadow: 'rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px',
    // boxShadow: 'none',
    boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
    height: '100%',
    width: '96%',
    margin: 'auto',
    display: 'flex',
    '& .MuiCardContent-root': {
      // background: 'red',
      width: '90%',
      // padding: '30px',
      '& .topic': {
        color: '#9e05eb',
        fontSize: 24,
        borderLeft: '3px solid #f7b202',
        borderRadius: 10,
        padding: 12,
        textAlign: 'left',
        // marginLeft: 6,
      },
      '& .objective': {
        color: '#535659',
        marginTop: 23,
        lineHeight: 1.4,
        marginLeft: 8,
      },
      '& .role': {
        color: '#535659',
        marginTop: 23,
        fontSize: 16,
        boxShadow: 'rgba(17, 17, 26, 0.1) 0px 1px 0px',
        display: 'inline-block',
        marginLeft: 8,
      },
    },
    // '& .box': {
    //   width: '73%',
    // },
    '& .MuiCardActions-root': {
      '& .MuiButton-root': {
        background: '#540391',
        margin: '-16px 0px 10px 28px',
        marginTop: 14,
        marginBottom: 14,
      },
    },
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
          color: '#808e96',
        }}
      >
        <Typography variant="caption" component="div">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

const MainPage = () => {
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

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} gutterBottom>
          Word of the Day
        </Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        </p>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );

  return (
    <div className="Container">
      <div className="WrapContainer">
        <Box sx={{ marginTop: 3 }}>
          <Avatar
            src={require('../../assets/user_img_bg_remove.png')}
            sx={{ width: 100, height: 100, margin: '3px auto' }}
          />
          <NameTypography>{AllData?.leftSideData?.name}</NameTypography>
          <Typography
            style={{
              color: '#535659',
              textAlign: 'center',
              marginTop: 6,
              fontSize: 16,
              fontFamily: 'cursive',
            }}
          >
            {AllData?.leftSideData?.role}
          </Typography>
          <CustomDivider />
        </Box>
        <div style={{ padding: 12, marginTop: -20 }}>
          <LeftTypographyHeading>Personal Details</LeftTypographyHeading>
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
          <LeftTypographyHeading>Language Known</LeftTypographyHeading>
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', marginTop: '26px' }}>
            <CircularProgressWithLabel value="100" />
            <CircularProgressWithLabel value="88" />
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
          <LeftTypographyHeading>Technical Skills</LeftTypographyHeading>
          {TechnicalSkillData?.map((item) => {
            return (
              <Box sx={{ color: '#cfcbca', width: '96%', margin: 'auto' }} key={item?.id}>
                <Box
                  sx={{
                    marginTop: '16px',
                  }}
                >
                  <div className="technicalSkills">
                    <Typography style={{ fontSize: 14, marginTop: 10 }}>
                      {item?.SkillName}
                    </Typography>
                    <Typography style={{ fontSize: 14, marginTop: 10 }}>
                      {item?.percentage}%
                    </Typography>
                  </div>
                  <BorderLinearProgress variant="determinate" value={item?.percentage} />
                </Box>
              </Box>
            );
          })}
          <LeftTypographyHeading>SKILLS AND ABILITIES</LeftTypographyHeading>
          <ContentTypography>{AllData?.leftSideData?.skillsAndAbilities}</ContentTypography>
          <Box sx={{ height: '40px' }}></Box>
        </div>
      </div>
      {/* ---------------Center Part---------------- */}
      <div className="right_div">
        <div className="center_part_top">
          <CustomCard>
            <Box>
              <CardContent>
                <Typography className="topic">
                  Discovering My amazing
                  <br />
                  Art Space..!
                </Typography>
                <Typography className="objective">{AllData?.certerPart?.objective}</Typography>
                <Typography className="role">{AllData?.certerPart?.role}</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained">
                  Explore now
                </Button>
              </CardActions>
            </Box>
            {/* <CardMedia
              sx={{ width: '23%', height: '66%', margin: '10px auto' }}
              component="img"
              image={require('../../assets/user_img_bg_remove.png')}
              alt="profile picture"
            /> */}
          </CustomCard>
        </div>
        <div className="experienceData">
          <ExperienceCustomTypography>{AllData?.certerPart?.experience}</ExperienceCustomTypography>
          <ExperienceCustomTypography>{AllData?.certerPart?.projects}</ExperienceCustomTypography>
          <ExperienceCustomTypography>{AllData?.certerPart?.dummy}</ExperienceCustomTypography>
        </div>
        {/* <CustomDivider /> */}
        <div className="Services">
          <CustomTypography variant="h6">My Services</CustomTypography>
          <div>
            <Card variant="outlined" style={{ marginTop: '23px' }}>
              {card}
            </Card>
            {/* <Card variant="outlined" style={{ margin: '10px auto', width: '480px' }}>
              {card}
            </Card> */}
            {/* <Card variant="outlined" style={{ margin: '10px auto', width: '460px' }}>
              {card}
            </Card> */}
          </div>
        </div>
      </div>
      <Menus />
    </div>
  );
};

export default MainPage;
