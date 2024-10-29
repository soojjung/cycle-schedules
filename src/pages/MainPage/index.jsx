import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Flex, DeviceTypeProvider } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import * as S from '../../styles/pageStyle';

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

  const handleSubmit = () => {
    sessionStorage.setItem('averageCycle', averageCycle);
    sessionStorage.setItem('lastPeriod', lastPeriod);

    setTimeout(() => {
      navigate('/loading');
    }, 250);
  };

  return (
    <S.Container>
      <S.Center>
        <S.Title>생리 예정일 계산기</S.Title>
        <S.SubTitle>다음 예정일을</S.SubTitle>
        <S.SubTitle>알려드릴게요</S.SubTitle>
      </S.Center>

      <S.AreaBox padding="0 0 0 28px">
        <S.P margin="0 0 12px 0">생리주기</S.P>
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

      <S.AreaBox padding="0 28px">
        <S.P>가장 마지막 생리 시작일</S.P>
        <S.Center>
          <DayPicker
            mode="single"
            required
            selected={lastPeriod}
            onSelect={setLastPeriod}
            disabled={{ after: new Date() }}
            // footer={
            //   selected
            //     ? `Selected: ${selected.toLocaleDateString()}`
            //     : 'Pick a day.'
            // }
          />
        </S.Center>
      </S.AreaBox>

      <S.ButtonWrapper>
        <S.PrimaryButton onClick={handleSubmit} disabled={!lastPeriod}>
          계산하기
        </S.PrimaryButton>
      </S.ButtonWrapper>
      <S.ButtonWrapper margin="12px 0 0">
        <S.SecondaryButton
          onClick={() => {
            navigate('/list');
          }}
        >
          주기를 몰라요
        </S.SecondaryButton>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default MainPage;
