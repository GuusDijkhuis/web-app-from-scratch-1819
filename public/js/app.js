import { getAllData, getSingleData } from './modules/getData.js';
// import { renderDetailsPokemon } from './modules/renderData.js'
import './modules/route.js';

routie({
  '': function() {
    getAllData();
  },
  ':name': function(res) {
    getSingleData(res)
  }
});
