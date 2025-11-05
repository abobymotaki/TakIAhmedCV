import { useState } from 'react';
import languages from '../data/languages.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as brandIcons from '@fortawesome/free-brands-svg-icons';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'; // Fallback icon
import experiences from '../data/experience.json';
import qasrImage from '../assets/qasralzumurud.png';
import invoiceImg from '../assets/invoiceManager.png';

const imageMap = {
  '/assets/qasralzumurud.png': qasrImage,
  '/assets/invoiceManager.png': invoiceImg,
};

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


function BasicHome(props) {

    const [languagesList] = useState(languages.list);
    const [experiencesList] = useState(experiences.list);

    const skills = languagesList.map((items, index) => {
        const icon = getIcon(items.icon);
        
        return (
            <div key={index} className='p-2 px-4 border-1 border-black rounded-md flex items-center gap-x-1 justify-center hover:bg-zinc-100'>
                <span className='text-sm'>{items.language}</span>
                <FontAwesomeIcon 
                    icon={icon} 
                    className='lg:text-2xl'
                />
            </div>
        );
    });

    const sortedExperience = experiencesList.sort((a, b) => (a.priority - b.priority));

    const experience = sortedExperience.map((items, index) => {
        // State to track which project is expanded
        const [openProjectIndex, setOpenProjectIndex] = useState(null);

        // Function to toggle dropdown
        const toggleProject = (projectIndex) => {
            setOpenProjectIndex(openProjectIndex === projectIndex ? null : projectIndex);
        };

        return (
            <div key={index} className=''>
                <p className='italic'>
                    <span className='font-bold text-2xl'>{items.company}</span> -{' '}
                    <span className='text-lg font-bold'>{items.position}</span>
                </p>
                <p className='text-zinc-500 mb-4'>
                    {items.joinMonth} {items.joinYear} -{' '}
                    {items.leaveMonth == null && items.leaveYear == null
                        ? 'Now'
                        : `${items.leaveMonth} ${items.leaveYear}`}
                </p>
                
                <div className=''>
                    {items.projects.map((project, projectIndex) => (
                        <div key={projectIndex} className='mb-2'>
                            <button
                                className={`lg:-ml-3 w-full text-left font-bold text-zinc-600 flex flex-col items-center py-2
                                        ${openProjectIndex === projectIndex ? 'border px-3 rounded-lg shadow-md' : 'px-3'}
                                    `}
                            >
                                <div className='text-lg font-bold flex justify-between w-full -mt-1 cursor-pointer'
                                    onClick={() => toggleProject(projectIndex)}
                                >
                                    {project.name}
                                    <span>{openProjectIndex === projectIndex ? '▴' : '▾'}</span>
                                </div>
                                
                                <div className={`${ openProjectIndex === projectIndex ? 'max-h-250' : 'max-h-0' } overflow-auto transition-all ease-in-out duration-200 w-full text-md font-normal grid lg:grid-cols-2 gap-4 lg:mt-2`}>
                                    <div className='lg:py-2 flex flex-col justify-between'>
                                        <div className=''>
                                            { project.feats.map((feat, index) => (
                                                <div key={index} className='flex gap-x-2 py-2'>
                                                    <span className=''>✱</span><span>{feat.paragraph}</span>
                                                </div>
                                            )) }

                                            <div>
                                                <span className='text-[14px] font-semibold'>Technologies Used</span>
                                                <div className='flex gap-1 flex-wrap'>
                                                    {
                                                        project.languages.map((language, index) => (
                                                            <div className='px-4 p-1 border-1 w-fit rounded-sm' key={index}>{language.language}</div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            project.link != null ? 
                                            <p className='mt-4 cursor-pointer'>
                                                <a href={project.link} className={`bg-black text-white block p-2 text-center rounded-sm`} rel="noopener noreferrer" target="_blank">Visit here</a>
                                            </p> : 
                                            null
                                        }
                                    </div>
                                    <div className=''>
                                        <img src={imageMap[project.image] || project.image} alt={project.name} 
                                            className='rounded-md' />
                                    </div>
                                </div>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        );
    });
  
    return (
        <div
            className={`
                w-full ${ props.className } 
                transition-all ease-in-out duration-400 pt-10
            `}
        >
            <div
                className='min-w-80 lg:min-w-200'
                id='FrameOne'
            >
                <div className='flex justify-center items-center w-full h-[calc(100vh-5vh)] flex-col'>
                    <span className='text-xl lg:text-4xl mb-4'>
                        Hey, I am <b className='text-2xl lg:text-5xl'>Taki Ahmed</b>
                    </span>
                    <span className='text-lg'>
                        A Fullstack Website Developer
                    </span>
                </div>
            </div>
            <div
                className='min-w-80 lg:min-w-200 border-t-1 border-zinc-200 py-10
                        grid lg:grid-cols-2 gap-4 px-5'
                id='FrameTwo'
            >
                <div>
                    <h1 className='text-xl font-bold mb-4'>About Me</h1>
                    <p className='lg:text-lg'>
                        I am <b>Taki Ahmed</b>, an 18-year-old second-year Software Engineering student from Bangladesh, passionate about Full Stack development. 
                        <br /><br />
                        My focus is on building scalable, high-performance web solutions that align with user needs and business goals. With a commitment to accessibility, responsiveness, and clean code, I aim to create engaging digital experiences that deliver measurable impact.
                    </p>
                </div>
                <div>
                    <h1 className='text-xl font-bold mb-4'>Skills</h1>
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-3 gap-2'>{skills}</div>
                </div>
            </div>
            <div
                className='min-w-80 lg:min-w-200 border-t-1 border-zinc-200 py-10
                        grid gap-4 px-5'
                id='FrameThree'
            >
                <div className=''>
                    <h1 className='text-xl font-bold mb-4'>Experience</h1>
                    <div className=''>
                        {experience}
                    </div>
                </div>
            </div>
            {/* <div
                className='min-w-80 lg:min-w-200 border-t-1 border-zinc-200 py-10
                        grid lg:grid-cols-2 gap-4 px-5'
                id='FrameFour'
            >
                <div>
                    <h1 className='text-xl font-bold mb-4'>Projects</h1>
                </div>
            </div> */}
        </div>
    )
}

export default BasicHome