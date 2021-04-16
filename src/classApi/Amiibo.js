export default class Amiibo {
  
  constructor() {
    this.URL = 'https://www.amiiboapi.com/api';
  }

  getMenuList = async() => {
    //fetch /list 
    const menuListArray = [];
    const data = await fetch(this.URL+'/amiibo/');
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
    const data = await fetch(this.URL+'/amiibo/');

    
    const dataJson = await data.json();
    const characters = dataJson.amiibo;
    for(const value of characters) {
      cardListArray.push({img: value.image, text: value.name});
    }
    //return data into an array of json with image and text
    return cardListArray;
  }

  getBannerImage(){
    return "https://cdn03.nintendo-europe.com/media/images/10_share_images/others_3/amiibo_4/H2x1_Amiibo_main_image1600w.jpg";
  }
}