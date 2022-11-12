import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    body,html{
        overflow: hidden;
    }

    body {
        background:url(https://wallpaperaccess.com/full/2513478.jpg);
        background-attachment: fixed;
        background-size: cover;
        user-select: none;
    }

    *{
        padding: 0px;
        margin:0px;
        font-family: 'VT323', monospace;
    }

    .nave-bullet{

        width: 50px;
        height: 10px;
        transition:1s;
        position: absolute;
        bottom:15px;
        border-radius: 100%;
        transform: rotate(-90deg);

    }

`;
