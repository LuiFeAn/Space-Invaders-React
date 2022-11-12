import { useEffect, useState, useRef, useCallback, useMemo } from "react";
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
    
    const [ horizontalMove, setHorizontalMove ] = useState(0);

    const naveLeftMoviment = useCallback( () => {
        setHorizontalMove( 
            PrevValue => PrevValue +  velocity 
        );
    },[])

    const naveRightMoviment = useCallback( () => {
        setHorizontalMove( 
            PrevValue => PrevValue + - velocity 
        );
    },[])

   useEffect( () => {

        if(onGameStart && window.screen.width > 760 && window.screen.height > 760){

            document.addEventListener('keyup', (event) => {

                const onClickKey = {
        
                    'a': () => {
                        naveLeftMoviment();
                    },

                    'd': () => {
                        naveRightMoviment();
                    },
                    default: () => null

                }
        
               try{ onClickKey[event.key](); }catch{ onClickKey.default();}
        
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

   useEffect( () => {

    if(onGameStart){
        document.addEventListener('keypress', (event) => {
            if(event.key === 'p'){
                createBullet();
            }
        });
    }
    
   },[onGameStart]);

   useEffect( () => {
    const naveDirections = naveRef.current.getBoundingClientRect();
        if(naveDirections){
            const { left, right } = naveDirections;  
            if(right > window.screen.width - 40  || left <= 40){
                setHorizontalMove(0);
            }
        }
   },[horizontalMove])


   function handleNaveMobileMoviment(direction){

        const makeDirection = {

            'right':() => {
                naveRightMoviment();
            },
            'left': () => {
                naveLeftMoviment();
            }
        }

        makeDirection[direction]();

   }
    
    return(
        <S.NaveContainer>

            <S.NaveAndHelfsContainer ref={naveRef} onHorizontalMove={horizontalMove} src={nave}>

                <S.NaveHalf ref={leftHelf} halfPosition={15}/>
                <S.NaveHalf ref={rightHelf} halfPosition={78}/>
                <S.NaveStyleImage src={nave}/>

            </S.NaveAndHelfsContainer>

            <S.MobileInputsContainer>

                <div className="left-mobile-container">
                    <S.MobileInputButton onClick={ () => handleNaveMobileMoviment('left')}>{"<"}</S.MobileInputButton>
                </div>

                <div className="right-mobile-container">
                    <S.MobileInputButton onClick={ () => handleNaveMobileMoviment('right')}>{">"}</S.MobileInputButton>
                </div>
                
            </S.MobileInputsContainer>
                
        </S.NaveContainer>
    )

}