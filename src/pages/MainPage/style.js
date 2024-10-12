import styled from 'styled-components';
import { DatePicker as _DatePicker } from 'gestalt-datepicker';
import 'gestalt-datepicker/dist/gestalt-datepicker.css';

export const Container = styled.div`
  min-width: 320px;
  max-width: 480px;
  height: 100dvh;
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
  margin: 16px 0 24px;
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
  margin: 58px 0;

  padding: ${(props) => (props.padding ? `${props.padding}` : '0')};
`;

export const P = styled.p`
  margin: ${(props) => (props.margin ? `${props.margin}` : '0')};

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

export const DatePicker = styled(_DatePicker)``;

export const ButtonWrapper = styled.div`
  margin-top: 12px;
  padding: 0 26px;
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
