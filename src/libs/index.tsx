/**
 *  @version 1.0.0
 *  @author Mrvalem - Rony cb
 *  @description Componente Progress
 */

import * as React from "react";
import { useNProgress } from "@tanem/react-nprogress";
import Container from "./container";
import Bar from "./bar";
import Spinner from "./spinner";

export interface ProgessProps {
  isAnimating: boolean;
}

const Progess: React.SFC<ProgessProps> = (props) => {
  const { isAnimating } = props;
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <Container isFinished={isFinished} animationDuration={animationDuration}>
      <Bar progress={progress} animationDuration={animationDuration} />
      <Spinner />
    </Container>
  );
};

export default Progess;
