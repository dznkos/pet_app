import { createGlobalStyle} from 'styled-components';

export default createGlobalStyle`


:root {  
  --loginColor: #1E88F3;
  --text1: rgba(0,0,0,.8);
  --text2: #ef6b19f6;
  --text3: #3c4ac6;
  --textColor1: #B6956A;
  --textTitle: #7184f3;
  --textAbout: #5e98ef;
  --textArticle: #2b65ca;
  
  --green: #00a650;
  --blue1: #1e6dff;
  --blue2: #2968c8;
  --blue3: #3483fa;
  --yellow: #fff159;

  --border: #ddd;

  --panel: 0 1px 3px 0 rgba(0, 0, 0, .3);

  --reputacion1: #ffe7e6;
  --reputacion2: #fff4e7;
  --reputacion3: #fffde5;
  --reputacion4: #f3fee0;

  --family: 'Josefin Sans', sans-serif;

  min-height: 100%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
  //color: ${({theme}) => theme.text};
  font-weight: inhert;
}

html{
  min-height: 100%;
  background-color: ${({theme}) => theme.hbg}; 
}

body {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

*, button, input{
  border: 0;
  font-family: var(--family);
}

`