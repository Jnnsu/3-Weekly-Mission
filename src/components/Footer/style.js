import styled from 'styled-components';

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #111322;
  height: 160px;
`;

export const FooterContainer = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template: 'codeit link sns';
  font-size: 1.6rem;
  font-family: Arial;
  font-weight: 400;
  width: 100%;
  padding: 32px 104px 64px;

  @media (max-width: 1199px) {
    width: calc(100vw - 64px);
    max-width: 1003px;
    padding: 32px 0 64px;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    grid-template:
      'link sns'
      'codeit .';
    row-gap: 60px;
  }
`;

export const FooterCodeit = styled.span`
  grid-area: codeit;
  color: #676767;
`;

export const FooterLink = styled.div`
  display: flex;
  gap: 30px;
  grid-area: link;
`;

export const FooterLinkItem = styled.a`
  color: #cfcfcf;
  cursor: pointer;
`;

export const FooterSns = styled.div`
  grid-area: sns;
  display: flex;
  gap: 12px;
  cursor: pointer;
`;
