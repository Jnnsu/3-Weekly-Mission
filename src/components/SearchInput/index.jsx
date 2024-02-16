import { useState } from 'react';
import * as S from './style';

export const SearchInput = ({ link, setLink, initialLink }) => {
  const [inputValue, setInputValue] = useState(null);

  const handleSearchInputChange = e => {
    setInputValue(e.target.value);
  };

  const handleSearchFormSubmit = e => {
    e.preventDefault();

    if (inputValue) {
      const filteredLinks = link?.filter(linkItem => {
        return (
          linkItem?.url?.includes(inputValue) ||
          linkItem?.title?.includes(inputValue) ||
          linkItem?.description?.includes(inputValue)
        );
      });
      setLink(filteredLinks);
    }

    if (!inputValue || inputValue === '') {
      setLink(initialLink);
    }
  };

  const handleSearchCancelIconClick = () => {
    setInputValue('');
    setLink(initialLink);
  };

  return (
    <S.SearchForm onSubmit={handleSearchFormSubmit}>
      <S.SearchIcon width="16" src="/images/search.svg" alt="검색 아이콘" />
      <label htmlFor="input-search" />
      <S.SearchInput
        id="input-search"
        placeholder="링크를 검색해 보세요"
        name="searchData"
        onChange={handleSearchInputChange}
        value={inputValue}
      />
      {inputValue && (
        <S.SearchCancelIcon
          src="/images/close-white.png"
          onClick={handleSearchCancelIconClick}
        />
      )}
    </S.SearchForm>
  );
};
