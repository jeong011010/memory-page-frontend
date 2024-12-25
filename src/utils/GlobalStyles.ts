import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* 1. SejongGeulggot 웹폰트 정의 */
  @font-face {
    font-family: 'SejongGeulggot';
    src: url('/fonts/SejongGeulggot.woff2') format('woff2'),
         url('/fonts/SejongGeulggot.woff') format('woff'),
         url('/fonts/SejongGeulggot.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  /* 2. Global Style 설정 */
  html, body {
    font-family: 'SejongGeulggot', Arial, sans-serif;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased; /* 텍스트 부드럽게 렌더링 */
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%; /* 모바일 확대 방지 */
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'SejongGeulggot', Arial, sans-serif;
    box-sizing: border-box;
  }

  /* 3. 입력 폼 요소에도 폰트 적용 */
  input, textarea, button {
    font-family: 'SejongGeulggot', Arial, sans-serif;
    font-size: 16px;
  }

  /* 4. 기타 기본 스타일 초기화 */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'SejongGeulggot', Arial, sans-serif;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul, li {
    list-style: none;
  }
`;

export default GlobalStyle;