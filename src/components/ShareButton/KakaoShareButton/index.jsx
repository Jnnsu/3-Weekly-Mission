/* eslint-disable */

import { useEffect } from 'react';
import * as S from './style';

const { Kakao } = window;

export const KakaoShareButton = () => {
  const realUrl = 'https://adorable-malasada-14962e.netlify.app';
  // const resultUrl = window.location.href;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
    console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: 'Linkbrary',
        description: '세상의 모든 정보를 쉽게 저장하고 관리해 보세요',
        imageUrl: './images/link-brary.png',
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: '링크 저장 하러가기',
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <>
      <S.KakaoButton
        onClick={() => {
          shareKakao();
        }}
      >
        <img src="/images/kakao.png" alt="카카오톡 아이콘" width="42" />
        카카오톡
      </S.KakaoButton>
    </>
  );
};
