// CHANGING CASE

// q no 1

// var allLower = userInput.toLowerCase();

// q no 2

// var x = "LOWER CASE";

// x = x.toLowerCase();

// q no 3

// var y = "upper case";

// y = y.toUpperCase();

// q no 4

// var city = "KARACHI";

// var result = city.toLowerCase();

// q no 5

// var city = ["KARACHI" , "LAHORE" , "ISLAMABAD" , "QUETTA"];

// var lowerCase = city[0].toLowerCase();

// q no 6

// var a = "cake";

// alert(a.toUpperCase());

// q no 7

// var cityName = "kaRacHi";

// var firstChar = cityName.slice(0,1).toUpperCase();

// var remainChar = cityName.slice(1).toLowerCase();

// console.log(firstChar + remainChar);

// STRINGS

// q no 1

// var sameWords = "captain";

// var result = sameWords.slice(1,3);

// q no 2

// var city = "karachi";

// var lenght = city.length;

// q no 3

// var animal = "elephant";

// var seg = animal.slice(2,6);

// q no 4

// var animal = "elephant";

// var number = animal.length;

// q no 5

// var animal = "elephant";

// console.log(animal.length);

// var section = animal.slice(1,5);

// console.log(section);

// q no 6

// var text = "To be or not to be.";

// var indx = text.indexOf("be");

// console.log(indx);

// q no 7

// var text = "To be or not to be.";

// var indx = text.lastIndexOf("be");

// console.log(indx);

// q no 8

// var text = "go" ;

// var indx = text.indexOf("g");

// console.log(indx);

// q no 9

// var indexNum = 1;

// var str = "segment";

// if (str(indexNum)) {

//   console.log(true);

// }

// q no 10

// var a = "abcde" ;

// var character = a.charAt(2);

// console.log(character);

// q no 11

// var text = "Ten Characters";

// var cha = text.charAt(10);

// console.log(cha);

// q no 12

// var str = "Ten Characters";

// var x = str.charAt(13);

// console.log(x);

// q no 13

// var input = "Ten Characters";

// var cha = input.charAt(5);

// console.log(cha);

// q no 14

// var str = "character" ;

// console.log(str.includes("r"));

// q no 15

// var str = "No, This is a character." ;

// for(var i = 0 ; i < str.length ; i++){
//     if (str.slice(i,i +2) === "No"){
//         str = str.slice(0,i) + "Yes" + str.slice(i+2) ;
//     }
// }

// console.log(str);

// q no 16

// var str = "123" ;

// var newStr = str.replace("1" , "one");

// console.log(newStr);

// q no 17

// var y = x.replaceAll("a", "z");

// ROUNDING NUMBERS

// q no 1

// var num = 2.5 ;

// console.log(Math.round(num));

// q no 2

// var origNum = 3.2 ;

// var roundNum = Math.ceil(origNum);

// console.log(roundNum);

// q no 3

// var origNum = 3.9;

// var roundNum = Math.floor(origNum);

// console.log(roundNum);

// q no 4

// var origNum = 3.9;

// var roundNum = Math.round(origNum);

// q no 5

// var num1 = .5 ;

// var num2 = Math.floor(num1);

// console.log(num2);

// RANDOM NUMBERS

// q no 1

// console.log(Math.random()* 50);

// q no 2

// var random = Math.random();

// q no 3

// var dice = Math.ceil( Math.random() * 6 )

// console.log(dice);

// q no 4

// var toss = Math.floor(Math.random()*2);

// if (toss === 0){
//     console.log("HEAD")
// }

// else{
//     console.log("TAIL");
// }

// CONVERTING STRINGS

// q no 1

// parseInt();

// q no 2

// var str = "123" ;

// console.log(parseInt(str));

// q no 3

// var str = "23.5" ;

// console.log(Number(str));

// q no 4

// var num = "415" ;

// console.log(parseInt(num));

// q no 5

// toString();

// q no 6

// var num = 42 ;

// console.log(num.toString());

// q no 7

// var float = "3.41" ;

// console.log(Number(float));

// CONTROLLING THE LENGHT OF THE DECIMALS

// q no 1

// var num = 3.12456 ;

// var newNum = Math.round(num).toString();

// console.log(newNum);

// q no 2

// var num = 3.12456 ;

// var newNum = Math.round(num).toString();

// newNum = Number(newNum);

// console.log(newNum);

// q no 3

// if (num.toFixed(2).length > 4)

// q no 4

// var num = 3.18965495 ;

// alert(num.toFixed(2).toString());
