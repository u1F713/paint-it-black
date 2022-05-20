import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu Mono' ;
    src: url('static/fonts/Ubuntu Mono Nerd Font Complete.ttf') format(truetype);
  }

  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,body{
    font-family:  Ubuntu Mono, -apple-system, BlinkMacSystemFont, 'Segoe UI', 
      Roboto, Oxygen, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    line-height: 0.8;
  }
`
