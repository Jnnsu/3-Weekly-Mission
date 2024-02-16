import styled from 'styled-components';

export const Card = styled.a`
  position: relative;
  width: 340px;
  height: 334px;
  border-radius: 15px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);
  overflow: hidden;

  &:hover {
    background-color: #f0f6ff;
  }

  &:focus {
    border: 2px solid var(--Linkbrary-primary-color);
  }
`;

export const CardLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  ${Card}:hover & {
    transform: scale(1.3);
    transition: transform 0.5s ease;
  }
`;

export const FavoriteButton = styled.img`
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 2;
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 15px 20px;
`;

export const TextSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormattedDate = styled.p`
  font-size: 1.3rem;
  color: #666;
`;

export const KebabIcon = styled.button``;

export const Description = styled.p`
  height: 49px;
  font-size: 1.6rem;
  line-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
`;

export const CurrentDate = styled.p`
  font-size: 1.4rem;
  color: #333;
`;
