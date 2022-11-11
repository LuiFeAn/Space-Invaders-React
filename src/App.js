import Nave from "./components/Nave";
import { ScoreContainer } from "./appStyles";
import GlobalStyles from "./assets/styles/globalStyles";
import { useState } from "react";
import Modal from './components/Modal';

export default function App(){

  const [ gameStart, setGameStart ] = useState(false);
  const [ score, setScore ] = useState(0);

  return (
    <div>
      <ScoreContainer>
         { !gameStart &&  <Modal title={'SPACE INVADERS'} onGameStart={gameStart} changeGameStart={setGameStart}/>}
          <span>
            {`SCORE: ${score}`}
          </span>
        </ScoreContainer>
        <GlobalStyles/>
        <Nave onGameStart={gameStart}/>
    </div>
  )
}