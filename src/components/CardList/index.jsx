import { useState } from 'react';
import { Card } from './Card/index';
import * as S from './style';

export const CardList = ({ link }) => {
  const [activeKebab, setActiveKebab] = useState(null);

  return (
    <>
      <S.CardList>
        {link && link.length > 0 ? (
          link?.map(link => {
            return (
              <Card
                key={link.id}
                link={link}
                isActive={activeKebab === link.id}
                onKebabToggle={() => setActiveKebab(link.id)}
              />
            );
          })
        ) : (
          <S.NoLink>저장된 링크가 없습니다.</S.NoLink>
        )}
      </S.CardList>
    </>
  );
};
