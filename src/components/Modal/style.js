import styled, { keyframes } from "styled-components";

const titleAnimation = keyframes`

    0%{
       color: red;
       font-size:10px;
    }

    5%{
        font-size:20px;
    }


`;

const titleTwoAnimation = keyframes`

    0%{
        opacity: 100%;
    }

    5%{
        opacity: 90%;
    }

    10%{
        opacity: 80%;
    }

    15%{
        opacity: 70%;
    }

    20%{
        opacity: 60%;
    }

    25%{
        opacity: 50%;
    }

    30%{
        opacity: 40%;
    }

`;


export const ModalContainer = styled.div`

    width: 100%;
    height: 100vh;
    position: absolute;
    top:0px;
    right: 0px;
    background:rgba(0, 0, 0, 0.498);;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    image-rendering: pixelated;

    p{
        color:white;
        text-align: center;
        font-size:55px;
        top:220px;
        animation: ${titleAnimation} 2.5s;
    }

    span{
        color:white;
        font-size:25px;
        margin-left:150px;
        animation: ${titleTwoAnimation} 1.7s infinite;
    }


`;
