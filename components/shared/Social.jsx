import React from 'react';
import X from '@/public/icon/x'; // Custom icon
import { Code2Icon, Github, LucideLinkedin, MailPlus } from 'lucide-react'; // Lucide icons
// const socialLinks = [
//     { href: 'mailto:sabberrahman.contact@gmail.com', icon: Mail, label: 'Mail' },
//     { href: 'https://www.linkedin.com/in/sabberrahman', icon: Linkedin, label: 'LinkedIn' },
//     { href: 'https://x.com/sabberdev', icon: X, label: 'Twitter' },
//     { href: 'https://github.com/sabberrahman', icon: Code2Icon, label: 'Github' },
//   ];
function Social() {
  
  return (
    <div className="p-4">
      {/* Social Links */}
      <div className="flex justify-around items-center space-x-4 ">
        <a
          href="https://www.linkedin.com/in/sabberrahman/"
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors duration-300"
          target='_blank'
        >
          <LucideLinkedin className="text-xl w-8 h-8" />
        </a>
       
        <a
          href="https://github.com/sabberrahman"
          className="flex items-center space-x-4 text-gray-700 hover:text-blue-500 transition-colors duration-300"
          target='_blank'
        >
          <Github className="text-xl w-8 h-8" />
        </a>
         <a
          href="https://x.com/sabberdev"
          className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 transition-colors duration-300"
          target='_blank'
        >
          <X className="text-xl" />
        </a>
        <a
          href="mailto:sabberrahman.contact@gmail.com"
          className="flex items-center space-x-4 text-gray-700 hover:text-blue-500 transition-colors duration-300"
          target='_blank'
        >
          <MailPlus className="text-xl w-8 h-8" />
        </a>
      </div>
    </div>
  );
}

export default Social;
