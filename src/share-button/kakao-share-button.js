/* eslint-disable */

import { useEffect } from 'react';
import styled from 'styled-components';

const { Kakao } = window;

const KakaoButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;
`;

const KakaoShareButton = () => {
  const realUrl = 'https://adorable-malasada-14962e.netlify.app';
  const resultUrl = window.location.href;

  useEffect(() => {
    Kakao.cleanup();
    Kakao.init('bcab9a7d7bd8fdd7a93f0c3f30d70cb1');
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
      <KakaoButton
        onClick={() => {
          shareKakao();
        }}
      >
        <img src="./images/kakao.png" alt="카카오톡 아이콘" width="42" />
        카카오톡
      </KakaoButton>
    </>
  );
};

export default KakaoShareButton;
