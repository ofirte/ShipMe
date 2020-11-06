const usersListReducer = (state = [], action) => {
    switch (action.type) {
      case "FETCH_USERS_LIST":{
        return [...state,action.payload];
      }
      case 'DELETE_USER_FROM_LIST':{
        return state.filter((user)=>user._id!==action.payload)
      }
      case 'UPDATE_USER_ON_LIST':{
        return state.map((user)=>{
          if(user._id===action.payload._id)
            return action.payload
          return user
        })
      }
      default: {
        return state;
      }
    }
  };
  export default usersListReducer;