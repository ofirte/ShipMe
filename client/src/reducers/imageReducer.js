const imageReducer = (state = null, action) => {
    switch (action.type) {
      case "UPDATE_IMAGE_LOCAL":{
        return action.payload;
      }
      default: {
        return state;
      }
    }
  };
  export default imageReducer;