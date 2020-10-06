module.exports = function toReadable (number) {
    var NINETEEN = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    var TENS = ["ten", "twenty", "thirty", "forty", "fifty","sixty", "seventy", "eighty", "ninety"];
    var hundreds, tens, ones, words = [];
    if(number < 20) {
        return NINETEEN[number];
    }
    if(number < 100) {
    ones = number % 10;
    tens = number / 10 | 0;
    words.push(TENS[tens-1]);
    if(ones != 0){
        words.push(toReadable(ones));
    }
    return words.join(" ");
    }
    hundreds = number / 100 | 0;
    words.push(toReadable(hundreds));
    words.push("hundred");
    let n = number % 100;
    if (n != 0){
        words.push(toReadable(n));
    }
    return words.join(" ");
}
