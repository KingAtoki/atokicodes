import React from 'react';

const Image = ({ source, alternate }) => {
  return <img src={source} alt={alternate} />;
};

export default () => {
  return (
    <div>
      <h1>Look at all my projects!</h1>
    </div>
  );
};
