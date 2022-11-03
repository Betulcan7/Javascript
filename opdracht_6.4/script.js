
//oefening 1:

function calculator(num, num2) {
    let answer = num + num2;
    console.log(answer);
}

calculator(7, 13);



//oefening 2:

let multiplyByFive = function(start, range) {
    let random = Math.floor((Math.random() * range) + start);
    return random;
}

console.log(multiplyByFive(5,5))



//oefening 3:

const convert_time = function (calculateMinutes) {
   
    let minutes = 60 / calculateMinutes;
    console.log(minutes);
}

console.log(convert_time(60))