import { useState } from 'react';
import { Modal } from '../../Modal/index';
import { ModalButton } from '../../Modal/modalButton';
import { KakaoShareButton } from '../../ShareButton/KakaoShareButton';
import { FacebookShareButton } from '../../ShareButton/FacebookShareButton';
import { LinkShareButton } from '../../ShareButton/LinkShareButton';
import * as S from './style';

export const FolderManagementButton = ({
  selectedFolder,
  iconSource,
  text,
}) => {
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
        subTitle={selectedFolder.name}
        stateVisible={visible}
        handleCloseModal={handleCloseModal}
      >
        <S.ModalForm>
          <ModalButton type="delete">삭제하기</ModalButton>
        </S.ModalForm>
      </Modal>
    );
  }

  if (text === '공유') {
    modalContent = (
      <Modal
        title={`폴더 ${text}`}
        subTitle={selectedFolder.name}
        stateVisible={visible}
        handleCloseModal={handleCloseModal}
      >
        <S.ModalForm>
          <S.ShareButton>
            <KakaoShareButton />
            <FacebookShareButton />
            <LinkShareButton />
          </S.ShareButton>
        </S.ModalForm>
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
        <S.ModalForm>
          <input placeholder="내용 입력"></input>
          <ModalButton type="submit">변경하기</ModalButton>
        </S.ModalForm>
      </Modal>
    );
  }

  return (
    <>
      <S.ButtonContainer onClick={handleOnClick}>
        <S.ButtonIcon src={iconSource} alt={`${text} 아이콘`} />
        <S.ButtonText>{text}</S.ButtonText>
      </S.ButtonContainer>
      {visible && modalContent}
    </>
  );
};
