import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const ResultPage = () => {
  const navigate = useNavigate();

  const data = [
    {
      label: '기간',
      value: '5일',
      description: 'Duration',
    },
    {
      label: '평균 주기',
      value: '30일',
      description: 'Average Cycle',
    },
    {
      label: '다음 예정일은',
      value: '8월 17일',
      description: 'Next Period',
    },
  ];

  return (
    <S.Container>
      <S.Center>
        <S.Title></S.Title>
        <S.SubTitle>닉네임 님의</S.SubTitle>
        <S.SubTitle>생리 사이클 계산 결과</S.SubTitle>

        <S.AreaBox>
          <S.ImageWrapper />
        </S.AreaBox>
        <S.InfoText>
          오늘부터 <span>13일</span> 뒤 시작이에요
        </S.InfoText>

        <S.InfoGrid>
          {data.map((item) => (
            <S.InfoBox key={item.description}>
              <S.InfoTitle>{item.label}</S.InfoTitle>
              <S.InfoValue>{item.value}</S.InfoValue>
            </S.InfoBox>
          ))}
        </S.InfoGrid>

        <S.ButtonWrapper>
          <S.Button onClick={() => navigate('/')}>처음으로</S.Button>
        </S.ButtonWrapper>
      </S.Center>
    </S.Container>
  );
};

export default ResultPage;
