import { IoSearchSharp } from "react-icons/io5";

import styles from '../components/SearchBox.module.css'
function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.search}>
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
