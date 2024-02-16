import { AddFolderButton } from '../AddFolderButton';
import * as S from './style';

export const FolderMenu = ({ folder, selectedFolder, handleClick }) => {
  return (
    <S.FolderMenu>
      <S.FolderCategories>
        <S.FolderButton
          onClick={() => handleClick('all', '전체')}
          selectedFolder={selectedFolder.id === 'all'}
        >
          전체
        </S.FolderButton>
        {folder.map(folderItem => (
          <S.FolderButton
            key={folderItem.id}
            onClick={() => handleClick(folderItem.id, folderItem.name)}
            selectedFolder={selectedFolder.id === folderItem.id}
          >
            {folderItem.name}
          </S.FolderButton>
        ))}
      </S.FolderCategories>
      <AddFolderButton />
    </S.FolderMenu>
  );
};
