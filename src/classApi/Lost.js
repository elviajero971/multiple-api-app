export default class BreakingBad {
  
  constructor() {
    this.URL = "http://api.tvmaze.com/shows";
  }

  getMenuList = async() => {
    //fetch /list 
    const menuListArray = [];
    const data = await fetch(this.URL+'/123/cast');
    const dataJson = await data.json();
    const lostActors = dataJson.data;
    for(const value of lostActors) {
      menuListArray.push(value);
    }
    //return data into an array of strings

    return menuListArray;
  }

  getCardList= async() => {
    //fetch /all
    const cardListArray = [];
    const data = await fetch(this.URL+'/123/cast');

    
    const dataJson = await data.json();
    console.log("dataJson value Lost",dataJson);
    const lostActors = dataJson;
    console.log(lostActors);
    for(const value of lostActors) {
      cardListArray.push({img: value.person.image.medium, text: value.person.name});
    }
    //return data into an array of json with image and text
    return cardListArray;
  }

  getBannerImage(){
    return "https://tel.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2FTEL.2Enews.2F2018.2F01.2F12.2Fde23e216-09b5-4025-adaf-aa100c283792.2Ejpeg/1200x600/crop-from/top/quality/80/cr/wqkgQUJD/comment-se-finit-la-serie-lost.jpg";
  }
}
