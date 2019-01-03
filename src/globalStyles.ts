import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
  ${reset}

  html {
    font-size: 62.5%;
    height: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background: #F3F5F9;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    letter-spacing: 0;
    margin: 0;
  }

  * {
    outline: none;
    box-sizing: border-box;
  }
`
