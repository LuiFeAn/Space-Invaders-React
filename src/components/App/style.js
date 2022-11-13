import styled from "styled-components";


export const Container = styled.div`

    audio{
        display: none;
    }

`

export const ScoreContainer = styled.div`

    width: 100%;
    height: 150px;
    display: flex;
    user-select: none;
    align-items: center;

    img{

        width:30px;
        height:30px;
        cursor: pointer;
        position: absolute;
        z-index:9;
        margin-left: 30px;
        border-radius:100%;
        right: 20px;
        transition:1s;
        image-rendering: pixelated;

        &:hover{
            transform:scale(1.0cm);
        }
    }

    span{

        font-size:30px;
        color:white;
        margin: 20px;
        font-weight: bold;
    }

`;
