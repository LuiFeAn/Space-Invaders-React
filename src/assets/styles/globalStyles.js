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


`;
