import { Routes, Route } from 'react-router-dom';
import MainPage from './components/Mainpages/MainPage';
import Aboutpage from './components/About/Aboutpage';
import Educationpage from './components/Education/Educationpage';
import Followme from './components/FollowMe/Followme';
import SkillsExperience from './components/SkillsExperience';
import ExperiencePage from './components/Experience/ExperiencePage';
import { BrowserRouter } from 'react-router-dom';
import Headerpage from './components/Header/Headerpage';

function App() {
  return (
    // <BrowserRouter>
    <div className="App">
      <Headerpage />
      {/* <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/skillsExperience" element={<SkillsExperience />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/education" element={<Educationpage />} />
          <Route path="/profession" element={<ExperiencePage />} />
          <Route path="/followme" element={<Followme />} />
        </Routes> */}
    </div>
    // </BrowserRouter>
  );
}

export default App;
