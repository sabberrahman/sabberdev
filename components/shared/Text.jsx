"use client"
import { TypeAnimation } from 'react-type-animation';

 const Text = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Website',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
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