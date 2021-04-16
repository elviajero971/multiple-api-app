export default class BreakingBad {
  
  constructor() {
    this.URL = 'https://www.breakingbadapi.com/api';
  }

  getMenuList = async() => {
    //fetch /list 
    const menuListArray = [];
    const data = await fetch(this.URL+'/characters');
    const dataJson = await data.json();
    const characters = dataJson.data;
    for(const value of characters) {
      menuListArray.push(value);
    }
    //return data into an array of strings

    return menuListArray;
  }

  getCardList= async() => {
    //fetch /all
    const cardListArray = [];
    const data = await fetch(this.URL+'/characters');

    
    const dataJson = await data.json();
    const characters = dataJson;
    for(const value of characters) {
      cardListArray.push({img: value.img, text: value.name});
    }
    //return data into an array of json with image and text
    return cardListArray;
  }

  getBannerImage(){
    return "https://www.webstickersmuraux.com/fr/img/asfs583-jpg/folder/products-listado-merchanthover/autocollants-breaking-bad-logo.jpg";
  }
}