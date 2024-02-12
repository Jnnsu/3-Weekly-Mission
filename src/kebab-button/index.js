import styled from 'styled-components';

const KebabBtn = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 20px;
  bottom: 40px;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  z-index: 101;
`;

const DropDownBtn = styled.button`
  position: relative;
  font-size: 1.4rem;
  padding: 7px 12px;
  background: #ffffff;

  &:hover {
    color: #6d6afe;
    background: #e7effb;
  }
`;

function Kebab({ onClick }) {
  return (
    <KebabBtn>
      <DropDownBtn onClick={onClick}>삭제하기</DropDownBtn>
      <DropDownBtn onClick={onClick}>폴더에 추가</DropDownBtn>
    </KebabBtn>
  );
}

export default Kebab;
