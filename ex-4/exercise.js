// Example
window.alert("Hello World")
var insert = prompt('Please enter your Phrases')
alert(insert  + ' Have ' +insert.length+ 'number of characters');


alert('Can i have two different phrase')
var insertPhrases1 = prompt('Please enter your phrases')

var insertPhrases2 = prompt('please enter your second Phrases')

if (insertPhrases1.length > insertPhrases2.length){
    alert(insertPhrases1 + 'Phrases is the longest with' + insertPhrases1.length + 'number of characters')
} 
 else if (insertPhrases2.length > insertPhrases1.length) {
    alert(insertPhrases2 + 'Phrases is the longest with' + insertPhrases2.length + 'number of characters')
}