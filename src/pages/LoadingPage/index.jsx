import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import * as S from '../../styles/pageStyle';

const LoadingPage = () => {
  const navigate = useNavigate();
  const [nextPeriod, setNextPeriod] = useState('');
  const [dayDifference, setDayDifference] = useState('');
  const averageCycle = parseInt(sessionStorage.getItem('averageCycle'), 10);
  const lastPeriod = sessionStorage.getItem('lastPeriod');

  useEffect(() => {
    // 1. 다음 생리 예정일: 마지막 생리 시작일(lastPeriod)에 averageCycle(일)을 더한 날짜
    setNextPeriod(dayjs(lastPeriod).add(averageCycle, 'day'));
  }, [averageCycle, lastPeriod]);

  useEffect(() => {
    // 2. 1의 날짜와 오늘 날짜의 차이 계산 (일)
    const today = dayjs();
    if (nextPeriod) {
      setDayDifference(nextPeriod.diff(today, 'day') + 1);
    }
  }, [nextPeriod]);

  useEffect(() => {
    if (nextPeriod && dayDifference) {
      sessionStorage.setItem(
        'nextPeriod',
        dayjs(nextPeriod).format('MM월 D일')
      );

      sessionStorage.setItem('dayDifference', dayDifference);

      setTimeout(function () {
        navigate('/result');
      }, 2400);
    }
  }, [nextPeriod, dayDifference]);

  return (
    <S.Container>
      <S.Center>
        <S.Title></S.Title>
        <S.SubTitle>사용자 님의</S.SubTitle>
        <S.SubTitle>생리 사이클을</S.SubTitle>
        <S.SubTitle>계산하고 있어요</S.SubTitle>

        <S.AreaBox>
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          > */}
          <S.ImageWrapper url="images/calendar.gif" />
          {/* </motion.div> */}
        </S.AreaBox>
        <S.InfoText>
          생리 기간은 가장 보편적인
          <br />
          <span>5일</span>로 계산되어요
        </S.InfoText>
      </S.Center>
    </S.Container>
  );
};

export default LoadingPage;
