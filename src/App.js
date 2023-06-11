import './App.css';
import { Routes, Route } from 'react-router-dom';
import MainPage from './components/Mainpages/MainPage';
import Aboutpage from './components/About/Aboutpage';
import Educationpage from './components/Education/Educationpage';
import Professionpage from './components/Profession/Professionpage';
import { Typography, Link } from '@mui/material';
import Followme from './components/FollowMe/Followme';
import { AllData } from './AllData';

function App() {
  return (
    <div className="App">
      <header class="header-fixed">
        <div class="header-limiter">
          <Link href="/">
            <img
              src={require('../src/assets/portFolioLogo.png')}
              alt=""
              style={{ width: '200px', height: '200px', marginTop: '-78px' }}
            />
          </Link>
          <Typography color="#FFC72C" fontFamily="cursive">
            <Link>{AllData?.header?.mailId}</Link>
            <br />
            {AllData?.header?.phoneNO}
          </Typography>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/education" element={<Educationpage />} />
        <Route path="/profession" element={<Professionpage />} />
        <Route path="/followme" element={<Followme />} />
      </Routes>
    </div>
  );
}

export default App;
