import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="mb-20 mt-7 flex items-center justify-between py-6 text-black">
      <div className="flex-shrink-0 items-center lg:text-2xl text-xl">
        ThinkSpace
      </div>

      <div className="flex gap-5 items-center">
        <a href="https://www.facebook.com/Gem.Rey13" target="_blank">
          Thoughts
        </a>
        <a href="https://www.facebook.com/Gem.Rey13" target="_blank">
          What about me?
        </a>
        <a href="https://www.facebook.com/Gem.Rey13" target="_blank">
          Recommendation
        </a>
      </div>

      <div className="flex items-center justify-center text-xl">Follow Me</div>
    </nav>
  );
};

export default Header;
