const Productreducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "API_ERROR":
      return {
        ...state,   
        isError: true,
        isLoading: false,
      };

    case "MY_API_DATA":
      const featureData = action.payload.filter((currEle) => {
        return currEle.featured === true;
      });

      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };
    default:
      return state;
  }
};

export default Productreducer;
