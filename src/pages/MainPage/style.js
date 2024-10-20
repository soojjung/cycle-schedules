import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
  max-width: 480px;
  // height: 100dvh;
  padding: 20px 20px 60px;
  margin: auto;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  margin: 20px;
  font-size: 1rem;
  font-weight: 600;
  color: #7a7a7a;
`;

export const SubTitle = styled.h2`
  margin: 0;
  font-size: 1.4rem;
  font-weight: 600;
  color: #555;
`;

export const AreaBox = styled.div`
  margin: 48px 0;

  padding: ${(props) => (props.padding ? `${props.padding}` : '0')};
`;

export const P = styled.p`
  margin: ${(props) => (props.margin ? `${props.margin}` : '0')};

  font-size: 0.9rem;
  color: #7a7a7a;
`;

export const PeriodValue = styled.div`
  margin: 0 10px;
  font-size: 2.3rem;
  font-weight: 500;
  color: #444;
`;

export const ButtonWrapper = styled.div`
  margin: 12px 0;
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
