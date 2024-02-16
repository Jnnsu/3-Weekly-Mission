import styled from 'styled-components';

export const AddFolderContainer = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  gap: 4px;
  column-gap: 0.4rem;
  font-size: 1.6rem;
  font-weight: 500;
  height: 35px;
  padding: 0 2.4rem;
  border-radius: 2rem;
  border: 0.1rem solid #fff;
  background-color: var(--Linkbrary-primary-color);
  color: var(--Linkbrary-gray10);
  position: fixed;
  bottom: 101px;
  left: calc(50vw - 65px);

  & span {
    width: 65px;
  }

  @media (min-width: 768px) {
    display: flex;
    padding: 0;
    background-color: transparent;
    color: var(--Linkbrary-primary-color);
    position: relative;
    bottom: 0;
    left: 0;
  }
`;

export const AddIcon = styled.img`
  width: 18px;
`;

export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;

  & input {
    font-size: 1.4rem;
    width: 100%;
    margin-bottom: 15px;
    padding: 18px 15px;
    border: 1px solid #ccd5e3;
    border-radius: 8px;
  }
`;
