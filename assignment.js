var user_temp = Number(prompt(' give your temperature in digits`'));
var user_unit = prompt('your desired standard temperature unit');
var converted_unit = prompt('state your desired standard temperature unit to be converted into');
 
var converted_temp;

var first_unit = 'celcius';
 
var second_unit = 'kelvin';
 
var third_unit = 'farenheit';


if (user_unit === first_unit, converted_unit === second_unit) {
    converted_temp = user_temp + 273.15 + second_unit;
    console.log(converted_temp);
}
else if (user_unit === first_unit, converted_unit === third_unit) {
    converted_temp = ((1.8 * user_temp ) + 32) + third_unit ;
    console.log(converted_temp);
}
else if (user_unit === second_unit, converted_unit === first_unit) {
    converted_temp = user_temp - 273.15 + first_unit;
    console.log(converted_temp);
}
else if (user_unit === second_unit, converted_unit === third_unit) {
    converted_temp = (1.8 * (user_temp - 273.15) + 32) + third_unit;
    console.log(converted_temp);
}
else if (user_unit === third_unit, converted_unit === first_unit) {
    converted_temp = (0.556 * (user_temp-32)) + first_unit;
    console.log(converted_temp);
}
else if (user_unit === third_unit, converted_unit === second_unit){
    converted_temp = ((0.556 * user_temp) + 459.67) + second_unit
    console.log(converted_temp);
}
else if(user_unit === converted_unit){
    alert('same unit');
}
else {
    alert('wrong unit input');
} 
    



  