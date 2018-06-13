import React from 'react';

import './BioComp.css';

import { Transition, animated } from 'react-spring';

import profilePic from '../../assets/me-wall.jpg';

export default () => {
  return (
    <div className="bio-container">
      <img
        src={profilePic}
        alt="chrisatoki"
        height="350px"
        width="250px"
        style={{
          boxShadow: '10px 10px 10px grey',
          margin: '0px 30px',
          alignSelf: 'center'
        }}
      />
      <BioCard
        bioText={`Hi, I'm Christopher Atoki. I'm laid back, easy going, and an awesome
          person to be around. I'm very professional, attentive, curious, and
          have that "Whatever it takes to get the job done" attitude.`}
      />
      <BioCard
        title="Strengths"
        content={[
          'Love to learn new things',
          'I can make a plan and stick to it, within time constraints',
          "I'm pretty good at managing myself",
          'I stay calm, cool, and collected under presure'
        ]}
      />
      <BioCard
        title="Weaknesses"
        content={[
          "I haven't watch all of the Harry Potter movies",
          "Haven't read any of the books either"
        ]}
      />
    </div>
  );
};

const BioCard = ({ ...props }) => {
  return (
    <div className="bio-card">
      <h4>{props.title || null}</h4>
      <ul>
        {props.content
          ? props.content.map(item => {
              return <li key={item}>{item}</li>;
            })
          : null}
      </ul>
      <p>{props.bioText || null}</p>
    </div>
  );
};
