import { useState } from 'react';
import { Cta } from 'sharing/ui-cta';
import styles from './LinkForm.module.scss';
import classNames from 'classnames/bind';
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

export const LinkForm = ({ folders }) => {
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState();

  const handleOnChange = e => {
    setInputValue(e.target.value);
  };

  const handleOnClick = e => {
    e.preventDefault();
    e.stopPropagation();
    setVisible(true);
  };

  const handleCloseModal = e => {
    e.preventDefault();
    e.stopPropagation();
    setVisible(false);
  };

  return (
    <div className={cx('container')}>
      <form className={cx('form')}>
        <div className={cx('input-box')}>
          <img className={cx('icon')} src="images/link.svg" alt="링크 아이콘" />
          <input
            className={cx('input')}
            type="text"
            placeholder="링크를 추가해 보세요"
            value={inputValue}
            onChange={handleOnChange}
          />
        </div>
        <Cta>
          <button
            className={cx('button')}
            type="submit"
            onClick={handleOnClick}
          >
            추가하기
          </button>
          {visible && (
            <Modal
              title="폴더에 추가"
              subTitle={inputValue}
              stateVisible={visible}
              handleCloseModal={handleCloseModal}
            >
              <ModalForm>
                <div className="folder-list">
                  {folders.map(folderItem => (
                    <ModalFolderList type="button" key={folderItem.id}>
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
          )}
        </Cta>
      </form>
    </div>
  );
};
