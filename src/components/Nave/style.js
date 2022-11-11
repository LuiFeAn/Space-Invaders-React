import styled from "styled-components";


export const NaveContainer = styled.div`

    width: 100%;
    height:150px;
    display: flex;
    justify-content: center;
    background:yellow;
    position: absolute;
    bottom: 0px;

`;

export const NaveStyleImage = styled.img`

    width: 120px;
    height:120px;
    position:absolute;
    transition: 0.5s;
    right: ${({ onHorizontalMove }) => `${onHorizontalMove}px`};
    bottom:${({ onVerticalMove }) => `${onVerticalMove}px`};
    
`;