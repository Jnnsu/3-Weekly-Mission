import styled from 'styled-components';

export const SearchForm = styled.form`
  width: 1060px;
  padding: 40px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1124px) {
    width: calc(100vw - 64px);
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  background-color: #f5f5f5;
  padding: 15px 16px 15px 42px;
  border-radius: 10px;
  font-size: 1.6rem;
  line-height: 24px;

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 1.4rem;
    padding: 13px 16px 13px 42px;
  }
`;

export const SearchIcon = styled.img`
  position: absolute;
  top: 59px;
  left: 16px;

  @media (min-width: 375px) and (max-width: 767px) {
    top: 56px;
  }
`;

export const SearchCancelIcon = styled.img`
  position: absolute;
  top: 55px;
  right: 16px;
  width: 24px;

  @media (min-width: 375px) and (max-width: 767px) {
    top: 57px;
    width: 16px;
  }
`;
