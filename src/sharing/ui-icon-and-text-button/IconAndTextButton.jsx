import { useState } from 'react';
import styles from './IconAndTextButton.module.scss';
import classNames from 'classnames/bind';
import Modal from '../../modal/index';
import Button from '../../modal/modalButton';
import styled from 'styled-components';
import KakaoShareButton from '../../share-button/kakao-share-button';
import FacebookShareButton from '../../share-button/facebook-share-button';
import LinkCopyButton from '../../share-button/link-copy-button';

const cx = classNames.bind(styles);

const ModalForm = styled.div`
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

const ShareButton = styled.div`
  display: flex;
  gap: 32px;
`;

export const IconAndTextButton = ({ selectedFolder, iconSource, text }) => {
  const [visible, setVisible] = useState(false);

  const handleOnClick = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  let modalContent;

  if (text === '삭제') {
    modalContent = (
      <Modal
        title={`폴더 ${text}`}
        subTitle={selectedFolder}
        stateVisible={visible}
        handleCloseModal={handleCloseModal}
      >
        <ModalForm>
          <Button type="delete">삭제하기</Button>
        </ModalForm>
      </Modal>
    );
  }

  if (text === '공유') {
    modalContent = (
      <Modal
        title={`폴더 ${text}`}
        subTitle={selectedFolder}
        stateVisible={visible}
        handleCloseModal={handleCloseModal}
      >
        <ModalForm>
          <ShareButton>
            <KakaoShareButton />
            <FacebookShareButton />
            <LinkCopyButton />
          </ShareButton>
        </ModalForm>
      </Modal>
    );
  }

  if (text === '이름 변경') {
    modalContent = (
      <Modal
        title={`폴더 ${text}`}
        stateVisible={visible}
        handleCloseModal={handleCloseModal}
      >
        <ModalForm>
          <input placeholder="내용 입력"></input>
          <Button type="submit">변경하기</Button>
        </ModalForm>
      </Modal>
    );
  }

  return (
    <>
      <button className={cx('container')} onClick={handleOnClick}>
        <img className={cx('icon')} src={iconSource} alt={`${text} 아이콘`} />
        <span className={cx('text')}>{text}</span>
      </button>
      {visible && modalContent}
    </>
  );
};
