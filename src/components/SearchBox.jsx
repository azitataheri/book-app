import { IoSearchSharp } from "react-icons/io5";

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div>
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button onClick={searchHandler}>
        <IoSearchSharp />{" "}
      </button>
    </div>
  );
}

export default SearchBox;
