import { getData } from './modules/getData.js';
import './modules/route.js';

getData();

routie({
    'users': function() {
      console.log('hello');
    },
    'about': function() {
      console.log('about');
    }
});
