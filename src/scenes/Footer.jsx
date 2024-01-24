import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-dark pt-10">
      <div className="w-5/6 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-left">
          <p className="font-playfair font-semibold text-2xl text-white">
            Breck Houghton
          </p>
          <p className="font-playfair text-sm text-white pt-5">
            ©2024 Breck Houghton. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
