import { useState, useEffect } from 'react';
import { Modal } from '../Modal/index';
import { ModalButton } from '../Modal/modalButton';
import { getFolder } from '../../api/api';
import * as S from './style';

export const AddLinkInput = () => {
  const [folders, setFolders] = useState([]);
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => {
    setInputValue(e.value);
  };

  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();
    setVisible(!visible);
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

  let modalContent = (
    <Modal
      title="폴더에 추가"
      subTitle={inputValue}
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

  useEffect(() => {
    const folderData = async () => {
      const data = await getFolder();
      setFolders(data?.data);
    };

    folderData();
  }, []);

  return (
    <>
      <S.AddLinkForm>
        <S.InputContainer>
          <S.LinkIcon width="20" src="/images/link.svg" alt="링크 아이콘" />
          <label htmlFor="input-link" />
          <S.AddLinkInput
            id="input-link"
            placeholder="링크를 추가해 보세요"
            name="addLinkData"
            onChange={handleInputChange}
            value={inputValue}
          />
          <S.AddLinkButton onClick={handleClick}>추가하기</S.AddLinkButton>
        </S.InputContainer>
      </S.AddLinkForm>
      {visible && modalContent}
    </>
  );
};
