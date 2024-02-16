import Modal from '../index.jsx';
import Button from '../modalButton.js';
import * as S from './style.js';

export const AddLinkModal = ({
  folders,
  inputValue,
  visible,
  handleCloseModal,
}) => {
  return (
    <Modal
      title="폴더에 추가"
      subTitle={inputValue}
      stateVisible={visible}
      handleCloseModal={handleCloseModal}
    >
      <S.ModalForm>
        <div className="folder-list">
          {folders.map(folderItem => (
            <S.ModalFolderList type="button" key={folderItem.id}>
              <div className="folder-item">
                <p className="folder-item-name">{folderItem.name}</p>
                <p className="folder-item-count">
                  {folderItem.link.count}개 링크
                </p>
              </div>
              <img src="./images/check.png" alt="체크" />
            </S.ModalFolderList>
          ))}
        </div>
        <Button type="submit">추가하기</Button>
      </S.ModalForm>
    </Modal>
  );
};
