import { createGlobalStyle } from 'styled-components';
import ResetStyle from './resetStyle';

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

  * {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh; /* 화면 높이에 맞게 적용 */
    margin: 0; /* 여백 제거 */

    line-height: 1.5;
    font-size: 16px;
    
    background-image: url('images/gradation-bg.png');
    background-size: cover; /* 이미지가 화면을 가득 채우도록 설정 */
    background-position: center; /* 이미지의 중심을 화면 중앙에 배치 */
    background-repeat: no-repeat; /* 이미지 반복 안 함 */
  }

  button {
    line-height: 1;
    cursor: pointer;
  }
`;

export default GlobalStyle;
