
const setName = (name) => {
    // console.log("name action==>", name);
    return {
      type: "SET NAME",
      payload: name,
    };
  };
  
  const addToCart = (item) => {
     console.log("item action==>", item);
    return {
      type: "ADD TO CART",
      payload: item,
    };
  };
  
  const clearCart = () => {
    // console.log("clear");
    return {
      type: "CLEAR CART",
    };
  };
  
  const removeItem = (id) => {
    // console.log("remove==>", id);
    return {
      type: "REMOVE ITEM",
      payload: id,
    };
  };
  
  export { addToCart, clearCart, removeItem, setName };
  