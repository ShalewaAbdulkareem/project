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

function wordCounter(text) {
    let wordCount =0;
    if(text.trim().length ===0) {
        return wordCount;
    }
    const wordArray = text.split(" ");

    wordArray.forEach(function(element) {
        wordCount ++;
    })
    return wordCount;
}

function wordCounter(text) {
    let wordCount =0;
    if(text.trim().length ===0) {
        return wordCount;
    }
    const wordArray = text.split(" ");

    wordArray.forEach(function(element) {
        if(!Number(element)) {
            wordCount ++;
        }
    })
    return wordCount;
}
