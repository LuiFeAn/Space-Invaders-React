import { useState, useEffect, useRef } from "react";
import * as S from './style';

export default function NaveLimitMove({children}){

    return(
       <S.NaveContainer>
         {children}
       </S.NaveContainer>
    )

}