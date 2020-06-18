/* This function takes non capitalized strings, and capitalizes the first letter in each word

.this refers to the incoming string. 

.split breaks the string by " " into a new array of items.

.map is a high order function that takes each item in an array and reorganizes it.

.replace takes the specified item, and replaces the first letter of each word into uppercase.

.join joins the new mapped array and seperates by the specified " ".

*/

String.prototype.toJadenCase = function () {
    return this.split(" ").map(function (item) {
        return item.replace(item.charAt(0), item.charAt(0).toUpperCase());
}).join(' ');
};
