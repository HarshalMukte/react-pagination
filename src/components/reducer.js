const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADIND":
      return {
        ...state,
        isLoading: true,
      };
      
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };

    case "REMOVE_POST":
      return{
        ...state,
        hits: state.hits.filter(ele => ele.objectID !== action.payload)
      };

    case "SEARCH_POST":
      console.log(action.payload);
      return{
        ...state,
        query: action.payload
      };
    
    case "PREV_PAGE":
      return{
        ...state,
        page: state.page - 1
      }
    
    case "NEXT_PAGE":
      return{
        ...state,
        page: state.page + 1
      }
    

    default:
      return state;
  }
};

export default reducer;
