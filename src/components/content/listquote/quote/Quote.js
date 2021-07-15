import React, {useEffect, useState} from "react";
import "./Quote.scss";
import useMyContext from "../../../../reducer/MyContext";
import ClipLoader from "react-spinners/ClipLoader";

const Quote = (props) => {

  const [reducerState, reducerAction] = useMyContext();

  const [loading, setLoading] = useState(true);
  const [child, setChild] = useState(<ClipLoader color={`red`}/>);
  const [img, setImg] = useState(null);
  const [text, setText] = useState(null);
  const [childText, setChildText] = useState(<ClipLoader color={`red`}/>);
  useEffect(() => {
    if(reducerState.cardList){
      setLoading(true)
      
      const image = new Image();
      image.onload = () => {
        setImg(<img alt={props.data.text} src={props.data.img} />)
        setText(<div className={viewColorDisplay}>{props.data.text}</div>)
        setLoading(false)
      }
      image.src = props.data.img;
    }
  },[reducerState.cardList])

  useEffect(() => {
    if(loading) {
      setChild(<ClipLoader color={`red`}/>)
      setChildText(<ClipLoader color={`red`}/>)
    }else{
      setChild(img)
      setChildText(text)
      props.loadingQuote();
    }
  },[loading])

  let viewColorDisplay = "content-quote";

  if (reducerState.viewMode === "lightMode") {
    viewColorDisplay="content-quote viewLightMode";
  }else {
    viewColorDisplay="content-quote";
  }

  return (
    <div className="content-quote">
      <div className="img">
        {child}
      </div>
      {childText}
    </div>
  );
};

export default Quote;
