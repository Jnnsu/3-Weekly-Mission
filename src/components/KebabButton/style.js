import styled from 'styled-components';

export const KebabButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 20px;
  bottom: 40px;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  z-index: 99;
`;

export const DropDownMenuItem = styled.button`
  font-size: 1.4rem;
  color: var(--Linkbrary-black);
  background: var(--Linkbrary-white);
  padding: 7px 12px;

  &:hover {
    color: var(--Linkbrary-primary-color);
    background: var(--Linkbrary-gray10);
  }
`;

export const ModalForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;

  & input {
    width: 100%;
    padding: 18px 15px;
    border: 1px solid #ccd5e3;
    border-radius: 8px;
  }

  & .folder-list {
    margin-bottom: 24px;
  }
`;

export const ModalFolderList = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  width: 100%;
  border-radius: 8px;

  & .folder-item {
    gap: 8px;
    display: flex;
    align-items: center;
  }

  & .folder-item-name {
    color: #373740;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  & .folder-item-count {
    color: #9fa6b2;
    font-size: 1.4rem;
  }

  & img {
    width: 14px;
    height: 14px;
    opacity: 0;
  }

  &:focus {
    background: #f0f6ff;
  }

  &:focus img {
    opacity: 1;
  }

  &:focus .folder-item-name {
    color: #6d6afe;
  }

  &:hover {
    background: #f0f6ff;
  }

  &:hover .folder-item-name {
    color: #6d6afe;
  }
`;
