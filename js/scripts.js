// Utility logic
function noSpacesAndWordAndText(text, word) {
    return (text.trim().length === 0) || (word.trim().length === 0);
}

function noSpaceAndText(text) {
    return (text.trim().length === 0)
}

// Business Logic
function wordCount(text) {
    if (noSpaceAndText(text)) {
        return 0;
    };
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function(element) {
        if (!Number(element)) {
            wordCount++; 
        }
    });
    return wordCount;
}

function sentenceCount(sentence) {
    let sentenceCount=0;
    if (noSpaceAndText(sentence)) {
        return 0;
    }

    const sentenceArray = sentence.split(".");
    sentenceArray.forEach(function(element) {
        sentenceCount++;
    })
    return sentenceCount;
}

function noOfWordOccurrence(word, text) {
    if (noSpacesAndWordAndText(word, text)) {
        return 0;
    }
    let wordCount =0;
    const textArray =text.split(" ");
    textArray.forEach(function(element) {
        if(element.toLowerCase().includes(word.toLowerCase())) {
            wordCount++;
        }
    })
    return wordCount;
}
function mostCommonWord(str) {
    let stringArray =str.split(" ");
    let result = '<p>'
    stringArray.forEach(function(element) {
            result+= element.concat(" :" + noOfWordOccurrence(element , str)) + '<br>'
        })
        return result + '</p>'
}

function boldedWordPassage(word, text) {
    if(noSpacesAndWordAndText(word, text)) {
        return "";
    }
    let textPassage ="<p>";
    const textArray = text.split(" ");
    textArray.forEach(function(element , index) {
        if(element.toLowerCase().includes(word.toLowerCase())) {
            textPassage = textPassage.concat("<br>" + element + "</br>");
        }else{
            textPassage = textPassage.concat(element)
        }
        if(index !==(textArray.length-1)) {
            textPassage = textPassage.concat(" ")
        }
    })
    return textPassage = "</p>"
}
// User Interface"
$(document).ready(function() {
$("#word-counter").submit(function(event){
    event.preventDefault();
    const word = $("#word").val();
    const passage =$("#text-passage").val();

    const wordCounter = wordCount(passage);
    const sentence =  sentenceCount(passage);
    const occuredNumber = noOfWordOccurrence(word, passage);
    const mostCommon = mostCommonWord(passage);

    $("#total-count").text(wordCounter);
    $("#total-sentence").text(sentence);
    $("#selected-count").text(occuredNumber);
    $("#most-common-word").html(mostCommon)
})
})