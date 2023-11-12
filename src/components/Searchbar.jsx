export const SearchBar = ({ onSubmit }) => {
  return (
    <header className="searchbar">
      <form
        onSubmit={event => {
          event.preventDefault();

          const formData = new FormData(event.currentTarget);
          onSubmit(formData.get('searchQueryStr'));
        }}
      >
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          name="searchQueryStr"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
