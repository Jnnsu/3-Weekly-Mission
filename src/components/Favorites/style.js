import styled from 'styled-components';

export const Favorites = styled.div`
  background-color: var(--Linkbrary-bg);
`;

export const FavoritesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 60px;

  @media (min-width: 375px) and (max-width: 767px) {
    padding-top: 10px;
    padding-bottom: 40px;
  }
`;

export const OwnerImage = styled.img`
  width: 40px;

  @media (min-width: 375px) and (max-width: 767px) {
    width: 40px;
  }
`;

export const OwnerName = styled.p`
  font-size: 1.6rem;
  line-height: 24px;
  padding-top: 12px;
  padding-bottom: 20px;

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 1.4rem;
    line-height: normal;
    padding-top: 6px;
    padding-bottom: 10px;
  }
`;

export const FavoritesName = styled.p`
  font-size: 4rem;
  font-weight: 600;

  @media (min-width: 375px) and (max-width: 767px) {
    font-size: 3.2rem;
    font-weight: 600;
  }
`;
