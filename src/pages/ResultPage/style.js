import styled from 'styled-components';

export const Container = styled.div`
  min-width: 320px;
  max-width: 480px;
  height: 100dvh;
  padding: 20px;
  margin: auto;
`;

export const IconWrapper = styled.span`
  position: absolute;
  top: 42px;
  left: 20px;
`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.h1`
  margin: 20px;
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

export const SubText = styled.h3`
  margin: 8px 0 0;
  font-size: 0.8rem;
  font-weight: 600;
  color: #777;
`;

export const AreaBox = styled.div`
  margin: 44px 0;

  padding: ${(props) => (props.padding ? `${props.padding}` : '0')};
`;

export const P = styled.p`
  margin: ${(props) => (props.margin ? `${props.margin}` : '0')};

  font-size: 0.9rem;
  color: #7a7a7a;
`;

export const ImageWrapper = styled.div`
  width: 160px;
  height: 160px;
  margin-bottom: 10px;
  background: ${(props) => {
    return `url(${props.url}) no-repeat center`;
  }};
  background-size: cover;
  border-radius: 15px;
`;

export const InfoText = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #666;

  span {
    color: #1ebefa; /* 파란색 강조 텍스트 */
  }
`;

export const InfoGrid = styled.div`
  display: flex;
  justify-content: space-between;

  margin: 46px 20px 8px 0;
  padding: 0 16px;

  width: 100%;
  max-width: 400px;
`;

export const InfoBox = styled.div`
  text-align: center;
  flex: 1;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const InfoTitle = styled.p`
  font-size: 0.9rem;
  color: #1ebefa;
  margin-bottom: 5px;
`;

export const InfoValue = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
  color: #555;
`;

export const ButtonWrapper = styled.div`
  margin-top: 36px;
  padding: 0 28px;
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
