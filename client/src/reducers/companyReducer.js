const companyReducer = (state = null, action) => {
    switch (action.type) {
      case "FETCH_COMPANIES":{
        return action.payload;
      }
      case 'ADD_COMPANY':{
        return [...state,action.payload]
      }
      default: {
        return state;
      }
    }
  };
  export default companyReducer;