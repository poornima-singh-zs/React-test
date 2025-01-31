import  { useState } from "react";
import './Accordian.css'
// eslint-disable-next-line react/prop-types
export const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          <span
            aria-hidden={true}
            className={
              !isActive
                ? "accordion-icon"
                : "accordion-icon accordion-icon-rotated"
            }
          />
        </div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};