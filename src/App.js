import Nave from "./components/Nave";
import { ScoreContainer } from "./appStyles";
import GlobalStyles from "./assets/styles/globalStyles";
import { useState } from "react";

export default function App(){

  const [ score, setScore ] = useState(0);

  return (
    <>
      <ScoreContainer>
        <span>
          {`SCORE: ${score}`}
        </span>
      </ScoreContainer>
      <GlobalStyles/>
      <Nave/>
    </>
  )
}