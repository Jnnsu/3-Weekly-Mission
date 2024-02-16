import { useState, useEffect } from 'react';
import { getFolderItem } from '../../api/api';
import useStickyState from '../../hooks/useStickyState';
import { Header } from '../../components/Header/index';
import { AddLinkInput } from '../../components/AddLinkInput/index';
import { SearchInput } from '../../components/SearchInput/index';
import { FolderCardList } from '../../components/FolderCardList/index';
import { Footer } from '../../components/Footer/index';

export const Folder = () => {
  const [isSticky, setIsSticky] = useStickyState(true);
  const [link, setLink] = useState([]);
  const [initialLink, setInitialLink] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState({
    name: '전체',
    id: 'all',
  });

  useEffect(() => {
    const folderItemData = async () => {
      const data = await getFolderItem(selectedFolder.id);
      setInitialLink(data?.data);
      setLink(data?.data);
      console.log(data?.data);
    };
    folderItemData();
    return;
  }, []);

  return (
    <>
      <Header isSticky={!isSticky} setIsSticky={setIsSticky} />
      <AddLinkInput />
      <div className="section">
        <SearchInput link={link} setLink={setLink} initialLink={initialLink} />
        <FolderCardList
          link={link}
          setLink={setLink}
          selectedFolder={selectedFolder}
          setSelectedFolder={setSelectedFolder}
          initialLink={initialLink}
        />
      </div>
      <Footer />
    </>
  );
};
