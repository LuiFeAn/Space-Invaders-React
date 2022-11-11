import { useState, useEffect, useRef } from "react";
import * as S from './style';

export default function NaveLimitMove({children}){

  const [ containerLimitHorizontal, setContainerLimitHorizontal ] = useState();
  const [ containerLimitVertical, setContainerLimitVertical ] = useState();

  const naveContainerRef = useRef(null);


  useEffect( () => {

  },[]);

    return(
       <S.NaveContainer ref={naveContainerRef}>
         {children}
       </S.NaveContainer>
    )

}