import React from 'react';
import './Menus.css';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';
import LinkIcon from '@mui/icons-material/Link';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import AddLinkIcon from '@mui/icons-material/AddLink';
import Tooltip from '@mui/material/Tooltip';
import Zoom from '@mui/material/Zoom';
import { tooltipClasses } from '@mui/material/Tooltip';

const CustomTypography = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    fontWeight: 'Bold',
    fontFamily: 'cursive',
    marginLeft: 6,
    fontSize: 13,
    marginTop: 4,
  },
}));

const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} open={true} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f59851',
    color: '#edf1f2',
    fontSize: 11,
  },
}));

// const CustomDivider = styled(Divider)(({ theme }) => ({
//   '&.MuiDivider-root': {
//     marginTop: 10,
//     background: '#B0C4DE',
//     height: '1px',
//   },
// }));

const CustomDivider = styled(Divider)(({ theme }) => ({
  '&.MuiDivider-root': {
    margin: '30px auto',
    width: '60%',
  },
}));

const Menus = () => {
  return (
    <div className="menus">
      <div className="icon">
        {/* <MenuIcon className="menuIcon" fontSize="large" color="secondary" /> */}
        <Link href="/">
          <img
            src={require('../../assets/p.png')}
            alt=""
            style={{ width: '46px', height: '46px' }}
          />
        </Link>
      </div>
      <CustomDivider />
      <div className="links_container">
        <Tooltip title="Home" placement="top" arrow TransitionComponent={Zoom}>
          <Link underline="none" href="/">
            <div className="menuText">
              {/* <CustomTypography>Home</CustomTypography> */}
              <HomeIcon color="info" />
            </div>
          </Link>
        </Tooltip>
        <Tooltip title="Education" placement="top" arrow TransitionComponent={Zoom}>
          <Link underline="none" href="education">
            <div className="menuText">
              {/* <CustomTypography>Education</CustomTypography> */}
              <SchoolIcon color="info" />
            </div>
          </Link>
        </Tooltip>
        <Tooltip title="Profession" placement="top" arrow TransitionComponent={Zoom}>
          <Link underline="none" href="profession">
            <div className="menuText">
              {/* <CustomTypography>profession</CustomTypography> */}
              <WorkIcon color="info" />
            </div>
          </Link>
        </Tooltip>
        <Tooltip title="Follow me" placement="top" arrow TransitionComponent={Zoom}>
          <Link underline="none" href="followme">
            <div className="menuText">
              {/* <CustomTypography>Follow me</CustomTypography> */}
              <LinkIcon color="info" />
              {/* <AddLinkIcon color="info" /> */}
            </div>
          </Link>
        </Tooltip>
        <Tooltip title="About" placement="top" arrow TransitionComponent={Zoom}>
          <Link underline="none" href="about">
            <div className="menuText">
              {/* <CustomTypography>About</CustomTypography> */}
              <InfoIcon color="info" />
            </div>
          </Link>
        </Tooltip>
        {/* <LightTooltip title="About" placement="top">
          <Link underline="none" href="about">
            <div className="menuText">
              <CustomTypography>About</CustomTypography>
              <InfoIcon color="info" />
            </div>
          </Link>
        </LightTooltip> */}
      </div>
    </div>
  );
};

export default Menus;
