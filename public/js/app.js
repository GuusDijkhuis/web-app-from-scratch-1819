import { getAllData, getSingleData, getAllTypes, getLocalTeamData } from './modules/getData.js';

import './modules/route.js';

(function() {
  getLocalTeamData();
})()

routie({
  '': function() {
    getAllData();
  },
  ':name': function(res) {
    getSingleData(res);
  },
  'type/:type': function(res) {
    getAllTypes(res);
  }
});
