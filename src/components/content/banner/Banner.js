import React, {useEffect, useState} from "react";
import "./Banner.scss";
import useMyContext from "../../../reducer/MyContext";
import ClipLoader from "react-spinners/ClipLoader";

const Banner = ({loadingBanner}) => {
  const [reducerState, reducerAction] = useMyContext();
  console.log("reducerState loading beginning Banner", reducerState.loading)
  const [loading, setLoading] = useState(true);
  const [child, setChild] = useState(<ClipLoader color={`red`}/>);
  const [img, setImg] = useState(null);
  
  useEffect(() => {
    if(reducerState.bannerImage){
      setLoading(true)
      
      const image = new Image();
      image.onload = () => {
        setImg(<img alt={`${reducerState.apiType}`} src={reducerState.bannerImage} />)
        setLoading(false)
      }
      image.src = reducerState.bannerImage;
    }
  },[reducerState.bannerImage])

  useEffect(() => {
    if(loading) {
      setChild(<ClipLoader color={`red`}/>)
      reducerAction({type: "setLoading", loading: true});
    }else{
      setChild(img)
      reducerAction({type: "setLoading", loading: false});
      loadingBanner();
      console.log("reducerState loading ending Banner", reducerState.loading)
    }
  },[loading])
  
  return (
    <div className="banner">
      {child}
    </div>
  );
};

export default Banner;
