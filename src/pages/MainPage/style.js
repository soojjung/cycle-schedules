import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
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

export const PeriodSelector = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
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

export const Calendar = styled.div`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
`;

export const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 5px;
  text-align: center;
  color: #333;
`;

export const CalendarDay = styled.div`
  padding: 10px;
  background: ${(props) => (props.isSelected ? '#66a3ff' : 'none')};
  color: ${(props) => (props.isSelected ? '#fff' : '#333')};
  border-radius: 5px;
`;

export const CalculateButton = styled.button`
  width: 100%;
  height: 50px;
  padding: 10px 20px;

  border: none;
  border-radius: 50px;

  font-size: 1rem;

  // background: #66a3ff;
  color: #fff;
  background: linear-gradient(#69d4fb, #1ebefa);

  &:hover {
    cursor: pointer;
  }
`;
