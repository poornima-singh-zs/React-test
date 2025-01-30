import { useRef } from "react";
import "./App1.css";
import React, { useState } from "react";
import { useEffect } from "react";
function App1() {
  const tooltips = [
    {
      text: "This is my Button 1",
      alignment: "Left",
    },
    {
      text: "This is my Hover 1",
      alignment: "Top",
    },
    {
      text: "This is my Button 2",
      alignment: "Right",
    },
    {
      text: "This is my Hover 2",
      alignment: "Left",
    },
    {
      text: "This is my Button 3",
      alignment: "Top",
    },

    {
      text: "This is my Hover 3",
      alignment: "Right",
    },
    {
      text: "This is my Button 4",
      alignment: "Left",
    },
    {
      text: "This is my Hover 4",
      alignment: "Bottom",
    },
    {
      text: "This is my Button 5",
      alignment: "Right",
    },
  ];

  return (
    <main>
      {Array.from({ length: 9 }).map((_, i) => (
        <div className="card">
          {i % 2 === 0 ? (
            <Button key = {i}text={tooltips[i].text} alignment={tooltips[i].alignment} />
          ) : (
            <Hover key = {i+1}text={tooltips[i].text} alignment={tooltips[i].alignment} />
          )}
        </div>
      ))}
    </main>
  );
}

export default App1;

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
    }
  };

  useEffect(() => {
    let handler = (e) => {
      if (!buttonRef.current.contains(e.target)) setVisible(false);
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div
      className="tooltip-container "
      ref={buttonRef}
      {...(isButton
        ? {
          onClick: () => {
            setVisible((prev) => !prev);
          },
        }
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

const Button = ({ text, alignment }) => {
  return (
    <Tooltip text={text} alignment={alignment} isButton={true}>
      <button>Click me</button>
    </Tooltip>
  );
};

const Hover = ({ text, alignment }) => {
  return (
    <Tooltip text={text} alignment={alignment}>
      <span>Hover over me</span>
    </Tooltip>
  );
};
