import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { Box, Flex, Icon, IconButton } from 'gestalt';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import * as S from '../../styles/pageStyle';

const ListPage = () => {
  const navigate = useNavigate();
  const [dateValues, setDateValues] = useState([
    { id: 1, date: null, isOpen: false },
    { id: 2, date: null, isOpen: false },
  ]);

  const onAdd = () => {
    setDateValues((prev) => [...prev, { id: prev.length + 1, date: null }]);
  };

  const onDelete = (id) => {
    setDateValues((prev) => prev.filter((item) => item.id !== id));
  };

  const handleSubmit = () => {
    const periodDates = dateValues
      .map((item) => item.date.toISOString())
      .sort((a, b) => dayjs(a) - dayjs(b));

    const lastPeriod = periodDates[periodDates.length - 1];
    const cycles = [];

    periodDates.reduce((pre, cur) => {
      const diffInDays = dayjs(cur).diff(dayjs(pre), 'day');
      cycles.push(diffInDays);
      return cur;
    });

    const averageCycle = Math.floor(
      cycles.reduce((a, b) => a + b) / cycles.length
    );

    sessionStorage.setItem('averageCycle', averageCycle);
    sessionStorage.setItem('lastPeriod', lastPeriod);

    setTimeout(() => {
      if (averageCycle > 0) {
        navigate('/loading');
      }
    }, 250);
  };

  return (
    <S.Container>
      <S.IconWrapper onClick={() => navigate(-1)}>
        <Icon accessibilityLabel="Pin" color="disabled" icon="arrow-back" />
      </S.IconWrapper>
      <S.Center>
        <S.Title>생리 주기 계산기</S.Title>
        <S.SubTitle>최근 생리 날짜를</S.SubTitle>
        <S.SubTitle>알려주세요</S.SubTitle>
        <S.SubText>많이 표시할수록 정확도가 올라가요</S.SubText>
      </S.Center>
      <S.AreaBox padding="0 0 0 28px">
        <S.P margin="0 0 8px 0">최근 생리일</S.P>
        <Box padding={2} width="100%">
          <Flex direction="column" gap={6} width="100%">
            {dateValues.map((dateValue) => (
              <S.Flex key={dateValue.id} style={{ position: 'relative' }}>
                <S.DateInput
                  type="text"
                  placeholder="YYYY-MM-DD"
                  value={
                    dateValue.date
                      ? dateValue.date.toLocaleDateString('ko-KR')
                      : ''
                  }
                  onFocus={() => {
                    setDateValues((prev) =>
                      prev.map((item) =>
                        item.id === dateValue.id
                          ? { ...item, isOpen: true }
                          : item
                      )
                    );
                  }}
                  readOnly
                />
                {dateValue.isOpen && (
                  <>
                    <S.CalendarOverlay
                      onClick={() => {
                        setTimeout(
                          () =>
                            setDateValues((prev) =>
                              prev.map((item) =>
                                item.id === dateValue.id
                                  ? { ...item, isOpen: false }
                                  : item
                              )
                            ),
                          200
                        );
                      }}
                    />
                    <S.CalendarPopup>
                      <DayPicker
                        mode="single"
                        selected={dateValue.date}
                        onSelect={(date) => {
                          setDateValues((prev) =>
                            prev.map((item) =>
                              item.id === dateValue.id
                                ? { ...item, date: date, isOpen: false }
                                : item
                            )
                          );
                        }}
                        disabled={{ after: new Date() }}
                      />
                    </S.CalendarPopup>
                  </>
                )}
                <IconButton
                  bgColor="lightGray"
                  icon="dash"
                  iconColor="lightGray"
                  onClick={() => {
                    onDelete(dateValue.id);
                  }}
                  size="sm"
                />
              </S.Flex>
            ))}

            {dateValues.length < 5 && (
              <S.Center>
                <IconButton
                  accessibilityLabel="Add another date"
                  bgColor="lightGray"
                  icon="add"
                  iconColor="darkGray"
                  onClick={onAdd}
                  size="sm"
                />
              </S.Center>
            )}
          </Flex>
        </Box>
      </S.AreaBox>
      <S.ButtonWrapper>
        <S.PrimaryButton
          onClick={handleSubmit}
          disabled={!dateValues.every((item) => item.date)}
        >
          계산하기
        </S.PrimaryButton>
      </S.ButtonWrapper>
    </S.Container>
  );
};

export default ListPage;
