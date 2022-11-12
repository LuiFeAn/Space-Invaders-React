import Nave from "./components/Nave";
import { ScoreContainer, Container } from "./appStyles";
import GlobalStyles from "./assets/styles/globalStyles";
import { useEffect, useState, useMemo } from "react";
import Modal from './components/Modal';

import soundIcon from './assets/images/sound.jpg';
import soundOffIcon from './assets/images/sound-off.png';

import menuGameSound from './assets/sound/menu-game.mp3'

export default function App(){

  const [ gameStart, setGameStart ] = useState(false);
  const [ audioPlay, setAudioPlay ] = useState(false);

  const [ score, setScore ] = useState(0);

  const playAudio = useMemo( () => new Audio(menuGameSound),[]);

  const handlePlayAudio = () => {

    if(!audioPlay){
        setAudioPlay(true);
        playAudio.play();
    }else{
      setAudioPlay(false);
      playAudio.pause();
    }

  }

  useEffect( () => {
      document.addEventListener('keypress', (event) => {
          if(event.key === 'Enter'){
            setGameStart(false);
          }
      })
  },[]);

  return(
    <Container>
        { !gameStart && <Modal title={'SPACE INVADERS'} titleTwo={`ReactJs Edition`} onGameStart={gameStart} changeGameStart={setGameStart}/>}
        <ScoreContainer>
            <img onClick={handlePlayAudio} src={ audioPlay ? soundOffIcon : soundIcon}/>
            <span>{`SCORE: ${score}`}</span>
          </ScoreContainer>
          <GlobalStyles/>
          <Nave onGameStart={gameStart}/>
    </Container>
  )
}