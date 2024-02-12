import styled from 'styled-components';
import closeBtn from './_close.png';

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  inset: 0;
  z-index: 101;
`;

const ModalContent = styled.div`
  width: 360px;
  height: auto;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
  border: 1px solid #ccd5e3;
  border-radius: 15px;
  color: #000000;
  padding: 32px 40px;
  background: #fff;
  gap: 24px;
`;

const ModalTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  & h1 {
    font-size: 2rem;
  }

  & h2 {
    color: #9fa6b2;
    font-size: 1.4rem;
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;

function Modal({ title, handleCloseModal, children, subTitle = undefined }) {
  const onClick = e => {
    if (e.target === e.currentTarget) {
      handleCloseModal(e);
    }
  };

  return (
    <>
      <ModalContainer onClick={onClick}>
        <ModalContent>
          <ModalTitle>
            <h1>{title}</h1>
            {subTitle && <h2>{subTitle}</h2>}
          </ModalTitle>
          <ModalCloseButton onClick={e => handleCloseModal(e)}>
            <img src={closeBtn} alt="닫기 버튼" />
          </ModalCloseButton>
          {children}
        </ModalContent>
      </ModalContainer>
    </>
  );
}

export default Modal;
