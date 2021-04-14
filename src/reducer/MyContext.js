import React from "react";
export const MyContext = React.createContext();
const useMyContext = () => {
  return React.useContext(MyContext);
}

export default useMyContext;