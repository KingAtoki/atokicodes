import React, { Component } from 'react';
import './App.css';
import { Spring, Keyframes, animated } from 'react-spring';
import DelayFunction from './Components/DelayFunction';

import AboutMeComp from './Components/AboutMeComp/AboutMeComp';
import BioComp from './Components/BioComp/BioComp';
import SkillsComp from './Components/SkillsComp/SkillsComp';
import ProjectsComp from './Components/ProjectsComp/ProjectsComp';
import ScrollingTextComp from './Components/ScrollingTextComp/ScrollingTextComp';
import JokeComp from './Components/JokeComp/JokeComp';

const MenuItem = ({ children, onClick, name }) => {
  return (
    <div className="MenuItem" name={name} onClick={onClick}>
      {children}
    </div>
  );
};

const ActivePage = props => {
  switch (props.activePage) {
    case 'Bio':
      return <BioComp />;
    case 'Skills':
      return <SkillsComp />;
    case 'Projects':
      return <ProjectsComp />;
    case 'Joke':
      return <JokeComp />;
    default:
      return null;
  }
};

class App extends Component {
  state = {
    isReady: false,
    activePage: ''
  };

  click = event => {
    const name = event.target.getAttribute('name');
    this.setState({ activePage: name });
  };

  render() {
    return (
      <div className="App">
        <Keyframes
          native
          script={async next => {
            // None of this will cause React to render, the component renders only once :-)

            await next(Spring, {
              from: {
                opacity: 0,
                width: '20vw',
                height: '20px',
                background: 'white'
              },
              to: {
                opacity: 1,
                width: '80vw',
                height: '500px',
                background: 'lightgrey',
                boxShadow: '10px 10px 10px dimgrey',
                position: 'absolute',
                zIndex: 99999
              }
            });
            await DelayFunction(3000);
            await next(
              Spring,
              {
                to: {
                  display: 'flex',
                  alignSelf: 'flex-start',
                  width: '40%',
                  height: '600px',
                  background: 'white',
                  position: 'relative',
                  left: 0,
                  zIndex: 0,
                  boxShadow: '10px 10px 10px transparent'
                }
              },
              this.setState({ isReady: true })
            );
          }}
        >
          {props => (
            <animated.div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                ...props
              }}
              children={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    padding: '10%'
                  }}
                >
                  <AboutMeComp />
                  {this.state.isReady ? <ScrollingTextComp /> : null}
                  {this.state.isReady ? (
                    <div>
                      <h3>What would you like to see?</h3>
                      <div>
                        <MenuItem name="Bio" onClick={this.click}>
                          Tell you a little about myself.
                        </MenuItem>
                        <MenuItem name="Skills" onClick={this.click}>
                          What am I even good at?
                        </MenuItem>
                        <MenuItem name="Projects" onClick={this.click}>
                          What projects I have worked on?
                        </MenuItem>
                        <MenuItem name="Joke" onClick={this.click}>
                          Tell me a joke!
                        </MenuItem>
                      </div>
                    </div>
                  ) : null}
                  {this.state.isReady ? null : (
                    <p>Be the change you want to see in the world</p>
                  )}
                </div>
              }
            />
          )}
        </Keyframes>
        {this.state.isReady ? (
          <div className="active-page">
            <ActivePage activePage={this.state.activePage} />
          </div>
        ) : null}
      </div>
    );
  }
}

export default App;
