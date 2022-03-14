import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,body{
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
    font-family: sans-serif;
}
body{
    background-color: #f7f7f7;
}
`;

export default GlobalStyle;