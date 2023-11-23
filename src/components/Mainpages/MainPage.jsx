import React from 'react';
import './MainPage.css';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AllData } from '../../AllData';
import Certification from './Certification';
import { SubHeading } from '../CommonCode/Headings';
import { Heading } from '../CommonCode/Headings';

const ExperienceCustomTypographyHeading = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    marginLeft: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00c7f6',
  },
}));
const ExperienceCustomTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    marginLeft: 20,
    marginTop: 6,
    fontSize: 15,
  },
}));

const MainPage = () => {
  return (
    <div className="MainPageContainer">
      <div className="objectiveContent">
        <Typography className="subHeading">Get to know more</Typography>
        <Heading text="About me" />
        <Typography variant="body1" fontSize={16} marginTop={2} lineHeight={1.8}>
          {AllData?.certerPart?.objective}
        </Typography>
      </div>
      <div className="experienceData">
        <div className="experienceDataContentLeft">
          <img src={require('../../assets/aaaa.png')} alt="" />
        </div>
        <div className="experienceDataContentRight">
          <Typography variant="h2" className="exTitle">
            Discover my experience <br />
            and projects
          </Typography>
          <div class="experienceGridContainer">
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
      <div className="certification">
        <SubHeading text="Browse My Recent" />
        <Heading text="Certification" />
        <Certification />
      </div>
    </div>
  );
};

export default MainPage;
