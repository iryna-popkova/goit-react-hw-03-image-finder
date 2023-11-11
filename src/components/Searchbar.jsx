export const SearchBar = ({ onSubmit }) => {
  return (
    <header className="searchbar">
      <form
        onSubmit={event => {
          event.preventDefault();
          console.log(event.target);
          onSubmit(event.target.value);
          event.target.value = '';
        }}
      >
        <button type="submit" className="button">
          <span className="button-label">Search</span>
        </button>

        <input
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
