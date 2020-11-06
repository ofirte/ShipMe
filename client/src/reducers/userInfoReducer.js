const usersInfoReducer = (state = [], action) => {
    switch (action.type) {
      case "FETCH_USERS_INFO":{
        return action.payload;
      }
      case 'USER_IMG_CHANGE':{
        return {...state,imageUrl:action.payload}
      }
      default: {
        return state;
      }
    }
  };
  export default usersInfoReducer;