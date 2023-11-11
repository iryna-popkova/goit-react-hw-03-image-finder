import styles from './src/styles';

export const SearchBar = ({ onSubmit }) => {
  return (
    <header className={styles.Searchbar}>
      <form
        class="form"
        onSubmit={event => {
          event.preventDefault();
          onSubmit(event.target.value);
          event.target.value = '';
        }}
      >
        <button type="submit" class="button">
          <span class="button-label">Search</span>
        </button>

        <input
          class="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
