import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  position: ${({ isSticky }) => (isSticky ? 'sticky' : 'static')};
  top: 0;
  display: flex;
  justify-content: center;
  background-color: var(--Linkbrary-bg);
  z-index: 1;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 192rem;
  padding: 33px 200px;

  @media (max-width: 1199px) {
    width: calc(100vw - 64px);
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    max-width: 80rem;
    padding: 33px 0;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    padding: 18px 0;
  }
`;

export const LinkbraryIcon = styled.a`
  img {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 375px) and (max-width: 767px) {
    img {
      height: 16px;
    }
  }
`;

export const HeaderProfile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
`;

export const UserEmail = styled.div`
  font-size: 1.4rem;
  font-weight: 400;

  @media (min-width: 375px) and (max-width: 767px) {
    display: none;
  }
`;

export const HeaderBtnLogin = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    91deg,
    var(--Linkbrary-primary-color) 0%,
    #6ae3fe 100%
  );
  color: #f5f5f5;
  cursor: pointer;
  border-radius: 8px;
  font-size: 1.8rem;
  font-weight: 600;
  padding: 16px 20px;
  flex-shrink: 0;
  width: 128px;

  @media (min-width: 375px) and (max-width: 767px) {
    width: 80px;
  }
`;
