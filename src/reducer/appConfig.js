import {useReducer} from "react";
import Macron from "../classApi/Macron";
import BreakingBad from "../classApi/BreakingBad";
import Lost from "../classApi/Lost";
const lostLib = new Lost();
const macronLib = new Macron();
const breakingbadLib = new BreakingBad();
const initialValue = {
  cardList: [],
  apiType: "macron",
  setBannerImage: "https://images.rtl.fr/~r/880v587/rtl/www/1399235-000-96r782.jpg"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setCardList":
      return {...state, cardList: action.cards};
    case "setApiType":
      console.log("setApiType", state.apiType, action.apiType);
      return {...state, apiType: action.apiType};
    case "setBannerImage":
      return {...state, setBannerImage: action.bannerImage}
    default:
      return state;
  }
}

const middleware = (dispatch) => (action) => {
  switch (action.type) {
    case "getCardList":
      if (action.apiType === "macron") {
        macronLib.getCardList().then(
          (data) => {
            dispatch({type: "setCardList", cards: data})
          }
        );
      }else if (action.apiType === "breakingbad") {
        breakingbadLib.getCardList().then(
          (data) => {
            dispatch({type: "setCardList", cards: data})
          }
        );
      }else if (action.apiType === "lost") {
        lostLib.getCardList().then(
          (data) => {
            dispatch({type: "setCardList", cards: data})
          }
        );
      }
    case "getCardList":  
      if (action.apiType === "macron") {
        dispatch({type: "setBannerImage", bannerImage: macronLib.getBannerImage()});
      }else if (action.apiType === "breakingbad") {
        dispatch({type: "setBannerImage", bannerImage: breakingbadLib.getBannerImage()});

      }else if (action.apiType === "lost") {
        dispatch({type: "setBannerImage", bannerImage: lostLib.getBannerImage()});
      }
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
