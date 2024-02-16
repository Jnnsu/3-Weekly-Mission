import * as S from './style';

export const Modal = ({
  title,
  handleCloseModal,
  children,
  subTitle = undefined,
}) => {
  const onClick = e => {
    if (e.target === e.currentTarget) {
      handleCloseModal(e);
    }
  };

  return (
    <>
      <S.ModalContainer onClick={onClick}>
        <S.ModalContent>
          <S.ModalTitle>
            <h1>{title}</h1>
            {subTitle && <h2>{subTitle}</h2>}
          </S.ModalTitle>
          <S.ModalCloseButton onClick={e => handleCloseModal(e)}>
            <img src="/images/close.png" alt="닫기 버튼" />
          </S.ModalCloseButton>
          {children}
        </S.ModalContent>
      </S.ModalContainer>
    </>
  );
};
