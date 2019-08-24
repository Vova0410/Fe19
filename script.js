/**
 * Created by Dell on 24.08.2019.
 */
/*var arr = [1, 2, 3];
var check = arr;
check.push("4");
console.log(arr.length);*/

/*var style = ["jazz", "blues"];
style.push("rock-n-roll");
var midleElem = Math.ceil(style.length / 2) - 1;
style[midleElem] = "classic";
console.log(style);
var firstElem = style.shift();
console.log(firstElem);
console.log(style);
style.unshift("rap", "reggy");
console.log(style);
console.log(style.length);*/

function sumInput() {

    var numbers = [];
    while (true) {
        var value = prompt("Enter number", 0);
        if ( value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    console.log(typeof(numbers[1]));
    var sum = 0;
    for (var i = 0; i > numbers.length ; i++) {
        console.log(numbers[i]);
    }
    return sum;

}

console.log( sumInput() );
