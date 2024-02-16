/* eslint-disable */

import * as S from './style';

export const FacebookShareButton = () => {
  const realUrl = 'https://adorable-malasada-14962e.netlify.app';
  const resultUrl = window.location.href;

  const shareFacebook = () => {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + realUrl);
  };

  return (
    <>
      <S.FacebookButton
        onClick={() => {
          shareFacebook();
        }}
      >
        <img src="/images/facebook.png" alt="페이스북 아이콘" width="42" />
        페이스북
      </S.FacebookButton>
    </>
  );
};
