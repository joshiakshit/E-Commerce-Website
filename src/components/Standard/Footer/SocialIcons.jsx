import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-[#EC8305]">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-400
        duration-300 "
        >
          <FontAwesomeIcon icon={icon.name} />
        </span>
        
      ))}
    </div>
  );
};

export default SocialIcons;
