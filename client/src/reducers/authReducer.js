const authReducer = (state = null, action) => {

    switch (action.type) {

      case "LOGIN":{
        return action.payload || false;
      }
      case "LOGOUT":{
        localStorage.clear()
        return false;
      }
      case "PROFILE_IMG_CHANGE":{
        return {...state,data:{...state.data,imageUrl:action.payload}}
      }
      default: {
        return state;
      }
    }
  };
  export default authReducer;