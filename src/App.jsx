import { createContext, useState } from "react";
import "./App.css";
import useSearchTerm from "./hooks/useSearchTerm";
import useDebounce from "./hooks/useDebounce";
import HNDataList from "./components/HNDataList";

// Create Search Context
const SearchContext = createContext({
  // Using Custom Search Hook
  searchData: [],
});

function App() {
  // Using useState Hook To Manage Search Input
  const [searchTerm, setSearchTerm] = useState("");

  // Func: handle search input
  const searchInputHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  // Using use debounce hook to delay update search input data
  const debounceSearchTerm = useDebounce(searchTerm, 2000);

  // Return <Main Component>
  return (
    <>
      <input
        type="search"
        placeholder="Search HN"
        value={searchTerm}
        onChange={searchInputHandler}
      />

      <SearchContext.Provider
        value={{ searchData: useSearchTerm(debounceSearchTerm) }}
      >
        <HNDataList />
      </SearchContext.Provider>
    </>
  );
}

export default App;
export { SearchContext };
