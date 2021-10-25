function SearchBox({ searchChange = (f) => f }) {
  return (
    <div className="tc">
      <input
        className="tc pa2 ba b-washed-blue bg-washed-red"
        type="search"
        placeholder="Search Hotel"
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;
