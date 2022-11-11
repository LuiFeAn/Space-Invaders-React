import styled from "styled-components";


export const Container = styled.div`

    audio{
        display: none;
    }

`;

export const ScoreContainer = styled.div`

    width: 100%;
    height: 150px;
    display: flex;
    user-select: none;
    justify-content:space-between;
    align-items: center;

    img{
        width:40px;
        height:40px;
        cursor: pointer;
        position: absolute;
        z-index:9;
        margin-left: 30px;
        border-radius:100%;
        transition:1s;

        &:hover{
            transform:scale(1.0cm);
        }
    }

    span{
        font-size:30px;
        color:white;
        margin: 50px;
        margin-left:90px;
        font-weight: bold;
    }

`;