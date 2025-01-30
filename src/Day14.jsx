import { useRef } from "react";
import "./Day14.css";
import React, { useState } from "react";
import { useEffect } from "react";

function Day14() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebarVisible(false); 
      }
    };

    if (isSidebarVisible) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isSidebarVisible]);

  const tooltips = [
    { text: "This is my Button 1", alignment: "Left" },
    { text: "This is my Hover 1", alignment: "Top" },
    { text: "This is my Button 2", alignment: "Right" },
    { text: "This is my Hover 2", alignment: "Left" },
    { text: "This is my Button 3", alignment: "Top" },
    { text: "This is my Hover 3", alignment: "Right" },
    { text: "This is my Button 4", alignment: "Left" },
    { text: "This is my Hover 4", alignment: "Bottom" },
    { text: "This is my Button 5", alignment: "Right" },
  ];

  return (
    <div className="sidebar-container">
      <div className={`content ${isSidebarVisible ? "dimmed" : ""}`}>
        {Array.from({ length: 9 }).map((_, i) => (
          <div className="card" key={i}>
            {i % 2 === 0 ? (
              <Button
                text={tooltips[i].text}
                alignment={tooltips[i].alignment}
                onClick={(e) => {
                  if (i === 4) 
                  {
                    e.stopPropagation();
                    setIsSidebarVisible(true);
                  }
                }}
              />
            ) : (
              <Hover text={tooltips[i].text} alignment={tooltips[i].alignment} />
            )}
          </div>
        ))}
      </div>

      <div className={`sidebar ${isSidebarVisible ? "visible" : ""}`} ref={sidebarRef}>
        <button className="close-btn" onClick={() => setIsSidebarVisible(false)}>
          Close
        </button>
        <p style={{color:"black"}}>Sidebar Content</p>
      </div>
    </div>
  );
}

export default Day14;

const Tooltip = ({ isButton = false, text, children, alignment }) => {
  const [visible, setVisible] = useState(false);
  const buttonRef = useRef();

  const getAlignmentClass = (alignment) => {
    switch (alignment) {
      case "Top":
        return "Top";
      case "Bottom":
        return "Bottom";
      case "Left":
        return "Left";
      case "Right":
        return "Right";
      default:
        return "";
    }
  };

      useEffect(() => {
        let handler = (e) => {
            if (!buttonRef.current.contains(e.target)) setVisible(false);
        };
        document.addEventListener("click", handler);

        return () => {
            document.removeEventListener("click", handler);
        };
    }, []);

  return (
    <div
      className="tooltip-container" ref={buttonRef}
      {...(isButton
        ? { onClick: () => setVisible((prev) => !prev) }
        : {
            onMouseOver: () => setVisible(true),
            onMouseOut: () => setVisible(false),
          })}
    >
      {children}
      {visible && (
        <div className={`tooltip-text ${getAlignmentClass(alignment)}`}>
          {text}
        </div>
      )}
    </div>
  );
};

const Button = ({ text, alignment, onClick }) => {
  return (
    <Tooltip text={text} alignment={alignment} isButton={true}>
      <button onClick={onClick}>Click me</button>
    </Tooltip>
  );
};

const Hover = ({ text, alignment }) => {
  return (
    <Tooltip text={text} alignment={alignment}>
      <span>Hover over me </span>
    </Tooltip>
  );
};

