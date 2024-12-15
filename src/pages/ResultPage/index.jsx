import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../../styles/pageStyle';

const defaultData = [
  {
    id: 'duration',
    label: '기간',
    value: '5일',
    description: 'Duration',
  },
  {
    id: 'averageCycle',
    label: '평균 주기',
    value: '',
    description: 'Average Cycle',
  },
  {
    id: 'nextPeriod',
    label: '다음 예정일은',
    value: '',
    description: 'Next Period',
  },
];

const ResultPage = () => {
  const navigate = useNavigate();
  const [dayDiff, setDayDiff] = useState('');
  const [data, setData] = useState(defaultData);

  const storageData = {
    averageCycle: sessionStorage.getItem('averageCycle'),
    dayDifference: sessionStorage.getItem('dayDifference'),
    nextPeriod: sessionStorage.getItem('nextPeriod'),
  };

  useEffect(() => {
    if (storageData.dayDifference) {
      setDayDiff(storageData.dayDifference);
    }
  }, [storageData.dayDifference]);

  useEffect(() => {
    if (storageData.averageCycle) {
      setData((prev) =>
        prev.map((item) =>
          item.id === 'averageCycle'
            ? { ...item, value: `${storageData.averageCycle}일` }
            : item
        )
      );
    }
  }, [storageData.averageCycle]);

  useEffect(() => {
    if (storageData.nextPeriod) {
      setData((prev) =>
        prev.map((item) =>
          item.id === 'nextPeriod'
            ? { ...item, value: storageData.nextPeriod }
            : item
        )
      );
    }
  }, [storageData.nextPeriod]);

  const goHome = () => {
    sessionStorage.clear(); // 전체 sessionStorage 비우기
    navigate('/');
  };

  return (
    <S.Container>
      <S.Center>
        <S.Title></S.Title>
        <S.SubTitle>사용자 님의</S.SubTitle>
        <S.SubTitle>생리 사이클 계산 결과</S.SubTitle>

        <S.AreaBox40>
          <S.ImageWrapper url="images/phone_calendar.webp" />
        </S.AreaBox40>
        <S.InfoText>
          {dayDiff && (
            <>
              오늘부터 <strong>{dayDiff}일</strong> 뒤 시작이에요 🗓️
            </>
          )}
        </S.InfoText>

        <S.InfoGrid>
          {data.map((item) => (
            <S.InfoBox key={item.id}>
              <S.InfoTitle>{item.label}</S.InfoTitle>
              <S.InfoValue>{item.value}</S.InfoValue>
            </S.InfoBox>
          ))}
        </S.InfoGrid>

        <S.ButtonWrapper margin="60px 0 0">
          <S.PrimaryButton onClick={goHome}>처음으로</S.PrimaryButton>
        </S.ButtonWrapper>
      </S.Center>
    </S.Container>
  );
};

export default ResultPage;
