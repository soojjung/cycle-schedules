import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
  max-width: 480px;
  height: 100dvh;

  padding: 20px;
  margin: auto;

  overflow-y: scroll;
`;

export const FlexRow = styled.div`
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
  font-size: 1.4rem;
  font-weight: 600;
  color: #444;
`;

export const AreaBox = styled.div`
  margin: 28px 0;

  padding: ${(props) => (props.padding ? `${props.padding}` : '0')};
`;

export const P = styled.p`
  font-size: 0.9rem;
  color: #7a7a7a;
`;

export const Button = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #333;

  cursor: pointer;
`;

export const PeriodValue = styled.div`
  margin: 0 10px;
  font-size: 2.3rem;
  font-weight: 500;
  color: #444;
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 52px;
`;

export const CalculateButton = styled.button`
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
