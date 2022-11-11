import styled from "styled-components";


export const NaveStyleImage = styled.img`

    width: 150px;
    height:150px;
    position:absolute;
    user-select: none;
    transition: 1s;
    right: ${({ onHorizontalMove }) => onHorizontalMove ? `${onHorizontalMove}px` : 'auto'};
    bottom:${({ onVerticalMove }) => `${onVerticalMove}px`};
    
`;