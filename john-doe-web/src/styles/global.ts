import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
:root{
    --background: #FFFFFF;
    --red:#e52e4d;
    --blue: #1563ff;
    --blueish: #396187;
    --text: #052342;
    --yellow: #ead62e;
    --darkGrey:#3c3c3c;
    --lightGrey: #c0c0c0;
    --green: #05b35b;
    --greenLight: #9becc3;

    --selectBorder: var-(--lightGray);
    --select-focus: var(--blue);
    --select-arrow: var(--select-border);
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    @media(max-width:1080px){
      font-size: 93.75%;
    }

    @media(max-width:720px){
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;

  }

  body, input, textarea, button{
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4,h5, h6, strong {
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity:0.6;
    cursor: not-allowed;
  }

  .error-container {
    color: var(--red);
  }

  .errors-container {
    display: grid;
    grid-template-columns: 200px 1fr;
    text-align: left;
    color: var(--red);
  }

`

export default GlobalStyles
