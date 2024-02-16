import { formatDate, returnUploadDate } from '../../../utils';
import { KebabButton } from '../../KebabButton/index';
import * as S from './style';

export const Card = ({ link, isActive, onKebabToggle }) => {
  const handleClick = e => {
    e.preventDefault();
    e.stopPropagation();

    onKebabToggle();
  };

  const stopPropagation = e => {
    e.stopPropagation();
  };

  return (
    <>
      <S.Card
        href={link.url}
        target="_blank"
        rel="noreferrer"
        onClick={stopPropagation}
      >
        <S.CardLink>
          <S.CardImage
            src={link.image_source ? link.image_source : '/images/no-image.svg'}
            alt={link.title}
          />
        </S.CardLink>
        <S.FavoriteButton
          src="/images/star.svg"
          width="34px"
          alt="즐겨찾기 아이콘"
        />
        <S.ContainerText>
          <S.TextSection>
            <S.FormattedDate>{formatDate(link)}</S.FormattedDate>
            <S.KebabIcon onClick={handleClick}>
              <img src="/images/kebab.svg" width="21px" alt="케밥 아이콘" />
            </S.KebabIcon>
            {isActive && <KebabButton link={link} />}
          </S.TextSection>
          <S.Description>{link.description}</S.Description>
          <S.CurrentDate>{returnUploadDate(link)}</S.CurrentDate>
        </S.ContainerText>
      </S.Card>
    </>
  );
};
