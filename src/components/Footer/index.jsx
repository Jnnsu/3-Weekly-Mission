import * as S from './style';

export const Footer = () => {
  return (
    <S.Footer>
      <S.FooterContainer>
        <S.FooterCodeit>©codeit - 2023</S.FooterCodeit>
        <S.FooterLink>
          <S.FooterLinkItem
            href="incomplete/privacy-policy.html"
            target="_blank"
          >
            Privacy Policy
          </S.FooterLinkItem>
          <S.FooterLinkItem href="incomplete/FAQ.html" target="_blank">
            FAQ
          </S.FooterLinkItem>
        </S.FooterLink>
        <S.FooterSns>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <img src="/images/facebook-icon.svg" alt="페이스북 아이콘" />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <img src="/images/twitter-icon.svg" alt="트위터 아이콘" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <img src="/images/youtube-icon.svg" alt="유튜브 아이콘" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <img src="/images/instagram-icon.svg" alt="인스타그램 아이콘" />
          </a>
        </S.FooterSns>
      </S.FooterContainer>
    </S.Footer>
  );
};
