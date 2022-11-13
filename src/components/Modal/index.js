import { useEffect, useCallback } from 'react';
import * as S from './style';
import  ReactPortal  from 'react-dom';
import Button from '../Button';

export default function Modal({title,titleTwo, onGameStart, changeGameStart, onPauseGame,setPauseGame}){

    const handleGameStart = () => changeGameStart(true);
    const quitGame = () => window.close();

    const PauseGame = useCallback( function (event){
        if(event.key === 'Enter'){
            changeGameStart(false);
            setPauseGame(true);
          }
    },[]);

    useEffect( () => {
        document.addEventListener('keypress',PauseGame);
    },[]);

    return ReactPortal.createPortal(
        <S.ModalContainer>

            <p>{ onPauseGame ? 'Jogo Pausado' : title}</p>
            <span>{ ! onPauseGame && titleTwo }</span>
            <Button onClick={handleGameStart}>{ onPauseGame ? 'Continuar' : 'Jogar'}</Button>
            <Button onClick={quitGame}>Sair</Button>

        </S.ModalContainer>,
        document.getElementById('modal-root')
    )

}
