import styled from "styled-components";


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
    }

`;