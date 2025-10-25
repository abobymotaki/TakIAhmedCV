import { useState } from 'react';
import languages from '../data/languages.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'; // Fallback icon

// Create a dynamic icon resolver function
const getIcon = (iconArray) => {
  if (!Array.isArray(iconArray) || iconArray.length !== 2) {
    return faExclamationTriangle;
  }
  
  const [prefix, iconName] = iconArray;
  
  if (prefix === 'fab') {
    // Convert kebab-case to camelCase for FontAwesome icon names
    const camelCaseName = iconName.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    const iconKey = `fa${camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1)}`;
    
    // Return the icon if it exists, otherwise return fallback
    return brandIcons[iconKey] || faExclamationTriangle;
  }
  
  return faExclamationTriangle;
};

function AdvancedHome(props) {
  const [languagesList] = useState(languages.list);

  const skills = languagesList.map((items, index) => {
    const icon = getIcon(items.icon);
    
    return (
      <div key={index} className='z-100 backdrop-blur-sm flex justify-center p-3 rounded-xl bg-blue-950/30 w-full max-w-45 border border-black/50
      '>
        <abbr title={items.language} className=''>
          <FontAwesomeIcon
            icon={icon}
            className='hover:scale-115 transition-all ease-in-out duration-500 hover:rotate-6
              lg:text-5xl text-4xl
            '
          />
        </abbr>
      </div>
    );
  });

  return (
    <div
      className={`
        text-gray-100 ${props.className}
        transition-all ease-in-out duration-400 pt-10 bg-zinc-950
      `}
    >
      <div className="w-full" id="FrameOneAdvanced">
        <div className="flex justify-center items-center w-full h-[calc(100vh-5vh)] flex-col">
          <div className="flex justify-center items-center flex-col z-[99] bg-zinc-950/40 p-15 lg:p-20 px-5 lg:px-25 backdrop-blur-sm border-white/20 hover:border-2 rounded-[45px_5px_45px_5px] transition-all ease-in-out duration-500">
            <span className="text-2xl lg:text-4xl mb-4">
              Hey, I am <b className="text-3xl lg:text-5xl text-blue-500 ml-4">Taki Ahmed</b>
            </span>
            <span className="text-lg lg:text-xl">A Fullstack Website Developer</span>
          </div>
        </div>
      </div>
      <div
        className="border-t-[1px] border-zinc-800 px-5 lg:px-10 py-12 grid z-[100] w-auto min-w-100
          grid-cols-1 lg:grid-cols-2 gap-4
        "
        id="FrameTwoAdvanced"
      >
        <div className="z-101 backdrop-blur-sm bg-black/30 p-[8px_16px] lg:p-[1rem_2rem] rounded-xl">
          <h1 className='text-lg lg:text-xl font-bold mb-4'>About Me</h1>
          <p className='lg:text-lg'>
            I am <b>Taki Ahmed</b>, an 18-year-old second-year Software Engineering student from Bangladesh, passionate about Full Stack development. 
            <br /><br />
            My focus is on building scalable, high-performance web solutions that align with user needs and business goals. With a commitment to accessibility, responsiveness, and clean code, I aim to create engaging digital experiences that deliver measurable impact.
          </p>
        </div>
        <div className="z-101">
          <span className="text-lg lg:text-xl font-bold">My Skillset</span>
          <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-4 gap-2">{skills}</div>
        </div>
      </div>
    </div>
  );
}

export default AdvancedHome;