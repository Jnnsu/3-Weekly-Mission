import styled from 'styled-components';

export const ModalContainer = styled.div`
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

export const ModalContent = styled.div`
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

export const ModalTitle = styled.div`
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

export const ModalCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;
