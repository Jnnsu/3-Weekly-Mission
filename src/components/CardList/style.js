import styled from 'styled-components';

export const CardList = styled.div`
  width: 1060px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-bottom: auto;
  padding-bottom: 100px;

  @media (max-width: 1124px) {
    width: calc(100vw - 64px);
  }
`;

export const NoLink = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  line-height: 24px;
  padding: 41px 0 35px 0;
`;
