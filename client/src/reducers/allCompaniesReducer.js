const allCompaniesReducer = (state = null, action) => {
    switch (action.type) {
      case "FETCH_ALL_COMPANIES":{
        return action.payload;
      }
      default: {
        return state;
      }
    }
  };
  export default allCompaniesReducer;