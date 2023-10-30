import "./SearchResults.css";

// eslint-disable-next-line react/prop-types
export const SearchResult = ({ result }) => {
  return (
    <div
      className="search-result"
      // eslint-disable-next-line no-unused-vars
      onClick={(e) => alert(`You selected ${result}!`)}
    >
      {result}
    </div>
  );
};