import React from "react";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Stories from "./components/Stories";

const App = () => {
  return (
    <div className="wrapper">
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
};

export default App;
