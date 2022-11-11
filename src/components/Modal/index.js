import * as S from './style';
import  ReactPortal  from 'react-dom';
import Button from '../Button';

export default function Modal({title, onGameStart, changeGameStart}){

    const handleGameStart = () => changeGameStart(true);

    return ReactPortal.createPortal(
        <S.ModalContainer>
            
            <p>{title}</p>
            <Button onClick={handleGameStart}> Jogar </Button>
            <Button> Sair </Button>

        </S.ModalContainer>,
        document.getElementById('modal-root')
    )

}