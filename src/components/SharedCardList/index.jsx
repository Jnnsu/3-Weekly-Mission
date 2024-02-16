import { useEffect, useState } from 'react';
import { getFolderSample } from '../../api/api';
import { CardList } from '../CardList/index';

export const SharedCardList = () => {
  const [link, setLink] = useState();

  useEffect(() => {
    const folderSampleData = async () => {
      const data = await getFolderSample();
      setLink(data);
    };

    folderSampleData();
    return;
  }, []);

  return <CardList link={link} />;
};
