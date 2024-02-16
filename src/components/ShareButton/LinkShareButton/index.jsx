/* eslint-disable */

import * as S from './style';

export const LinkShareButton = () => {
  const handleCopyClipBoard = async text => {
    try {
      await navigator.clipboard.writeText(text);
      alert('클립보드에 링크가 복사되었어요.');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <S.LinkCopyButton
        onClick={() => {
          handleCopyClipBoard(location.href);
        }}
      >
        <img src="/images/link.png" alt="링크 복사 아이콘" width="42" />
        링크 복사
      </S.LinkCopyButton>
    </>
  );
};
