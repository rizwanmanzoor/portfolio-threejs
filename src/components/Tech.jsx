import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Skills</p>
        <h2 className={styles.sectionHeadText}>Expertise.</h2>
      </motion.div>

      <div className='flex flex-row flex-wrap justify-center gap-10 mt-6'>
        {technologies.map((technology) => (
          <div className='w-28 h-28' key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");