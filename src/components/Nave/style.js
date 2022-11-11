import styled from "styled-components";


export const NaveStyleImage = styled.img`

    width: 120px;
    height:120px;
    position:absolute;
    transition: 0.5s;
    right: ${({ onHorizontalMove }) => onHorizontalMove ? `${onHorizontalMove}px` : 'auto'};
    bottom:${({ onVerticalMove }) => `${onVerticalMove}px`};
    
`;