import { useEffect, useState } from "react";
import * as S from './style';

import nave from '../../assets/images/nave.gif'

export default function Nave (){

    const [ hp, setHp ] = useState(200);
    const [ velocity, setVelocity ] = useState(30);
    const [ attack, setAttack ] = useState(50);

    const [ verticalMove, setVerticalMove ] = useState(0);
    const [ horizontalMove, setHorizontalMove ] = useState(0);

    useEffect( () => {
        document.addEventListener('keypress', (event) => {

            const onClickKey = {

                'w': () => {
                    setVerticalMove( PrevValue => PrevValue + velocity );
                },
                'a': () => {
                    setHorizontalMove( PrevValue => PrevValue + velocity);
                },
                's': () => {
                    setVerticalMove( PrevValue => PrevValue + -velocity);
                },
                'd': () => {
                    setHorizontalMove( PrevValue => PrevValue + - velocity);
                }
            }

            onClickKey[event.key]();

        });

    },[]);
    
    return(
        <S.NaveContainer>
            <S.NaveStyleImage onHorizontalMove={horizontalMove} onVerticalMove={verticalMove} src={nave}/>
        </S.NaveContainer>
    )

}