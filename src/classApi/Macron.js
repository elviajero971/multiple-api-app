
class Macron {
  
  constructor(reducer) {
    this.reducer = reducer;
    this.URL = 'http://macronfact.antonin-dev.fr/factjson';
  }

  getMenuList = async() => {
    //fetch /list 
    const menuListArray = [];
    const data = await fetch(this.URL+'/list');
    const dataJson = await data.json();
    const autors = dataJson.data;
    for(const value of autors) {
      menuListArray.push(value);
    }
    //return data into an array of strings

    return menuListArray;
  }

  getCardList= async() => {
    //fetch /all
    const cardListArray = [];
    const data = await fetch(this.URL+'/all');
    const dataJson = await data.json();
    const facts = dataJson.data;
    for(const value of facts) {
      cardListArray.push({img: value.img, text: value.fact});
    }
    //return data into an array of json with image and text
    return cardListArray;
  }
}