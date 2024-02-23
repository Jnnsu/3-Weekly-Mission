import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { CardList } from '../CardList/index';
import { FolderMenu } from '../FolderMenu';
import { FolderManagementMenu } from '../FolderManagementMenu';
import { AddFolderFloatingButton } from '../AddFolderButton/FloatingButton/index';
import { getFolder, getFolderItem } from '@/api/api';
import styles from './styles.module.css';
import { Folder, FolderItem, SelectedFolder } from '@/types/Common';

interface Props {
  links: FolderItem[];
  setLinks: Dispatch<SetStateAction<FolderItem[]>>;
  selectedFolder: SelectedFolder;
  setSelectedFolder: Dispatch<SetStateAction<SelectedFolder>>;
}

export const FolderCardList = ({
  links,
  setLinks,
  selectedFolder,
  setSelectedFolder,
}: Props) => {
  const [folder, setFolder] = useState<Folder[]>([]);
  const handleFolderMenuClick = async (
    folderId: string | number,
    folderName: string,
  ) => {
    setSelectedFolder({ id: folderId, name: folderName });

    const folderItems = await getFolderItem(folderId);
    setLinks(folderItems);
  };

  useEffect(() => {
    const getFolderData = async () => {
      const folderData = await getFolder();
      setFolder(folderData);
    };
    getFolderData();
  }, []);

  return (
    <div className={styles['folder-card-list']}>
      <FolderMenu
        folder={folder}
        selectedFolder={selectedFolder}
        handleFolderMenuClick={handleFolderMenuClick}
      />
      <FolderManagementMenu selectedFolder={selectedFolder} />
      <CardList links={links} />
      <AddFolderFloatingButton />
    </div>
  );
};
