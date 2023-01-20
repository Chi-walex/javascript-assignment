var user_temp = Number(prompt('your temperature'));
var user_unit = 'celsius';
var user_tunit = user_temp   + user_unit;

console.log(user_tunit);


var converted_unit = 'kelvin';
var converted_temp = user_temp  + 273.16;

console.log(converted_temp);

var converted_tunit = Math.round(converted_temp)   + converted_unit;

console.log(converted_tunit);