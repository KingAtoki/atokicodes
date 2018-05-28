import React from 'react';

import profilePic from '../../assets/me-wall.jpg';
import { Spring } from 'react-spring';

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
      <div>Here is a nice little bio</div>
    </div>
  );
};
