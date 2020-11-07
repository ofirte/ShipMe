const allCompaniesReducer = (state = null, action) => {
    switch (action.type) {
      case "FETCH_ALL_COMPANIES":{
        return action.payload;
      }
      case "DELETE_COMPANY":{
        return state.filter((company)=>company._id!==action.payload)
      }
      default: {
        return state;
      }
    }
  };
  export default allCompaniesReducer;