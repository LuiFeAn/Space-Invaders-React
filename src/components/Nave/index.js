import { useEffect, useState, useRef, useCallback } from "react";
import NaveLimitMove from "../NaveLimitMove";
import * as S from './style';

import nave from '../../assets/images/nave.gif'

export default function Nave ({onGameStart}){

    const naveRef = useRef(null);
    const leftHelf = useRef(null);
    const rightHelf = useRef(null);

    const [ hp, setHp ] = useState(200);
    const [ velocity, setVelocity ] = useState(50);
    const [ attack, setAttack ] = useState(50);

    const [ bulletVelocity, setBulletVelocity ] = useState(30);
    
    const [ verticalMove, setVerticalMove ] = useState(0);
    const [ horizontalMove, setHorizontalMove ] = useState(20);

   useEffect( () => {

        if(onGameStart){

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
        }
   },[onGameStart,velocity]);


   function createBullet(){
        
        const rightBullet = document.createElement('div');
        const leftBullet = document.createElement('div');
        rightBullet.classList.add('nave-bullet');
        leftBullet.classList.add('nave-bullet');
        rightHelf.current.appendChild(rightBullet);
        leftHelf.current.appendChild(leftBullet);

   }


   function addBulletMoviment(){
    setInterval(() => {
        console.log('passou');
    },2000)
   }

   useEffect( () => {

    if(onGameStart){
        document.addEventListener('keypress', (event) => {
            if(event.key === 'p'){
                createBullet();
            }
        });
    }
    
   },[onGameStart])
    
    return(
        <NaveLimitMove>

            <S.NaveAndHelfsContainer ref={naveRef} onHorizontalMove={horizontalMove} onVerticalMove={verticalMove} src={nave}>

                <S.NaveHalf ref={leftHelf} halfPosition={40}/>
                <S.NaveHalf ref={rightHelf} halfPosition={102}/>
                <S.NaveStyleImage src={nave}/>

            </S.NaveAndHelfsContainer>
                
        </NaveLimitMove>
    )

}