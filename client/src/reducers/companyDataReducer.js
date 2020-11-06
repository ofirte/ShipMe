const companyDataReducer = (state = null, action) => {
    switch (action.type) {
      case "FETCH_COMPANY_DATA":{
        return action.payload[0];
      }
      case "COMPANY_IMG_CHANGE":{
          return {...state,imageUrl:action.payload}
      }
      case "UPDATE_COMPANY_DATA":{
        return {...state}
    }
      default: {
        return state;
      }
    }
  };
  export default companyDataReducer;