import {createGlobalStyle} from 'styled-components';


export const General = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@600&display=swap');
  body {
    font-family: 'Outfit', sans-serif;
      background-color : ${colorPalette.fifth};
  }
`