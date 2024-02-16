import styled from 'styled-components';

const TYPES = {
  delete: '#FF5B56',
  submit: 'linear-gradient(91deg, #6D6AFE 0.12%, #6AE3FE 101.84%)',
  noType: '#808080',
};

export const ModalButton = styled.button`
  color: #ffffff;
  background: ${props => TYPES[props.type] ?? TYPES.noType};
  border-radius: 8px;
  padding: 16px 20px;
  font-size: 1.6rem;
  font-weight: 600;
  width: 100%;

  m &:hover,
  &:active {
    background-color: #463770;
  }
`;
