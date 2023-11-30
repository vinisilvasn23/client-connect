import { createGlobalStyle } from "styled-components";

export const ResetStyle = createGlobalStyle`

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  html{
    width: 100vw;
    height: 100vh;
  }

  body {
    display:flex;
    flex-direction: column;
    align-items: center;
    overflow-x: hidden;
    height: 100vh;
    margin: 0 auto;
    line-height: 1.5;
    background-color: var(--grey);
    #root{
      width: 100%;
    }
  }

  a, button {
    cursor: pointer;
    text-decoration: none;
    border: none;
  }
`