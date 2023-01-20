var user_temp = Number(prompt(' give your temperature in digits'));
var user_unit = prompt('your desired unit');
var user_tunit = user_temp   + user_unit;

console.log(user_tunit);


var converted_unit = prompt('state your desired converted unit');
 
if (user_unit == converted_unit) {
    alert('you cant use the same unit restart the process');
}

var first_unit = 'celcius';
 
var second_unit = 'kelvin';
 
var third_unit = 'farenheit';

switch (converted_unit) {
    case first_unit:
        console.log(user_temp + 0 + first_unit)
        break;

    case second_unit:
        console.log(user_temp + 273.16 + second_unit)
        break;

    case third_unit:
        console.log(user_temp + 32 + third_unit)
        break;


    default:
        alert( 'please input the right unit')
        break;
}





//var converted_temp = user_temp  + 273.16;

//console.log(converted_temp);

//var converted_tunit = Math.round(converted_temp)   + converted_unit;

//console.log(converted_tunit);