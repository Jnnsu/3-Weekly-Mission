import { useState } from 'react';
import { Modal } from '../../Modal/index';
import { ModalButton } from '../../Modal/modalButton';
import * as S from './style';

export const AddFolderFloatingButton = () => {
  const [visible, setVisible] = useState(false);

  const handleOnClick = () => {
    setVisible(true);
  };

  const handleCloseModal = () => {
    setVisible(false);
  };

  return (
    <>
      <S.AddFolderContainer onClick={handleOnClick}>
        <span>폴더 추가</span>
        <S.AddIcon src="/images/add-white.svg" />
      </S.AddFolderContainer>
      {visible && (
        <Modal
          title="폴더 추가"
          stateVisible={visible}
          handleCloseModal={handleCloseModal}
        >
          <S.ModalForm>
            <input placeholder="내용 입력"></input>
            <ModalButton type="submit">추가하기</ModalButton>
          </S.ModalForm>
        </Modal>
      )}
    </>
  );
};
