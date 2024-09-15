"use client"
import { TypeAnimation } from 'react-type-animation';

 const Text = () => {
  return (
    <TypeAnimation
      sequence={[
        
        'Website',
        1000, // wait 1s before replacing "website" with "design"
        'Design',
        1000,
        'Experience',
        1000,
        'Fronend',
        1000,
        'app',
        1000,
        'backend',
        1000,
        'bug',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1.5rem', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};
export default Text;