import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, img }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair text-white">{title}</p>
        <p className="mt-7 font-playfair text-sm text-white">{subtitle}</p>
      </div>
      <img src={`/assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-32 pb-20">
      {/* HEADINGS */}

      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl mb-5">
            PRO<span className="text-red">JECTS</span>
          </p>
          <div className="flex mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">Some copy about projects and shit.</p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {/* ROW 1 */}
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BULLSHIT BULLSHIT BULLSHIT
          </div>
          <Project title="Project 1" subtitle="Oh this is a lot of shit." />
          <Project title="Project 2" subtitle="Oh this is a lot of shit." />

          {/* ROW 2 */}
          <Project title="Project 3" subtitle="Oh this is a lot of shit." />
          <Project title="Project 4" subtitle="Oh this is a lot of shit." />
          <Project title="Project 5" subtitle="Oh this is a lot of shit." />

          {/* ROW 3 */}
          <Project title="Project 6" subtitle="Oh this is a lot of shit." />
          <Project title="Project 7" subtitle="Oh this is a lot of shit." />
          <div className="flex justify-center text-center items-center p-10 bg-blue max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
            BULLSHIT BULLSHIT BULLSHIT
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
