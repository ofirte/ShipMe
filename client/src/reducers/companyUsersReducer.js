const companyUsersReducer = (state = [], action) => {
    switch (action.type) {
      case "FETCH_COMPANY_USERS":{
        return action.payload;
      }
      default: {
        return state;
      }
    }
  };
  export default companyUsersReducer;