const palindromes = function (phrase) {
    phrase = phrase.toLowerCase();
    let stripPunctuation = phrase;
    const punctuationList = ["!", " ", ".", ","];
    for (punc of punctuationList){
        stripPunctuation = stripPunctuation.replaceAll(punc, "")
    }
    const reverse = stripPunctuation.split("").reverse().join("");
    console.log(reverse + " next word: " +stripPunctuation);
    return reverse == stripPunctuation;

};

// Do not edit below this line
module.exports = palindromes;
