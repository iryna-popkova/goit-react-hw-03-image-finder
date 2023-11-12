import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './Searchbar.styled';

import { GoRocket } from 'react-icons/go';

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
          <GoRocket size={30} />
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
