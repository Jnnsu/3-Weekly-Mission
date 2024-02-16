import { useState, useEffect } from 'react';
import { Modal } from '../Modal/index';
import { ModalButton } from '../Modal/modalButton';
import { getFolder } from '../../api/api';
import * as S from './style';

export const KebabButton = ({ link }) => {
  const [folders, setFolders] = useState([]);
  const [visible, setVisible] = useState(false);
  const [dropDownItem, setDropDownItem] = useState(null);

  const handleClick = e => {
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

  const handleModalFolderListClick = e => {
    e.preventDefault();
    e.stopPropagation();
  };

  let modalContent;

  if (dropDownItem === '삭제하기') {
    modalContent = (
      <Modal
        title="링크 삭제"
        subTitle={link.url}
        stateVisible={visible}
        handleCloseModal={handleCloseModal}
      >
        <S.ModalForm>
          <ModalButton type="delete">삭제하기</ModalButton>
        </S.ModalForm>
      </Modal>
    );
  }

  if (dropDownItem === '폴더에 추가') {
    modalContent = (
      <Modal
        title="폴더에 추가"
        subTitle={link.url}
        stateVisible={visible}
        handleCloseModal={handleCloseModal}
      >
        <S.ModalForm>
          <div className="folder-list">
            {folders.map(folderItem => (
              <S.ModalFolderList
                key={folderItem.id}
                onClick={handleModalFolderListClick}
              >
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
          <ModalButton type="submit">추가하기</ModalButton>
        </S.ModalForm>
      </Modal>
    );
  }

  useEffect(() => {
    const folderData = async () => {
      const data = await getFolder();
      setFolders(data?.data);
    };

    folderData();
  }, []);

  return (
    <>
      <S.KebabButtonContainer>
        <S.DropDownMenuItem onClick={handleClick}>삭제하기</S.DropDownMenuItem>
        <S.DropDownMenuItem onClick={handleClick}>
          폴더에 추가
        </S.DropDownMenuItem>
      </S.KebabButtonContainer>
      {visible && modalContent}
    </>
  );
};
