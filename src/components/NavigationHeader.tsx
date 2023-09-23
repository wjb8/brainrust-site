import React from "react";
import Title from "./Title";
import NavLinks from "./NavLinks";
import SocialMediaIcons from "./SocialMediaIcons";

interface NavigationHeaderProps {}

const NavigationHeader: React.FC<NavigationHeaderProps> = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="flex items-center justify-between">
        <NavLinks />
        <Title />
        <SocialMediaIcons />
      </div>
    </nav>
  );
};

export default NavigationHeader;
