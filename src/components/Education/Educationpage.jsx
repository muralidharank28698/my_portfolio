import React from 'react';
import './Educationpage.css';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Menus from '../MenuSide/Menus';

const AcademicDetail = [
  {
    degree: 'Post Graduate',
    Year: '2019 - 2022',
    course: 'MCA',
    college: 'Puducherry Technological University',
    cgpa: '8.11',
  },
  {
    degree: 'Under Graduate',
    Year: '2016 - 2019',
    course: 'Bca',
    college: 'Saradha Gangadharan College',
    cgpa: '6.12',
  },
];

const CustomTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    marginBottom: 16,
    fontSize: 16,
    color: '#0f2e66',
    fontWeight: 'bold',
  },
}));
const TableTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    color: '#738BB9',
  },
}));
const TitleTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    color: '#0f2e66',
    fontWeight: 560,
    fontSize: 18,
    letterSpacing: 'normal',
  },
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  '&.MuiPaper-root': {
    width: '100%',
    margin: 'auto',
    overflowX: 'auto',
    boxShadow: 'none',
    '& .MuiTable-root': {
      width: '100%',
      minWidth: 600,
      '& .MuiTableHead-root': {
        background: '#c3cce1',
      },
      '& .MuiTableCell-root': {
        paddingBottom: 4,
        paddingTop: 6,
        border: 'none',
      },
      '& .MuiTableRow-root': {},
    },

    '& tr': {
      '&:first-child th:first-child': { borderTopLeftRadius: 6 },
      '&:first-child th:last-child': {
        borderTopRightRadius: 6,
      },
      '&:last-child th:last-child': { borderBottomRightRadius: 6 },
      '&:last-child th:first-child': { borderBottomLeftRadius: 6 },
    },
    '& .MuiDivider-root': {
      height: 64,
    },
  },
}));

const Educationpage = () => {
  return (
    <div className="container">
      <div className="wrapContainer">
        <TitleTypography variant="h2">My Graduation details</TitleTypography>
        {AcademicDetail?.map((item) => {
          return (
            <div className="tableContainer" key={item?.Year}>
              <div className="tableContent">
                <CustomTypography variant="h5">{item?.degree}</CustomTypography>
                <StyledPaper>
                  <Table aria-label="customized table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">
                          <TableTypography variant="body1">Year</TableTypography>
                        </TableCell>
                        <TableCell align="center">
                          <TableTypography variant="body1">Degree</TableTypography>
                        </TableCell>
                        <TableCell align="center">
                          <TableTypography variant="body1">College</TableTypography>
                        </TableCell>
                        <TableCell align="center">
                          <TableTypography variant="body1">CGPA</TableTypography>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      <TableRow>
                        <TableCell align="center">
                          <Typography variant="body1">{item?.Year}</Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="body1">{item?.course}</Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="body1">{item?.college}</Typography>
                        </TableCell>
                        <TableCell align="center">
                          <Typography variant="body1">{item?.cgpa}</Typography>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </StyledPaper>
              </div>
            </div>
          );
        })}
      </div>
      <Menus />
    </div>
  );
};

export default Educationpage;
