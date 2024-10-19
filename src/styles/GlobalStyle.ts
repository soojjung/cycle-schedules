import { createGlobalStyle } from 'styled-components';
import ResetStyle from './resetStyle';

const GlobalStyle = createGlobalStyle`
  ${ResetStyle}

/* 아래에 추가적으로 적용할 전역 스타일 작성 */
  // @font-face {
  //   font-family: 'Pretendard';
  //   font-weight: 300;
  //   src: url('fonts/Pretendard-Light.woff') format('woff'),
  // }
  // @font-face {
  //   font-family: 'Pretendard';
  //   font-weight: 400;
  //   src: url('fonts/Pretendard-Light.woff') format('woff'),
  // }
  // @font-face {
  //   font-family: 'Pretendard';
  //   font-weight: 500;
  //   src: url('fonts/Pretendard-Medium.woff') format('woff'),
  // }
  // @font-face {
  //   font-family: 'Pretendard';
  //   font-weight: 600;
  //   src: url('fonts/Pretendard-Bold.woff') format('woff'),
  // }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 800;
    src: url('fonts/Pretendard-ExtraBold.woff') format('woff'),
  }
  @font-face {
    font-family: 'Pretendard';
    font-weight: 900;
    src: url('fonts/Pretendard-Black.woff') format('woff'),
  }

  * {
    box-sizing: border-box;
  }

  html, body, #root {
    font-family: "Pretendard";
    font-weight: 400;
     letter-spacing: -0.02px;
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

  .rdp-root {
    font-size: 14px;
    --rdp-accent-color: #4896ff; /* Change the accent color */
    --rdp-accent-background-color: #f0f0f0; /* Change the accent background color. */
    --rdp-selected-font: 600 14px "Pretendard";
    --rdp-today-color: rgb(0, 0, 0);
    --rdp-day-height: 2.5rem;
    --rdp-day-width: 2.5rem;
  }
`;

export default GlobalStyle;
