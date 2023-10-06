import { useEffect, useState } from "react";

// Func: Fetch API
const sendHttpRequest = (method, url, data) => {
  return fetch(url, {
    method: method,
    body: data,
    headers: data ? { "Content-Type": "application/json" } : {},
  }).then((response) => {
    return response.json();
  });
};

// Custom Hook: Handler Search Query
const useSearchTerm = (searchTerm) => {
  // Using useState Hook To Manage Search Data
  const [searchData, setSearchData] = useState();

  // Func: Handle update search data
  const updateSearchDataHandler = (searchData) => {
    setSearchData(searchData);
  };

  useEffect(() => {
    sendHttpRequest(
      "GET",
      `http://hn.algolia.com/api/v1/search?query=${searchTerm}`
    ).then((responseData) => {
      //   console.log(responseData.hits);
      updateSearchDataHandler(responseData.hits);
    });
  }, [searchTerm]);

  return searchData;
};

export default useSearchTerm;
