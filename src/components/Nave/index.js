import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import * as S from './style';

import nave from '../../assets/images/nave.gif';
import shotSprite from '../../assets/images/shot.png';
import naveShot from '../../assets/sound/nave-shot.wav';

export default function Nave ({onGameStart}){

    const naveRef = useRef(null);
    const leftHelf = useRef(null);
    const rightHelf = useRef(null);

    const [ hp, setHp ] = useState(200);
    const [ velocity, setVelocity ] = useState(50);
    const [ attack, setAttack ] = useState(50);
    const [ bulletVelocity, setBulletVelocity ] = useState(50);

    const [ horizontalMove, setHorizontalMove ] = useState(0);

    const shotSound = useMemo ( () => new Audio(naveShot),[]);

    useEffect( () => {

        if(onGameStart && window.screen.width > 760 && window.screen.height > 760){

            document.addEventListener('keypress', (event) => {

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
            if(right > window.screen.width - 30  || left <= 50){
                setHorizontalMove(0);
            }
        }
   },[horizontalMove])

    const createBullet = async () => {

        await shotSound.play();
        const rightBullet = document.createElement('img');
        const leftBullet = document.createElement('img');

        rightBullet.setAttribute('src',shotSprite);
        leftBullet.setAttribute('src',shotSprite);

        rightBullet.classList.add('nave-bullet');
        leftBullet.classList.add('nave-bullet');

        rightHelf.current.appendChild(rightBullet);
        leftHelf.current.appendChild(leftBullet);


        bulletDirection([leftBullet,rightBullet]);

    }

    const naveLeftMoviment = () => {
        setHorizontalMove(
            PrevValue => PrevValue +  velocity
        );
    };

    const naveRightMoviment =  () => {
        setHorizontalMove(
            PrevValue => PrevValue + - velocity
        );
    };

    const bulletDirection = (bullets) => {

        const [ leftBullet, rightBullet ] = bullets;

        let currentBulletsPosition = 0;

        setInterval(() => {
            currentBulletsPosition += bulletVelocity;
            leftBullet.style.bottom = `${currentBulletsPosition}px`;
            rightBullet.style.bottom = `${currentBulletsPosition}px`;
        },100);

    }


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

                <S.NaveHalf ref={leftHelf} halfPosition={-6}/>
                <S.NaveHalf ref={rightHelf} halfPosition={55}/>
                <S.NaveStyleImage src={nave}/>

            </S.NaveAndHelfsContainer>

            <S.MobileInputsContainer>

                <div className="left-mobile-container">
                    <S.MobileInputButton onClick={ () => handleNaveMobileMoviment('left')}>{"<"}</S.MobileInputButton>
                </div>

                <div className="mobile-attack">
                    <S.MobileInputButton onClick={createBullet}>A</S.MobileInputButton>
                </div>

                <div className="right-mobile-container">
                    <S.MobileInputButton onClick={ () => handleNaveMobileMoviment('right')}>{">"}</S.MobileInputButton>
                </div>

            </S.MobileInputsContainer>

        </S.NaveContainer>
    )

}
