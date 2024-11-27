import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
  max-width: 460px;
  padding: 20px;
  margin: auto;
  overflow: hidden; /* 스크롤 방지 */
`;

export const IconWrapper = styled.span`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  height: 36px;
  font-size: 0.9rem;
  line-height: 0.9rem;
  font-weight: 500;
  color: #7a7a7a;
`;

export const SubTitle = styled.h2`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.9rem;
  color: #555;
`;

export const SubText = styled.h3`
  margin: 8px 0 0;
  font-size: 0.8rem;
  font-weight: 600;
  color: #999;
`;

export const AreaBox = styled.div`
  margin: ${(props) => (props.margin ? `${props.margin}` : '24px 0')};
  padding: ${(props) => (props.padding ? `${props.padding}` : '0')};
`;

export const AreaBox40 = styled.div`
  margin: 40px 0;
`;

export const P = styled.p`
  margin: ${(props) => (props.margin ? `${props.margin}` : '0')};
  font-size: 0.9rem;
  line-height: 0.9rem;
  color: #7a7a7a;
`;

export const PeriodValue = styled.div`
  margin: 0 10px;
  font-size: 2.3rem;
  font-weight: 500;
  color: #444;
`;

export const ImageWrapper = styled.div`
  width: 160px;
  height: 160px;
  background: ${(props) => {
    return `url(${props.url}) no-repeat center`;
  }};
  background-size: cover;
  border-radius: 15px;
`;

export const InfoText = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #666;

  span {
    color: #1ebefa; /* 파란색 강조 텍스트 */
  }

  strong {
    font-weight: 600;
  }
`;

export const InfoGrid = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 46px 20px 8px 0;
  padding: 0 16px;

  width: 100%;
  max-width: 400px;
`;

export const InfoBox = styled.div`
  text-align: center;
  flex: 1;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const InfoTitle = styled.p`
  font-size: 0.9rem;
  color: #1ebefa;
  margin-bottom: 5px;
`;

export const InfoValue = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #555;
`;

export const DateInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-right: 10px;
  border: 1.5px solid #d3d3d3;
  border-radius: 15px;

  font-size: 15px;
  text-align: center;

  color: #8a8a8a;
  outline: none;
  box-sizing: border-box;
  background-color: #f9f9f9;

  ::placeholder {
    font-weight: normal;
    color: #8a8a8a;
  }
`;

export const CalendarOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10; /* Ensures it covers the background but is below the calendar */
  background: rgba(138, 134, 133, 0.2); /* Semi-transparent black */
`;

export const CalendarPopup = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 20; /* Ensures it stays above the overlay */

  max-width: 300px;

  background: white;
  padding: 12px;
  border-radius: 15px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2); /* Adds a shadow for better visibility */
`;

export const ButtonWrapper = styled.div`
  margin: ${(props) => (props.margin ? `${props.margin}` : '0')};
  padding: 0 28px;
  width: 100%;
  height: 52px;
`;

export const PrimaryButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px 20px;

  border: none;
  border-radius: 50px;

  font-size: 1rem;

  color: #fff;
  background: linear-gradient(#69d4fb, #1ebefa);

  &:hover {
    cursor: pointer;
  }

  &:disabled {
    background: lightgrey;
    cursor: default;
  }
`;

export const SecondaryButton = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px 20px;

  border-radius: 50px;
  border: 1px solid #1ebefa;

  font-size: 1rem;

  color: #1ebefa;
  background: #fff;

  &:hover {
    cursor: pointer;
  }
`;
