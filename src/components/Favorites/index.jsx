import { getFolderSample } from '../../api/api';
import { useState, useEffect } from 'react';
import * as S from './style';

export const Favorites = () => {
  const [favorites, setFavorites] = useState();

  useEffect(() => {
    (async () => {
      const data = await getFolderSample();
      setFavorites(data);
    })();
  }, []);

  return (
    <S.Favorites>
      <S.FavoritesContainer>
        <S.OwnerImage
          src={favorites?.owner?.profileImageSource}
          width="60"
          alt="프로필 이미지"
        />
        <S.OwnerImage>{favorites?.owner?.name}</S.OwnerImage>
        <S.FavoritesName>{favorites?.name}</S.FavoritesName>
      </S.FavoritesContainer>
    </S.Favorites>
  );
};
