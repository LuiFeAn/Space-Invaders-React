import styled from "styled-components";

export const NaveAndHelfsContainer = styled.div`


    width: 150px;
    height: 150px;
    user-select: none;
    position:relative;
    transition: 1s;
    right: ${({ onHorizontalMove }) => `${onHorizontalMove}px`};
    bottom:100px;


`;


export const MobileInputsContainer = styled.div`

    .left-mobile-container, .right-mobile-container{
        position: absolute;
        bottom: 10px;
    }

    .left-mobile-container{
       left:10px;
    }

    .right-mobile-container{
        right: 10px;
    }

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

export const MobileInputButton = styled.button`

    width:100px;
    height:100px;
    border-radius:100%;
    display: none;
    opacity: 60%;
    background:black;
    color:white;
    font-size:45px;

    @media(max-width:780px){
        display: block;
    }

`;