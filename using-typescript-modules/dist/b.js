import * as strings from './a';
console.log(strings.aString);
import { reverse, isOdd } from './utils';
console.log(reverse('test'), isOdd(1));
//import defaultString from './a';
//console.log(defaultString);
//Conditional import using ESNext module loading method
if (Math.random() >= 0.5) {
    import('./a').then(a => console.log("The message is: ", a.aString));
}
import * as config from './config.json';
console.log(config.userSetting1);
import { cube } from 'cube';
let cubedNum = cube(24);
console.log(cubedNum);
cube();
import $ from 'jquery';
$(document).ready(() => console.log("jQuery"));
$().debug = function () {
    console.debug($(this));
    return $(this);
};
