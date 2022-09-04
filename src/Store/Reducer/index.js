const initialState = {
    selectedItem: [],
    restaurentname: "",
    quantity: 0,
    total: 540,
  };
  
  const reducer = (state = initialState, action) => {
    console.log("reducer action ==>", action);
    switch (action.type) {
      case "SET NAME":
        // console.log(action.payload);
        return {
          ...state,
          restaurentname: action.payload,
        };
      case "ADD TO CART":
        return {
          ...state,
          selectedItem: [...state.selectedItem, action.payload.item],
        };
  
      case "CLEAR CART": {
        return {
          ...state,
          selectedItem: [],
        };
      }
      case "REMOVE ITEM": {
        let temp = [...state.selectedItem];
        temp.splice(action.payload, 1);
  
        return {
          ...state,
          selectedItem: temp,
        };
      }
      default:
        return state;
    }
  };
  console.log(initialState);
  export default reducer;
  