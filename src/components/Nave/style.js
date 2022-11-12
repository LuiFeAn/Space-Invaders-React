import styled from "styled-components";

export const NaveAndHelfsContainer = styled.div`


    width: 150px;
    height: 150px;
    user-select: none;
    position:relative;
    transition: 1s;
    right: ${({ onHorizontalMove }) => `${onHorizontalMove}px`};
    bottom:10px;


`;

export const NaveHalf = styled.div`

    position: absolute;
    left:${({halfPosition}) => `${halfPosition}px`};
    width:10px;
    height:10px;
    top:50px;

    .nave-bullet{
        width: 10px;
        height: 10px;
        background: green;
        transition:1s;
        position: absolute;
        border-radius: 100%;
    }

`;

export const NaveBullet = styled.div`


    width: 10px;
    height: 10px;
    background: green;
    position: absolute;
    border-radius: 100%;


`;

export const NaveStyleImage = styled.img`

    width: 150px;
    height:150px;
    
`;