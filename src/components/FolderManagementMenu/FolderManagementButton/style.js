import styled from 'styled-components';

export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  gap: 15px;

  & input {
    width: 100%;
    padding: 18px 15px;
    border: 1px solid #ccd5e3;
    border-radius: 8px;
  }
`;

export const ShareButton = styled.div`
  display: flex;
  gap: 32px;
`;

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  column-gap: 0.4rem;
`;

export const ButtonIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
`;

export const ButtonText = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--Linkbrary-gray60);
`;
