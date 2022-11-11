import styled from "styled-components";

export const NaveAndHelfsContainer = styled.div`


    width: 150px;
    height: 150px;
    user-select: none;
    position:relative;
    transition: 1s;
    right: ${({ onHorizontalMove }) => onHorizontalMove ? `${onHorizontalMove}px` : 'auto'};
    bottom:${({ onVerticalMove }) => `${onVerticalMove}px`};


`;

export const NaveHalf = styled.div`

    background:white;
    position: absolute;
    left:${({halfPosition}) => `${halfPosition}px`};
    width:10px;
    height:10px;
    top:50px;

`;

export const NaveStyleImage = styled.img`

    width: 150px;
    height:150px;
    
`;