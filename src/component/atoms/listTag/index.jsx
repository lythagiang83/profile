import React, { useState } from "react";
import { MENU_LIST } from "../../../interfaces/constants";
import { About } from "../molecules/about";

export const ListTag = ({ className = "", style }) => {
  const [isPopup, setPopup] = useState(false);
  return (
    <div className={`a-list-tag ${className}`}>
      <div className="a-list-tag__words">
        {MENU_LIST.map((item) => (
          <p>
            <a onClick={() => setPopup(true)}>{item.name}</a>
          </p>
        ))}
      </div>
      {isPopup && <About />}
    </div>
  );
};
