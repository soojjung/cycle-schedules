import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Flex } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import { DatePicker } from 'gestalt-datepicker';
import 'gestalt-datepicker/dist/gestalt-datepicker.css';
import * as S from './style';

const MainPage = () => {
  const navigate = useNavigate();
  const [averageCycle, setAverageCycle] = useState(29);
  const [lastPeriod, setLastPeriod] = useState(null);

  const handleDecrease = () => {
    setAverageCycle((prev) => Math.max(1, prev - 1));
  };

  const handleIncrease = () => {
    setAverageCycle((prev) => prev + 1);
  };

  const handleDatePicker = ({ value }) => {
    setLastPeriod(value);
  };

  const handleSubmit = () => {
    sessionStorage.setItem('averageCycle', averageCycle);
    sessionStorage.setItem('lastPeriod', lastPeriod);

    setTimeout(() => {
      navigate('/loading');
    }, 150);
  };

  return (
    <S.Container>
      <S.FlexRow>
        <S.Title>생리 예정일 계산기</S.Title>
      </S.FlexRow>

      <S.SubTitle>
        다음 예정일을
        <br />
        알려드릴게요
      </S.SubTitle>

      <S.AreaBox>
        <S.P>생리주기</S.P>
        <Flex
          alignItems="center"
          height="100%"
          justifyContent="center"
          width="100%"
          gap={4}
        >
          <IconButton
            bgColor="lightGray"
            icon="dash"
            iconColor="lightGray"
            onClick={handleDecrease}
            size="sm"
          />
          <S.PeriodValue>{averageCycle}일</S.PeriodValue>
          <IconButton
            bgColor="lightGray"
            icon="add"
            iconColor="lightGray"
            onClick={handleIncrease}
            size="sm"
          />
        </Flex>
      </S.AreaBox>

      <S.AreaBox padding="0 28px 165px">
        <S.P>가장 마지막 생리 시작일</S.P>
        <DatePicker
          id="last-period-date"
          onChange={handleDatePicker}
          value={lastPeriod}
          maxDate={new Date()}
        />
      </S.AreaBox>

      <S.ButtonWrapper>
        <S.CalculateButton onClick={handleSubmit} disabled={!lastPeriod}>
          계산하기
        </S.CalculateButton>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default MainPage;
