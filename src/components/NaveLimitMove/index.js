import { useState, useEffect, useRef } from "react";
import * as S from './style';

export default function NaveLimitMove({children}){

  const naveContainerRef = useRef(null);

  const [ containerLimitHorizontal, setContainerLimitHorizontal ] = useState(0);
  const [ containerLimitVertical, setContainerLimitVertical ] = useState(0);

  useEffect( () => {
    setContainerLimitHorizontal(naveContainerRef.current.offsetWidth);
    setContainerLimitVertical(naveContainerRef.current.offsetHeight);
  },[]);

    return(
       <S.NaveContainer ref={naveContainerRef}>
         {children}
       </S.NaveContainer>
    )

}