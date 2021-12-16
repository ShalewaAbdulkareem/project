function wordCounter(text) {
    let wordCount =0;
    if(text.length ===0) {
        return wordCount;
    }
    const wordArray = text.split(" ");

    wordArray.forEach(function(element) {
        wordCount ++;
    })
    return wordCount;
}