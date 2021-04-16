import {useReducer} from "react";
import Macron from "../classApi/Macron";
import BreakingBad from "../classApi/BreakingBad";
import Lost from "../classApi/Lost";
const lostLib = new Lost();
const macronLib = new Macron();
const breakingbadLib = new BreakingBad();

const initialValue = {
  viewMode: "darkMode",
  cardList: [],
  apiType: "macron",
  bannerImage: "https://images.rtl.fr/~r/880v587/rtl/www/1399235-000-96r782.jpg"
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setCardList":
      return {...state, cardList: action.cards};
    case "setApiType":
      return {...state, apiType: action.apiType};
    case "setBannerImage":
      console.log("newImage",action.setBannerImage);
      if (action.bannerImage === "bb") {
        return {...state, bannerImage: breakingbadLib.getBannerImage()};
      }else if (action.bannerImage === "macron") {
        return {...state, bannerImage: macronLib.getBannerImage()};
      }else if (action.bannerImage === "lost") {
        return {...state, bannerImage: lostLib.getBannerImage()};
      }
      return {...state};
    case "setViewMode":
      return {...state, viewMode: action.payload};
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
      break;
    case "setBannerImage":  
      if (action.apiType === "macron") {
        dispatch({type: "setBannerImage", bannerImage: macronLib.getBannerImage()});
      }else if (action.apiType === "breakingbad") {
        dispatch({type: "setBannerImage", bannerImage: breakingbadLib.getBannerImage()});

      }else if (action.apiType === "lost") {
        dispatch({type: "setBannerImage", bannerImage: lostLib.getBannerImage()});
      }
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
