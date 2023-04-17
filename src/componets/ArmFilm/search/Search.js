import { useSelector, useDispatch } from "react-redux";
import { searches, types } from "../store/selector";
import { setSearch, setType } from "../store/actions";

const Search = ({ searchMovies }) => {
  const dispatch = useDispatch();
  const search = useSelector(searches);
  const type = useSelector(types);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      searchMovies(search, type);
    }
  };

  const handleFilter = (e) => {
    dispatch(setType(e.target.dataset.type));
    searchMovies(search, e.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field">
        <input
          className="validate"
          placeholder="search"
          type="search"
          value={search}
          onChange={(e) => dispatch(setSearch(e.target.value))}
          onKeyDown={handleKey}
        />
        <button
          className="btn search-btn"
          onClick={() => searchMovies(search, type)}
        >
          Search
        </button>
      </div>
      <div>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="all"
            onChange={handleFilter}
            checked={type === "all"}
          />
          <span className="text">All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={type === "movie"}
          />
          <span className="text">Movies only</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="type"
            type="radio"
            data-type="series"
            onChange={handleFilter}
            checked={type === "series"}
          />
          <span className="text">Series Only</span>
        </label>
      </div>
    </div>
  );
};

export default Search;
