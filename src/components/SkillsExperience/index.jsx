import React from 'react';
import './index.css';
import { Typography } from '@mui/material';

const SkillsExperience = () => {
  return (
    <div className="Skillscontainer" id="SkillsAnsExperienceSection">
      <div class="skills">
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
            Explore My Skills
          </Typography>
          <Typography variant="h3" className="SkillsTitle">
            Frontend Development
          </Typography>
        </div>
        <div class="skill-card">
          <div class="card">
            <div
              style={{
                display: 'flex',
                width: '50%',
              }}
            >
              <div className="image">
                <img src={require('../../../src/assets/html.png')} alt="" className="" />
              </div>
              <div>
                <Typography variant="h3" className="SkillEveryTitle">
                  HTML 5
                </Typography>
                <Typography variant="h3" className="SkillsLevelTitle">
                  Experienced
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '50%',
              }}
            >
              <div className="image">
                <img src={require('../../../src/assets/css.png')} alt="" className="" />
              </div>
              <div>
                <Typography variant="h3" className="SkillEveryTitle">
                  CSS 3
                </Typography>
                <Typography variant="h3" className="SkillsLevelTitle">
                  Experienced
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '50%',
                marginTop: 60,
              }}
            >
              <div className="image">
                <img src={require('../../../src/assets/js.png')} alt="" className="" />
              </div>
              <div>
                <Typography variant="h3" className="SkillEveryTitle">
                  Javascript
                </Typography>
                <Typography variant="h3" className="SkillsLevelTitle">
                  Experienced
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '50%',
                marginTop: 60,
              }}
            >
              <div className="image">
                <img src={require('../../../src/assets/react_js.png')} alt="" className="" />
              </div>
              <div>
                <Typography variant="h3" className="SkillEveryTitle">
                  ReactJS
                </Typography>
                <Typography variant="h3" className="SkillsLevelTitle">
                  Experienced
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '50%',
                marginTop: 60,
              }}
            >
              <div className="image">
                <img src={require('../../../src/assets/typescript.jpg')} alt="" className="" />
              </div>
              <div>
                <Typography variant="h3" className="SkillEveryTitle">
                  TypeScript
                </Typography>
                <Typography variant="h3" className="SkillsLevelTitle">
                  Experienced
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '50%',
                marginTop: 60,
              }}
            >
              <div className="image">
                <img src={require('../../../src/assets/storybook.jpg')} alt="" className="" />
              </div>
              <div>
                <Typography variant="h3" className="SkillEveryTitle">
                  Storybook
                </Typography>
                <Typography variant="h3" className="SkillsLevelTitle">
                  Intermediate
                </Typography>
              </div>
            </div>
          </div>
          <div class="card">
            <div
              style={{
                display: 'flex',
                width: '50%',
              }}
            >
              <div className="image">
                <img src={require('../../../src/assets/mui.png')} alt="" className="" />
              </div>
              <div>
                <Typography variant="h3" className="SkillEveryTitle">
                  Material UI
                </Typography>
                <Typography variant="h3" className="SkillsLevelTitle">
                  Experienced
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '50%',
              }}
            >
              <div className="image">
                <img src={require('../../../src/assets/native.png')} alt="" className="" />
              </div>
              <div>
                <Typography variant="h3" className="SkillEveryTitle">
                  React Native
                </Typography>
                <Typography variant="h3" className="SkillsLevelTitle">
                  Intermediate
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '50%',
                marginTop: 60,
              }}
            >
              <div className="image">
                <img src={require('../../../src/assets/redux.png')} alt="" className="" />
              </div>
              <div>
                <Typography variant="h3" className="SkillEveryTitle">
                  Redux
                </Typography>
                <Typography variant="h3" className="SkillsLevelTitle">
                  Intermediate
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '50%',
                marginTop: 60,
              }}
            >
              <div className="image">
                <img src={require('../../../src/assets/hooks.png')} alt="" className="" />
              </div>
              <div>
                <Typography variant="h3" className="SkillEveryTitle">
                  Hooks
                </Typography>
                <Typography variant="h3" className="SkillsLevelTitle">
                  Intermediate
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                width: '50%',
                marginTop: 60,
              }}
            >
              <div className="image">
                <img src={require('../../../src/assets/jest.png')} alt="" className="" />
              </div>
              <div>
                <Typography variant="h3" className="SkillEveryTitle">
                  Jest
                </Typography>
                <Typography variant="h3" className="SkillsLevelTitle">
                  Intermediate
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsExperience;
