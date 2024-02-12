/* eslint-disable */

import styled from 'styled-components';

const LinkCopyButton = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;
`;

export default () => {
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
      <LinkCopyButton
        onClick={() => {
          handleCopyClipBoard(location.href);
        }}
      >
        <img src="./images/link.png" alt="링크 복사 아이콘" width="42" />
        링크 복사
      </LinkCopyButton>
    </>
  );
};
