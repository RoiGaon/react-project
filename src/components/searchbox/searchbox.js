function SearchBox(props) {
  return (
    <div className="tc">
      <input
        className="tc pa2 ba b-washed-blue bg-washed-red"
        type="search"
        placeholder="Search Hotel"
        onChange={props.searchChange}
      />
    </div>
  );
}

export default SearchBox;
