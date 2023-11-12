import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

import { AiOutlineSearch } from 'react-icons/ai';

export const SearchBar = ({ onSubmit }) => {
  return (
    <Header className="searchbar">
      <SearchForm
        onSubmit={event => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);
          onSubmit(formData.get('searchQueryStr'));
        }}
      >
        <SearchFormButton type="submit" className="button">
          <AiOutlineSearch size={30} />
        </SearchFormButton>

        <SearchFormInput
          className="input"
          name="searchQueryStr"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};
