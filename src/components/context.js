import { getByDisplayValue } from "@testing-library/react";
import React, {
  createContext,
  useContext,
  useEffect,
  useReducer
} from "react";
import reducer from "./reducer";

const AppContext = createContext();
const api = "http://hn.algolia.com/api/v1/search?query=";

const initialState = {
  isLoading: true,
  query: "HTML",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADIND" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: "GET_STORIES",
        payload: { hits: data.hits, nbPages: data.nbPages },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // To remove post
  const removePost = (id) => {
    dispatch({ type: "REMOVE_POST", payload: id });
  };

  //for Searching POst
  const searchPost = (searchValue) => {
    dispatch({ type: "SEARCH_POST", payload: searchValue });
  };

  //to go to next page
  const nextPage =() => {
    dispatch({ type: "NEXT_PAGE" })
  }

  //to go to previous page
  const prevPage =() => {
    dispatch({ type: "PREV_PAGE" })
  }

  // to call the api function
  useEffect(() => {
    fetchApiData(`${api}${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider value={{ ...state, removePost, searchPost, nextPage, prevPage }}>
      {children}
    </AppContext.Provider>
  );
};

// creating a custome hook for not to write the import useContect hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useGlobalContext };
