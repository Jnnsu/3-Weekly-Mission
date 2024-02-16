import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --Linkbrary-primary-color: #6d6afe;
    --Linkbrary-red: #ff5b56;
    --The-julge-black: #111322;
    --Linkbrary-white: #ffffff;
    --Linkbrary-gray100: #373740;
    --Linkbrary-gray60: #9fa6b2;
    --Linkbrary-gray20: #ccd5e3;
    --Linkbrary-gray10: #e7effb;
    --Linkbrary-bg: #f0f6ff;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
  }


  html {
    font-size: 62.5%;
    line-height: normal;
    font-family: Pretendard, Arial;
    word-break: keep-all;
  }

  button {
    background: none;
    border: 0;
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  input {
    border: none;
    padding: none;
  }

  input:focus,
  textarea:focus {
    outline: none;
  }
`;
