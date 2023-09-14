import React from 'react';
import './Educationpage.css';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Headerpage from '../Header/Headerpage';
import Footer from '../Footer';

const CustomCard = styled(Card)(({ theme }) => ({
  '&.MuiPaper-root': {
    boxShadow: 'none',
    background: 'none',
    margin: 'auto',
    '& .MuiTypography-root': {
      color: '#707887',
      fontSize: 17,
      textAlign: 'center',
    },
    '& .MuiCardHeader-root': {
      background: 'rgb(78 154 208)',
      borderRadius: 10,
      textAlign: 'center',
      padding: 5,
      '& .MuiTypography-h5': {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
      },
    },
    '& .MuiCardContent-root': {
      padding: 0,
      marginTop: 16,
    },
  },
}));
const CustomPaper = styled(Paper)(({ theme }) => ({
  '&.MuiPaper-root': {
    background: 'none',
    width: '100%',
    height: '100%',
    boxShadow: 'none',
  },
}));
const CustomTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    fontSize: 14,
    color: '#eee',
  },
}));
const TableHeadingTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    color: 'orange',
    fontSize: 14,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: 1.3,
    width: 'max-content',
  },
}));
const TableContentTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    color: '#707887',
    fontSize: 16,
  },
}));
const StyledTable = styled(Table)(({ theme }) => ({
  '&.MuiTable-root': {
    width: '96%',
    margin: 'auto',
    '& .MuiTableCell-root': {
      border: 'none',
      padding: 6,
    },
    '& .MuiTableCell-root:first-child': {
      color: '#eee',
    },
    '& .MuiTableCell-root:last-child': {
      textAlign: 'right',
    },
  },
}));
export const EductionPageTitleTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    color: '#0f2e66',
    borderBottom: '1px solid #dce0e1',
    borderRadius: 4,
    fontWeight: 'bold',
    fontSize: 23,
    letterSpacing: 'normal',
    margin: 'auto',
    padding: 12,
  },
}));

const Educationpage = () => {
  return (
    <div className="container">
      <Headerpage />
      <div className="contianerBody">
        <div
          style={{
            margin: 'auto',
            textAlign: 'center',
            width: '75%',
            borderRadius: 3,
            padding: 4,
          }}
        >
          <EductionPageTitleTypography variant="h6">Education details</EductionPageTitleTypography>
        </div>
        <div className="wrapContainer">
          <div style={{ width: '480px' }}>
            <CustomPaper>
              <div className="contentDiv">
                <CustomCard>
                  <CardHeader title="Post Graduate" />
                  <CardContent>
                    <CustomTypography>
                      I successfully completed my post-graduate studies from 2019 to 2022. Explore
                      my portfolio for details about my academic accomplishments during this period.
                    </CustomTypography>
                  </CardContent>
                </CustomCard>
              </div>
            </CustomPaper>
          </div>
          <div className="pg">
            <CustomPaper>
              <div className="contentDiv">
                <StyledTable>
                  <TableRow>
                    <TableCell>
                      <TableHeadingTypography variant="body1">Year :</TableHeadingTypography>
                    </TableCell>
                    <TableCell>
                      <TableContentTypography variant="body1">2019 - 2022</TableContentTypography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableHeadingTypography variant="body1">Course :</TableHeadingTypography>
                    </TableCell>
                    <TableCell>
                      <TableContentTypography variant="body1">MCA</TableContentTypography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableHeadingTypography variant="body1">College :</TableHeadingTypography>
                    </TableCell>
                    <TableCell>
                      <TableContentTypography variant="body1">
                        Puducherry Technological University
                      </TableContentTypography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableHeadingTypography variant="body1">CGPA :</TableHeadingTypography>
                    </TableCell>
                    <TableCell>
                      <TableContentTypography variant="body1">8.11</TableContentTypography>
                    </TableCell>
                  </TableRow>
                </StyledTable>
              </div>
            </CustomPaper>
          </div>
        </div>
        <div className="wrapContainerReverse">
          <div className="ug">
            <CustomPaper>
              <div className="contentDiv">
                <StyledTable className="educationTable">
                  <TableRow>
                    <TableCell>
                      <TableHeadingTypography variant="body1">Year :</TableHeadingTypography>
                    </TableCell>
                    <TableCell>
                      <TableContentTypography variant="body1">2016 - 2019</TableContentTypography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableHeadingTypography variant="body1">Course :</TableHeadingTypography>
                    </TableCell>
                    <TableCell>
                      <TableContentTypography variant="body1">BCA</TableContentTypography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableHeadingTypography variant="body1">College :</TableHeadingTypography>
                    </TableCell>
                    <TableCell>
                      <TableContentTypography variant="body1">
                        Saradha Gangadharan College
                      </TableContentTypography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableHeadingTypography variant="body1">CGPA :</TableHeadingTypography>
                    </TableCell>
                    <TableCell>
                      <TableContentTypography variant="body1">6.12</TableContentTypography>
                    </TableCell>
                  </TableRow>
                </StyledTable>
              </div>
            </CustomPaper>
          </div>
          <div style={{ width: '480px' }}>
            <CustomPaper>
              <div className="contentDiv">
                <CustomCard>
                  <CardHeader title="Under Graduate" />
                  <CardContent>
                    <CustomTypography>
                      I completed my bachelor's degree from 2016 to 2019. Check out my portfolio for
                      additional details on my academic pursuits during this time.
                    </CustomTypography>
                  </CardContent>
                </CustomCard>
              </div>
            </CustomPaper>
          </div>
        </div>
        <div className="wrapContainer">
          <div style={{ width: '480px' }}>
            <CustomPaper>
              <div className="contentDiv">
                <CustomCard>
                  <CardHeader title="Higher Secondary" />
                  <CardContent>
                    <CustomTypography>
                      During 2015 to 2016, I immersed myself in higher secondary education, a
                      crucial step that propelled me towards my educational aspirations.
                    </CustomTypography>
                  </CardContent>
                </CustomCard>
              </div>
            </CustomPaper>
          </div>
          <div className="hsc">
            <CustomPaper>
              <div className="contentDiv">
                <StyledTable className="educationTable">
                  <TableRow>
                    <TableCell>
                      <TableHeadingTypography variant="body1">Year :</TableHeadingTypography>
                    </TableCell>
                    <TableCell>
                      <TableContentTypography variant="body1">2015 - 2016</TableContentTypography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableHeadingTypography variant="body1">Standard :</TableHeadingTypography>
                    </TableCell>
                    <TableCell>
                      <TableContentTypography variant="body1">12th</TableContentTypography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableHeadingTypography variant="body1">School :</TableHeadingTypography>
                    </TableCell>
                    <TableCell>
                      <TableContentTypography variant="body1">
                        Jothi Vallalar Higher Sec.School
                      </TableContentTypography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableHeadingTypography variant="body1">Percentage :</TableHeadingTypography>
                    </TableCell>
                    <TableCell>
                      <TableContentTypography variant="body1">78%</TableContentTypography>
                    </TableCell>
                  </TableRow>
                </StyledTable>
              </div>
            </CustomPaper>
          </div>
        </div>
        <div className="wrapContainerReverse">
          <div className="sslc">
            <CustomPaper>
              <div className="contentDiv">
                <StyledTable className="educationTable">
                  <TableRow>
                    <TableCell>
                      <TableHeadingTypography variant="body1">Year :</TableHeadingTypography>
                    </TableCell>
                    <TableCell>
                      <TableContentTypography variant="body1">2013 - 2014</TableContentTypography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableHeadingTypography variant="body1">Standard :</TableHeadingTypography>
                    </TableCell>
                    <TableCell>
                      <TableContentTypography variant="body1">10th</TableContentTypography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableHeadingTypography variant="body1">School :</TableHeadingTypography>
                    </TableCell>
                    <TableCell>
                      <TableContentTypography variant="body1">
                        Amala Higher Sec.School
                      </TableContentTypography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <TableHeadingTypography variant="body1">Percentage :</TableHeadingTypography>
                    </TableCell>
                    <TableCell>
                      <TableContentTypography variant="body1">86%</TableContentTypography>
                    </TableCell>
                  </TableRow>
                </StyledTable>
              </div>
            </CustomPaper>
          </div>
          <div style={{ width: '480px' }}>
            <CustomPaper>
              <div className="contentDiv">
                <CustomCard>
                  <CardHeader title="SSLC" />
                  <CardContent>
                    <CustomTypography>
                      During the period of 2013 to 2014, I successfully completed my SSLC (10th
                      grade) education, marking a significant milestone in my academic journey.
                    </CustomTypography>
                  </CardContent>
                </CustomCard>
              </div>
            </CustomPaper>
          </div>
        </div>
      </div>
      <div style={{ height: 60 }}></div>
      <Footer />
    </div>
  );
};

export default Educationpage;
