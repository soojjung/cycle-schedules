import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
  max-width: 480px;
  padding: 20px;
  margin: auto;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 24px;
  font-size: 1rem;
  font-weight: 600;
  color: #7a7a7a;
`;

export const SubTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #444;
`;

export const AreaBox = styled.div`
  margin: 32px 0;

  padding: ${(props) => (props.padding ? `${props.padding}` : '0')};
`;

export const ImageWrapper = styled.div`
  width: 160px;
  height: 160px;
  margin-bottom: 20px;
  background: url('images/phone_calendar.png') no-repeat center;
  background-size: cover;
  border-radius: 15px;
`;

export const InfoText = styled.p`
  font-size: 1rem;
  color: #666;
  font-weight: 400;

  span {
    color: #1ebefa; /* 파란색 강조 텍스트 */
  }
`;

export const InfoGrid = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  max-width: 400px;
  margin: 40px 0;
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

export const ButtonWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 52px;
`;

export const Button = styled.button`
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
`;
