import styled from 'styled-components';

export const AddLinkForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 60px 0 90px 0;
  background-color: var(--Linkbrary-bg);

  @media (min-width: 375px) and (max-width: 767px) {
    padding: 24px 0 40px 0;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 800px;

  @media (max-width: 1124px) {
    max-width: 800px;
    width: calc(100vw - 64px);
  }
`;

export const AddLinkInput = styled.input`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 20px 16px 52px;
  font-size: 1.6rem;
  line-height: 24px;
  border-radius: 15px;
  border: 1px solid var(--Linkbrary-primary-color);
  background-color: var(--Linkbrary-white);

  @media (min-width: 375px) and (max-width: 767px) {
    height: 53px;
    font-size: 1.4rem;
    padding: 8px 10px 8px 34px;
  }
`;

export const LinkIcon = styled.img`
  position: absolute;
  left: 20px;
  top: 17px;

  @media (min-width: 375px) and (max-width: 767px) {
    width: 16px;
    left: 10px;
    top: 18px;
  }
`;

export const AddLinkButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 20px;
  top: 12px;
  font-size: 1.4rem;
  font-weight: 600;
  color: #f5f5f5;
  background: linear-gradient(
    91deg,
    var(--Linkbrary-primary-color) 0%,
    #6ae3fe 100%
  );
  cursor: pointer;
  padding: 10px 16px;
  flex-shrink: 0;
  border-radius: 8px;

  @media (min-width: 375px) and (max-width: 767px) {
    right: 10px;
    top: 8.5px;
    font-size: 1.4rem;
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
