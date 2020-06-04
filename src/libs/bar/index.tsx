/**
 *  @version 1.0.0
 *  @author Mrvalem - DigitalNews
 *  @description Componente Bar
 */

import * as React from "react";

export interface BarProps {
  progress: number;
  animationDuration: number;
}

const Bar: React.SFC<BarProps> = (props) => {
  const { progress, animationDuration } = props;
  return (
    <div
      style={{
        background: "#2bb593",
        height: 4,
        left: 0,
        marginLeft: `${(-1 + progress) * 100}%`,
        position: "fixed",
        top: 0,
        transition: `margin-left ${animationDuration}ms linear`,
        width: "100%",
        zIndex: 1031,
      }}
    >
      <div
        style={{
          boxShadow: "0 0 10px #29d, 0 0 5px #29d",
          display: "block",
          height: "100%",
          opacity: 1,
          position: "absolute",
          right: 0,
          transform: "rotate(3deg) translate(0px, -4px)",
          width: 100,
        }}
      />
    </div>
  );
};

export default Bar;
