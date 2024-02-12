import { useState } from 'react';
import styles from './AddFolderButton.module.scss';
import classNames from 'classnames/bind';
import { ReactComponent as AddIcon } from './add.svg';
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
    margin-bottom: 15px;
    padding: 18px 15px;
    border: 1px solid #ccd5e3;
    border-radius: 8px;
  }
`;

export const AddFolderButton = () => {
  const [visible, setVisible] = useState(false);

  const handleOnClick = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  return (
    <>
      <button className={cx('container')} onClick={handleOnClick}>
        <span>폴더 추가</span>
        <AddIcon className={cx('icon')} />
      </button>
      {visible && (
        <Modal
          title="폴더 추가"
          stateVisible={visible}
          handleCloseModal={handleCloseModal}
        >
          <ModalForm>
            <input placeholder="내용 입력"></input>
            <Button type="submit">추가하기</Button>
          </ModalForm>
        </Modal>
      )}
    </>
  );
};
