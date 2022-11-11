import { useEffect, useState, useRef, useCallback } from "react";
import NaveLimitMove from "../NaveLimitMove";
import * as S from './style';

import nave from '../../assets/images/nave.gif'

export default function Nave (){

    const naveRef = useRef(null);

    const [ hp, setHp ] = useState(200);
    const [ velocity, setVelocity ] = useState(50);
    const [ attack, setAttack ] = useState(50);

    const [ verticalMove, setVerticalMove ] = useState(0);
    const [ horizontalMove, setHorizontalMove ] = useState(250);

    const naveMovimentation = useCallback( () => {

        document.addEventListener('keyup', (event) => {

            const onClickKey = {

                'w': () => {
                    setVerticalMove( 
                        PrevValue => PrevValue + velocity 
                    );
                },
                'a': () => {
                    setHorizontalMove( 
                        PrevValue => PrevValue + velocity 
                    );
                },
                's': () => {
                    setVerticalMove( 
                        PrevValue => PrevValue + - velocity 
                    );
                },
                'd': () => {
                    setHorizontalMove( 
                        PrevValue => PrevValue + - velocity 
                    );
                }
            }

            onClickKey[event.key]();

        });
    },[velocity]);


    const naveAttack = useCallback( () => {

        document.addEventListener('keypress', (event) => {
            if(event.key === 'p'){
                alert('Atacou');
            }
        })

    },[]);

    useEffect( () => {
        naveMovimentation();
        naveAttack();
    },[naveMovimentation,naveAttack]);
    
    return(
        <NaveLimitMove>
            
            <S.NaveAndHelfsContainer ref={naveRef} onHorizontalMove={horizontalMove} onVerticalMove={verticalMove} src={nave}>

                <S.NaveHalf halfPosition={40}/>
                <S.NaveHalf halfPosition={102}/>
                <S.NaveStyleImage src={nave}/>

            </S.NaveAndHelfsContainer>
                
        </NaveLimitMove>
    )

}