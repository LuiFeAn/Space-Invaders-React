import * as S from './style';
import  ReactPortal  from 'react-dom';
import Button from '../Button';

export default function Modal({title,titleTwo, onGameStart, changeGameStart}){

    const handleGameStart = () => changeGameStart(true);

    const quitGame = () => window.close();

    return ReactPortal.createPortal(
        <S.ModalContainer>

            <p>{title}</p>
            <span>{titleTwo}</span>
            <Button onClick={handleGameStart}> Jogar </Button>
            <Button onClick={quitGame}>Sair</Button>

        </S.ModalContainer>,
        document.getElementById('modal-root')
    )

}
