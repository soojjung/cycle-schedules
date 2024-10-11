import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
  max-width: 480px;
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
  margin: 24px;
  font-size: 1rem;
  font-weight: 600;
  color: #7a7a7a;
`;

export const SubTitle = styled.h2`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 600;
  color: #555;
`;

export const AreaBox = styled.div`
  margin: 32px 0;

  padding: ${(props) => (props.padding ? `${props.padding}` : '0')};
`;

export const ImageWrapper = styled.div`
  width: 160px;
  height: 160px;
  margin-bottom: 20px;
  background: url('images/present.png') no-repeat center;
  background-size: cover;
  border-radius: 15px;
`;

export const InfoText = styled.p`
  font-size: 1rem;
  color: #666;
  text-align: center; /* 텍스트 가운데 정렬 */

  span {
    color: #1ebefa; /* 파란색 강조 텍스트 */
  }
`;
