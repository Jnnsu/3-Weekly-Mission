import styles from './EditableCard.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { Card } from 'sharing/ui-card';
import { CardContent } from 'sharing/ui-card-content';
import { CardImage } from 'sharing/ui-card-image';
import Kebab from '../../kebab-button/index';
import Modal from '../../modal/index.js';
import Button from '../../modal/modalButton';
import styled from 'styled-components';

const cx = classNames.bind(styles);

const ModalForm = styled.div`
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

const ModalFolderList = styled.button`
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

export const EditableCard = ({
  url,
  imageSource,
  alt,
  elapsedTime,
  description,
  createdAt,
  folders,
}) => {
  const [visible, setVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [dropDownItem, setDropDownItem] = useState(null);
  const handleMouseOver = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const handleKebabClick = e => {
    e.preventDefault();
    e.stopPropagation();
    setIsActive(!isActive);
  };

  const handleOnBlur = () => {
    setTimeout(() => {
      setIsActive(false);
    }, 100);
  };

  const handleOnClick = e => {
    e.preventDefault();
    e.stopPropagation();
    setVisible(true);
    setDropDownItem(e.target.textContent);
  };

  const handleCloseModal = e => {
    e.preventDefault();
    e.stopPropagation();
    setVisible(false);
  };

  let modalContent;

  if (dropDownItem === '삭제하기') {
    modalContent = (
      <Modal
        title="링크 삭제"
        subTitle={url}
        stateVisible={visible}
        handleCloseModal={handleCloseModal}
      >
        <ModalForm>
          <Button type="delete">삭제하기</Button>
        </ModalForm>
      </Modal>
    );
  }

  if (dropDownItem === '폴더에 추가') {
    modalContent = (
      <Modal
        title="폴더에 추가"
        subTitle={url}
        stateVisible={visible}
        handleCloseModal={handleCloseModal}
      >
        <ModalForm>
          <div className="folder-list">
            {folders.map(folderItem => (
              <ModalFolderList key={folderItem.id}>
                <div className="folder-item">
                  <p className="folder-item-name">{folderItem.name}</p>
                  <p className="folder-item-count">
                    {folderItem.link.count}개 링크
                  </p>
                </div>
                <img src="./images/check.png" alt="체크" />
              </ModalFolderList>
            ))}
          </div>
          <Button type="submit">추가하기</Button>
        </ModalForm>
      </Modal>
    );
  }

  return (
    <>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <Card onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
          <CardImage
            imageSource={imageSource}
            alt={alt}
            isZoomedIn={isHovered}
          />
          <CardContent
            elapsedTime={elapsedTime}
            description={description}
            createdAt={createdAt}
            isHovered={isHovered}
          />
          <button
            className={cx('star')}
            onClick={event => event.preventDefault()}
          >
            <img src="images/star.svg" alt="즐겨찾기를 나타내는 별" />
          </button>
          <button
            className={cx('kebab')}
            onClick={handleKebabClick}
            onBlur={handleOnBlur}
          >
            <img src="images/kebab.svg" alt="더보기를 나타내는 점 3개" />
          </button>
          {isActive && <Kebab onClick={handleOnClick} />}
        </Card>
      </a>
      {visible && modalContent}
    </>
  );
};
