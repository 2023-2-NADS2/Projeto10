import React from 'react';
import dividerImage from './divider.png';

const Divider = () => {
  return (
    <div style={{ textAlign: 'center', margin: '40px 0', padding: '30px' }}>
      <img src={dividerImage} alt="Divider" style={{ width: '60%', maxWidth: '100%' }} />
    </div>
  );
};

export default Divider;
