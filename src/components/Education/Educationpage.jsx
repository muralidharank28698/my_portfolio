import React from 'react';
import './Educationpage.css';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const EductionPageTitleTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    color: '#0f2e66',
    borderRadius: 4,
    fontWeight: 'bold',
    fontSize: 28,
    letterSpacing: 'normal',
    margin: 'auto',
    padding: 12,
  },
}));

const Educationpage = () => {
  return (
    <div className="container" id="educationSection">
      <div className="contianerBody">
        <div
          style={{
            paddingTop: '3rem',
            textAlign: 'center',
          }}
        >
          <Typography
            style={{
              fontSize: 12,
              textAlign: 'center',
              marginBottom: '2rem',
              padding: '0.87rem 1rem',
              border: '1px solid #1d3b53',
              display: 'inline-block',
              borderRadius: '6px',
              margin: '1px',
              fontWeight: 600,
            }}
          >
            Get to know about my
          </Typography>
          <Typography variant="h3" className="educationTitle">
            Education Qualification
          </Typography>
        </div>
        <div class="row">
          <div class="col-md-4 col-morning">
            <Typography variant="h4" fontWeight={600}>
              Post Graduate
            </Typography>
            <Typography variant="h5" m={1} fontWeight={600}>
              MCA [Master of Computer Application]
            </Typography>
            <Typography variant="body1" m={0.5} fontSize={12}>
              Puducherry Technological University
            </Typography>
            <Typography variant="body1" m={0.5} fontSize={12}>
              2019 - 2022
            </Typography>
            <Typography variant="body1" fontSize={16} fontWeight={600}>
              86%
            </Typography>
          </div>
          <div class="col-md-4 col-afternoon">
            <Typography variant="h4" fontWeight={600}>
              Under Graduate
            </Typography>
            <Typography variant="h5" m={1} fontWeight={600}>
              BCA [Bachelor of Computer Application]
            </Typography>
            <Typography variant="body1" m={0.5} fontSize={12}>
              Saradha Gangadharan College
            </Typography>
            <Typography variant="body1" m={0.5} fontSize={12}>
              2016 - 2019
            </Typography>
            <Typography variant="body1" fontSize={16} fontWeight={600}>
              6.12 CGPA
            </Typography>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-morning">
            <Typography variant="h4" fontWeight={600}>
              Higher Secondary
            </Typography>
            <Typography variant="h5" m={1} fontWeight={600}>
              12th
            </Typography>
            <Typography variant="body1" m={0.5} fontSize={12}>
              Jothi Vallalar Higher Sec.School
            </Typography>
            <Typography variant="body1" m={0.5} fontSize={12}>
              2015 - 2016
            </Typography>
            <Typography variant="body1" fontSize={16} fontWeight={600}>
              78%
            </Typography>
          </div>
          <div class="col-md-4 col-afternoon">
            <Typography variant="h4" fontWeight={600}>
              SSLC
            </Typography>
            <Typography variant="h5" m={1} fontWeight={600}>
              10th
            </Typography>
            <Typography variant="body1" m={0.5} fontSize={12}>
              Amala Higher Sec.School
            </Typography>
            <Typography variant="body1" m={0.5} fontSize={12}>
              2013 - 2014
            </Typography>
            <Typography variant="body1" fontSize={16} fontWeight={600}>
              86%
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Educationpage;
