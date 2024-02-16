import styled from 'styled-components';

export const FolderMenu = styled.div`
  width: 1060px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1124px) {
    width: calc(100vw - 64px);
  }
`;

export const FolderCategories = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.6rem;
  flex-wrap: wrap;

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 1.4rem;
  }
`;

export const FolderButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--Linkbrary-primary-color);
  border-radius: 5px;
  padding: 8px 12px;
  height: 35px;
  background-color: ${props =>
    props.selectedFolder ? 'var(--Linkbrary-primary-color)' : 'transparent'};
  color: ${props =>
    props.selectedFolder ? 'var(--Linkbrary-white)' : 'inherit'};
  cursor: pointer;

  :focus {
    background-color: var(--Linkbrary-primary-color);
    color: var(--Linkbrary-white);
  }
`;

export const AddIcon = styled.img`
  opacity: 1;

  @media (min-width: 375px) and (max-width: 767px) {
    opacity: 0;
  }
`;
