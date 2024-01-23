import { motion } from "framer-motion";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";

const MySkills = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="experience" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">EXPERIENCE</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-20 before:w-full md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img className="z-10" src="assets/skills-image.png" alt="skills" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Front-End
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-green-500 absolute right-0 top-0 z-[-1]"></div>
          </div>
          <p className="mt-5 text-sm text-left leading-6">
            Honed over many years of hands-on experience and continued
            education, I've navigated the evolving landscape of design and
            technology, seamlessly integrating my expertise in front-end
            development to create immersive and user-centric interfaces.
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Design
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]"></div>
          </div>
          <p className="mt-5 text-sm text-left leading-6">
            As a Creative Director, my aim is to continually challenge and
            inspire, fostering an environment where creativity thrives,
            innovation flourishes, and every project tells a compelling story.
          </p>
        </motion.div>

        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Render
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-purple-600 absolute right-0 top-0 z-[-1]"></div>
          </div>
          <p className="mt-5 text-sm text-left leading-6">
            Motion design has allowed me to craft dynamic visual narratives that
            leave a lasting impact, while my proficiency in 3D modeling and
            rendering adds depth and realism to projects, elevating them to new
            heights.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
