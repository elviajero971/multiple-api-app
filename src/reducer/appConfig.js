import {useReducer} from "react";

const initialValue = {
  menuList: undefined,
  viewList: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setCardList":
      return {...state, menuList: action.cards};
    default:
      return state;
  }
}

const middleware = (dispatch) => (action) => {
  switch (action.type) {
    case "getCardList":
      fetch(action.url).then(
        data => data.json()
      ).then(
        jsonData => dispatch({type: "setCardList", cards: jsonData.amiibo})
      ).catch(
        () => dispatch({type: "resetView"})
      )
      break;
    
    default:
      dispatch(action);
      break;
  }
}

const AppNetworkReducer = () => {
  const [networkState, networkAction_] = useReducer(reducer, initialValue);
  const networkAction = middleware(networkAction_);
  return [networkState, networkAction];
}

export default AppNetworkReducer;
