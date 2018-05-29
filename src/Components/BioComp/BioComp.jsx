import React from 'react';

import './BioComp.css';

import profilePic from '../../assets/me-wall.jpg';

export default () => {
  return (
    <div>
      <img
        src={profilePic}
        alt="chrisatoki"
        height="350px"
        width="250px"
        style={{ boxShadow: '10px 10px 10px grey', margin: 30 }}
      />
      <div className="bio-card">
        <p>
          Hi, I'm Christopher Atoki. I'm laid back, easy going, and an awesome
          person to be around. I'm very professional, attentive, curious, and
          have that "Whatever it takes to get the job done" attitude.
        </p>
      </div>
      <div className="bio-card">
        <h4>Strengths</h4>
        <ul>
          <li>Love to learn new things</li>
          <li>I can make a plan and stick to it, within time constraints</li>
          <li>I'm pretty good at managing myself</li>
          <li>I stay calm, cool, and collected under presure</li>
        </ul>
      </div>
      <div className="bio-card">
        <h4>Weaknesses</h4>
        <ul>
          <li>I haven't watch all of the Harry Potter movies</li>
          <li>Haven't read any of the books either</li>
        </ul>
      </div>
    </div>
  );
};
