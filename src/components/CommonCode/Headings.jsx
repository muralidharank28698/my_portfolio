import { Typography } from '@mui/material';
import './style.css';

import React from 'react';

export const SubHeading = ({ text }) => {
  return (
    <Typography className="commonSubHeading" fontWeight={600}>
      {text}
    </Typography>
  );
};
export const Heading = ({ text }) => {
  return (
    <Typography variant="h2" fontSize={24} marginTop={2} fontWeight={600}>
      {text}
    </Typography>
  );
};
