import { useContext } from "react";
import { SearchContext } from "../App";

const HNDataList = () => {
  // Using useContext to using data inside that context
  const { searchData } = useContext(SearchContext);

  console.log(searchData);

  // Func: date format Handler
  const dateFormatHandler = (date) => {
    return new Intl.DateTimeFormat("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    }).format(new Date(date));
  };

  // Func: handle loading search data table
  const loadingSearchDataHandler = () => {
    return (
      searchData &&
      searchData.map((item, index) => {
        return (
          <tr key={index + 1}>
            <td>{index + 1}</td>
            <td>
              <a href={item?.url}>{item?.title}</a>
            </td>
            <td>{item?.author}</td>
            <td>{item?.points}</td>
            <td>{dateFormatHandler(item?.created_at)}</td>
          </tr>
        );
      })
    );
  };

  // Return <Main Component>
  return (
    <table border="1px solid">
      <thead>
        <tr>
          <th>#</th>
          <th>Article</th>
          <th>Author</th>
          <th>Points</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>{loadingSearchDataHandler()}</tbody>
    </table>
  );
};

export default HNDataList;
