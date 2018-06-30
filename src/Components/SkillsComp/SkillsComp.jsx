import React from 'react';

const jsImg = require('../../assets/js.png');
const cssImg = require('../../assets/css.png');
const htmlImg = require('../../assets/html-5.png');
const nodejsImg = require('../../assets/nodejs.png');
const reactNativeImg = require('../../assets/react-native.png');
const mongoDB = require('../../assets/mongodb.png');

const Image = ({ source, alternate, styles }) => {
  return (
    <div style={{ height: '100px', width: '100px' }}>
      <img
        src={source}
        alt={alternate}
        style={{ height: '50px', width: '50px', ...styles }}
      />
    </div>
  );
};

export default () => {
  return (
    <div style={{ width: '40%' }}>
      <Image source={jsImg} alternate="js" />
      <Image source={cssImg} alternate="css" />
      <Image source={htmlImg} alternate="html" />
      <Image source={nodejsImg} alternate="nodejs" />
      <Image source={reactNativeImg} alternate="react-native" />
      <Image source={mongoDB} alternate="mongodb" styles={{ width: '125px' }} />
    </div>
  );
};
