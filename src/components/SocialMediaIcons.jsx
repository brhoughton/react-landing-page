import github from "./github.svg";
import linkedin from "./linkedin.svg";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-left md:justify-start my-5 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/breck-houghton/"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={linkedin}
          style={{ width: "auto", height: "30px" }}
          alt="linkedin-link"
        />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/brhoughton"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={github}
          style={{ width: "auto", height: "30px" }}
          alt="github-link"
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
