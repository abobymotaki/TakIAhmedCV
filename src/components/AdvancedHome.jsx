import { useState } from "react";
import languages from "../data/languages.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as brandIcons from "@fortawesome/free-brands-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons"; // Fallback icon
import experiences from "../data/experience.json";
import qasrImage from "../assets/qasralzumurud.png";
import invoiceImg from "../assets/invoiceManager.png";

const imageMap = {
  "/assets/qasralzumurud.png": qasrImage,
  "/assets/invoiceManager.png": invoiceImg,
};

// Create a dynamic icon resolver function
const getIcon = (iconArray) => {
  if (!Array.isArray(iconArray) || iconArray.length !== 2) {
    return faExclamationTriangle;
  }

  const [prefix, iconName] = iconArray;

  if (prefix === "fab") {
    // Convert kebab-case to camelCase for FontAwesome icon names
    const camelCaseName = iconName.replace(/-([a-z])/g, (g) =>
      g[1].toUpperCase()
    );
    const iconKey = `fa${
      camelCaseName.charAt(0).toUpperCase() + camelCaseName.slice(1)
    }`;

    // Return the icon if it exists, otherwise return fallback
    return brandIcons[iconKey] || faExclamationTriangle;
  }

  return faExclamationTriangle;
};

function AdvancedHome(props) {
  const [languagesList] = useState(languages.list);
  const [experiencesList] = useState(experiences.list);

  const skills = languagesList.map((items, index) => {
    const icon = getIcon(items.icon);

    return (
      <div
        key={index}
        className="z-100 backdrop-blur-sm flex justify-center p-3 rounded-xl bg-blue-950/30 w-full max-w-45 border border-black/50
      "
      >
        <abbr title={items.language} className="">
          <FontAwesomeIcon
            icon={icon}
            className="hover:scale-115 transition-all ease-in-out duration-500 hover:rotate-6
              lg:text-5xl text-4xl
            "
          />
        </abbr>
      </div>
    );
  });

  const sortedExperience = experiencesList.sort(
    (a, b) => a.priority - b.priority
  );

  const experience = sortedExperience.map((items, index) => {
    // State to track which project is expanded
    const [openProjectIndex, setOpenProjectIndex] = useState(null);

    // Function to toggle dropdown
    const toggleProject = (projectIndex) => {
      setOpenProjectIndex(
        openProjectIndex === projectIndex ? null : projectIndex
      );
    };

    return (
      <div key={index} className="">
        <p className="italic">
          <span className="font-bold text-2xl">{items.company}</span> -{" "}
          <span className="text-lg font-bold">{items.position}</span>
        </p>
        <p className="text-zinc-300 mb-4">
          {items.joinMonth} {items.joinYear} -{" "}
          {items.leaveMonth == null && items.leaveYear == null
            ? "Now"
            : `${items.leaveMonth} ${items.leaveYear}`}
        </p>

        <div className="">
          {items.projects.map((project, projectIndex) => (
            <div key={projectIndex} className="mb-2">
              <button
                className={`w-full text-left font-bold flex flex-col items-center text-zinc-100
                                        ${
                                          openProjectIndex === projectIndex
                                            ? "rounded-lg shadow-md shadow-black bg-blue-950/40 mb-4"
                                            : ""
                                        }
                                    `}
              >
                <div
                  className={`text-lg font-bold flex justify-between w-full -mt-1 cursor-pointer px-3 transition-all ease-in-out duration-200
                      ${
                        openProjectIndex === projectIndex
                          ? "rounded-md shadow-sm shadow-black bg-blue-900/80 py-2"
                          : ""
                      }
                    `}
                  onClick={() => toggleProject(projectIndex)}
                >
                  {project.name}
                  <span>{openProjectIndex === projectIndex ? "▴" : "▾"}</span>
                </div>

                <div
                  className={`${
                      openProjectIndex === projectIndex ? "max-h-250 py-4" : "max-h-0"} 
                        overflow-auto transition-all ease-in-out duration-500 w-full text-md font-normal 
                        grid lg:grid-cols-2 gap-4 lg:mt-2 px-6
                    `}
                >
                  <div className="lg:py-2 flex flex-col justify-between">
                    <div className="">
                      {project.feats.map((feat, index) => (
                        <div key={index} className="flex gap-x-2 py-2">
                          <span className="">✱</span>
                          <span>{feat.paragraph}</span>
                        </div>
                      ))}

                      <div>
                        <span className="text-[14px] font-semibold">
                          Technologies Used
                        </span>
                        <div className="flex gap-1 flex-wrap">
                          {project.languages.map((language, index) => (
                            <div
                              className="px-4 p-1 border-1 w-fit rounded-sm"
                              key={index}
                            >
                              {language.language}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {project.link != null ? (
                      <p className="mt-4 cursor-pointer">
                        <a
                          href={project.link}
                          className={`bg-blue-800 border-1 border-blue-950 text-white block p-2 text-center rounded-sm`}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Visit here
                        </a>
                      </p>
                    ) : null}
                  </div>
                  <div className="">
                    <img
                      src={imageMap[project.image] || project.image}
                      alt={project.name}
                      className="rounded-md"
                    />
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
        text-gray-100 ${props.className}
        transition-all ease-in-out duration-400 pt-10 bg-zinc-950
      `}
    >
      <div className="min-w-100" id="FrameOneAdvanced">
        <div className="flex justify-center items-center w-full h-[calc(100vh-5vh)] flex-col">
          <div className="flex justify-center items-center flex-col z-[99] bg-zinc-950/40 p-15 lg:p-20 px-5 lg:px-25 backdrop-blur-sm border-white/20 hover:border-2 rounded-[45px_5px_45px_5px] transition-all ease-in-out duration-500">
            <span className="text-2xl lg:text-4xl mb-4">
              Hey, I am{" "}
              <b className="text-3xl lg:text-5xl text-blue-500 ml-4">
                Taki Ahmed
              </b>
            </span>
            <span className="text-lg lg:text-xl">
              A Fullstack Website Developer
            </span>
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
          <h1 className="text-lg lg:text-xl font-bold mb-4">About Me</h1>
          <p className="lg:text-lg">
            I am <b>Taki Ahmed</b>, an 18-year-old second-year Software
            Engineering student from Bangladesh, passionate about Full Stack
            development.
            <br />
            <br />
            My focus is on building scalable, high-performance web solutions
            that align with user needs and business goals. With a commitment to
            accessibility, responsiveness, and clean code, I aim to create
            engaging digital experiences that deliver measurable impact.
          </p>
        </div>
        <div className="z-101">
          <span className="text-lg lg:text-xl font-bold">My Skillset</span>
          <div className="mt-4 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 lg:grid-cols-4 gap-2">
            {skills}
          </div>
        </div>
      </div>
      <div
        className="min-w-100 lg:min-w-200 border-t-1 border-zinc-800 py-10
                  grid gap-4 px-5 lg:px-10"
        id="FrameThreeAdvanced"
      >
        <div className="z-100 bg-zinc-950/40 backdrop-blur-md p-5 lg:px-10 rounded-xl">
          <h1 className="text-xl font-bold mb-4 ">Experience</h1>
          <div className="">{experience}</div>
        </div>
      </div>
      {/* <div
        className="min-w-100 lg:min-w-200 border-t-1 border-zinc-800 py-10
                  grid lg:grid-cols-2 gap-4 px-5"
        id="FrameFourAdvanced"
      >
        <div className="z-100">
          <h1 className="text-xl font-bold mb-4">Projects</h1>
        </div>
      </div> */}
    </div>
  );
}

export default AdvancedHome;
