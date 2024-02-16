import styled from 'styled-components';

export const SelectedFolder = styled.div`
  width: 1060px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;

  @media (max-width: 1124px) {
    width: calc(100vw - 64px);
  }

  @media (min-width: 375px) and (max-width: 767px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

export const SelectedFolderMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 2.4rem;
  font-weight: 600;
`;

export const FolderManagementButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  font-size: 1.4rem;
  cursor: pointer;
`;
