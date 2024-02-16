import { FOLDER_MANAGEMENT_BUTTONS } from '../../constant';
import { FolderManagementButton } from './FolderManagementButton';
import * as S from './style';

export const FolderManagementMenu = ({ selectedFolder }) => {
  return (
    <S.SelectedFolder>
      <S.SelectedFolderMenu>{selectedFolder.name}</S.SelectedFolderMenu>
      {selectedFolder.id !== 'all' && (
        <S.FolderManagementButtonContainer>
          {FOLDER_MANAGEMENT_BUTTONS.map(buttonData => {
            return (
              <FolderManagementButton
                selectedFolder={selectedFolder}
                key={buttonData.text}
                {...buttonData}
              />
            );
          })}
        </S.FolderManagementButtonContainer>
      )}
    </S.SelectedFolder>
  );
};
