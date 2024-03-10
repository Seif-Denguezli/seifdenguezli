import React, { useEffect, useState } from "react";
import Tilt from "react-tilt";
import { AnimatePresence, motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import Modal from "./Modal";
import { close, enter, github } from "../assets";

const ProjectCard = ({
  index,
  name,
  header,
  description,
  tags,
  image,
  source_code_link,
  showcase_images,
  website_link,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Add or remove a class to the body to disable or enable scrolling
    document.body.style.overflow = isModalOpen ? "hidden" : "visible";

    // Cleanup function to remove the style when the component unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isModalOpen]);

  return (
    <div>
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div
            className="relative w-full h-[230px] cursor-pointer"
            onClick={() => (window.innerWidth < 600 ? null : handleOpenModal())}
          >
            <img
              src={image}
              alt="project_image"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{header}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <Modal images={showcase_images}>
            <div className="mb-6 border border-l-0 border-r-0 border-t-0 border-b-2 pb-3 border-b-gray-600">
              <div className="flex flex-row items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">{name}</h2>
                {source_code_link && (
                  <div
                    onClick={() => window.open(source_code_link, "_blank")}
                    className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                  >
                    <img
                      src={github}
                      alt="source code"
                      className="w-1/2 h-1/2 object-contain"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-row gap-2 flex-wrap mt-3">
                {tags.map((tag) => (
                  <img
                    src={tag.image}
                    alt="tech-logo"
                    className="w-8 h-8 rounded-full object-contain"
                  />
                ))}
              </div>
            </div>

            <p className="text-gray-700 mb-4">{description}</p>
            {console.log(website_link)}
            <div className="flex justify-between pt-10">
              {!!website_link ? (
                <a
                  href={website_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row justify-center items-center gap-3 bg-tertiary text-white py-2 px-8 rounded-full hover:bg-opacity-80 transition duration-300 hover:-translate-x-1"
                >
                  <img
                    src={enter}
                    alt="enter"
                    className="w-4 h-4 rounded-full"
                  />
                  Visit Website
                </a>
              ) : (
                <button
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-row justify-center items-center gap-3 bg-tertiary opacity-60 cursor-not-allowed text-white py-2 px-8 rounded-full"
                  disabled
                >
                  <img
                    src={enter}
                    alt="enter"
                    className="w-4 h-4 rounded-full"
                  />
                  Visit Website
                </button>
              )}

              <button
                onClick={handleCloseModal}
                className="flex flex-row justify-center items-center gap-3 bg-tertiary text-white py-2 px-8 rounded-full hover:bg-opacity-80 transition duration-300 hover:scale-105"
              >
                <img src={close} alt="close" className="w-4 h-4 rounded-full" />
                Close
              </button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
