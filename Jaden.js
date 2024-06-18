//Jaden Casing Strings
//Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
//

String.prototype.toJadenCase = function () {

    return this.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

// test
var str = "How can mirrors be real if our eyes aren't real";

toJadenCase(str)

/*

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

*/