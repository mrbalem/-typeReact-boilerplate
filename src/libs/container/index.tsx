/**
 *  @version 1.0.0
 *  @author Mrvalem - digitalsNews
 *  @description Componente Container
 */

import * as React from "react";

export interface ContainerProps {
  animationDuration: number;
  children: React.ReactNode;
  isFinished: boolean;
}

const Container: React.SFC<ContainerProps> = (props) => {
  const { children, isFinished, animationDuration } = props;
  return (
    <div
      style={{
        opacity: isFinished ? 0 : 1,
        pointerEvents: "none",
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      {children}
    </div>
  );
};

export default Container;
