import styled from "styled-components";


export const NaveContainer = styled.div`

    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0px;

`;

export const NaveAndHelfsContainer = styled.div`


    width: 100px;
    height: 150px;
    user-select: none;
    display: flex;
    justify-content: center;
    position:relative;
    transition: 1s;
    right: ${({ onHorizontalMove }) => `${onHorizontalMove}px`};
    bottom:50px;


`;


export const MobileInputsContainer = styled.div`

    .left-mobile-container, .right-mobile-container,.mobile-attack{
        position: absolute;
        bottom: 10px;
    }

    .left-mobile-container{
       left:10px;
    }

    .right-mobile-container{
        right: 10px;
    }

    .mobile-attack{

        bottom:150px;
        right:50px;

        button{
            width: 80px;
            height: 80px;
        }
    }

`;

export const NaveHalf = styled.div`

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
