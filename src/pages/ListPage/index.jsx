import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { Box, Flex, Icon, IconButton } from 'gestalt';
import { DateField } from 'gestalt-datepicker';
import 'gestalt-datepicker/dist/gestalt-datepicker.css';
import * as S from '../../styles/pageStyle';

const ListPage = () => {
  const navigate = useNavigate();
  const [dateValues, setDateValues] = useState([
    { id: 1, date: null },
    { id: 2, date: null },
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
        <Box padding={4} width="100%">
          <Flex direction="column" gap={6} width="100%">
            {dateValues.map((dateValue) => (
              <S.Flex key={dateValue.id}>
                <DateField
                  id={`size-datefield-md-${dateValue.id}`}
                  onChange={({ value }) => {
                    setDateValues((prev) =>
                      prev.map((item) =>
                        item.id === dateValue.id
                          ? { ...item, date: value }
                          : item
                      )
                    );
                  }}
                  // onClearInput={() =>
                  //   setDateValues((prev) =>
                  //     prev.map((item) =>
                  //       item.id === dateValue.id
                  //         ? { ...item, date: null }
                  //         : item
                  //     )
                  //   )
                  // }
                  size="md"
                  value={dateValue.date}
                  disableRange="disableFuture"
                  errorMessage={
                    (dateValue.errorMessage &&
                      dateValue.errorMessage === 'disableFuture' &&
                      '입력 가능한 날짜가 아닙니다.') ||
                    undefined
                  }
                  onError={({ errorMessage }) => {
                    setDateValues((prev) =>
                      prev.map((item) =>
                        item.id === dateValue.id
                          ? { ...item, errorMessage: errorMessage }
                          : { ...item, errorMessage: undefined }
                      )
                    );
                  }}
                />
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
