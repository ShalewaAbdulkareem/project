Describe: Text Analyzer()

Test: It should return 1 if the passage has just one word.
Code:
const text: "hello"
wordCounter(text);
Expected Output: 1

Test: It should return 2 if the passage has just two word.
Code:
cont text: "hello there"
wordCounter(text);
Expected Output: 2

Test: It should return the number of words inputted.
Code:
const text: "hello hi this shalewa";
wordCount(text);
Expected Output: 4

Test: It should return 0 for an empty string.
Code:
const text: "";
wordCounter(text) 
Expected Output: 0


Test: it should return 0 if the user input just spaces.
Code:
const text: "                 ";
wordCounter(text)
Expected Ouput: 0

Test: it should not count number as string.
Code:
const text: she's 15 years old;
sentenceCounter(text)
Expected Output: 4
 
 Describe: sentenceCount()
 Test: It should be able to return 1 for a word.
 Code:
 const word: "Hey"
sentenceCounter(text)
 Expected Output: 1

Test: It should be able to return 1 for an inputted sentence.
Code:
const word: "Jane is a genius"
sentenceCounter(sentence)
Expected Output: 1

Test: It should be able to return the number o sentence inputted.
Code:
const sentence: "My name is Jane. I'm a student".
sentenceCounter(sentence);
Expected Output: 2

Test: It should be able to return 0 for an empty string.
Code:
const sentence: "";
setenceCounter(sentence);
Expected Output: 0;

Test: It should return 0 if only spaces are inputted.
Code:
const sentence: "          ";
sentenceCounter(sentence);
Expected Output: 0;

Describe: noOfOccurencences()

Test: It should return 0 for an empty string in the text.
Code:
const text: "";
const word: "yellow";
noOfWordOccurences(word, text);
Expected Output: 0;

Test: It should return 0 for an empty string in the word.
Code:
const text: "yellow lady yellow"
const word:"";
noOfWordOccurrence(word, text);
Expected Output: 0

Test: It should return 1 if the text and word are the same.
Code:
const text: "yellow"
const word: "yellow"
noOfWordoccunrences(word, text);
Expected output: 1

Test:it should return 0 occurrence if the test and word are different
Code:
const text: "yellow"
const word: "green"
noOfWordoccunrences(word, text);
Expected output: 0

Test: It should return the number of Occurences of a word in a text. 
Code:
const text: "yellow yellow yellow green yellow"
const word: "yellow"
noOfWordoccunrences(word, text);
Expected output: 4

Test:It should return the number of occurence regardless the case.
Code:
const text: "yellow yellow YELLOW green yellow"
const word: "YELLOW"
noOfWordoccunrences(word, text);
Expected output: 4

Test: it should return the number of occurrence regardless of the puntuation.
Code:
const text: "yellow yellow YELLOW! green yellow"
const word: "YELLOW"
noOfWordoccunrences(word, text);
Expected output: 4





 # Application Details
### Application Author: [
    Name: Abdulkarem Shalewa
    Github: Shalewaabdulkareem
    PhoneNumber: 09026227323
    Email: abdulkareemtemilayo@gmail.com
    Linkedin: Shalewaabdulkareem

]

### Application Technology: [
    HTML
    CSS
    JAVASCRIPTS
    GIT
    GitHub
]

### Application Description
*This application is a text analyzer which helps to know the following*
1. Total word count
2. Selected word count
3. Total sentence
4. Most common words
### Application Git Branches: [
    main(default branch)
]

### Application Challenges :
1. I had challenges when trying to merge with the deault brancha website about thee hi.
2. I had challenges when trying to add image to my page.
3. i had challenges when trying to push my page to github.
4. Rules rom my CSS were not aecting my HTML page.
5. i had challenges when trying to creat a new branch.

### Application GitHub Inormation : [
    Respository Name: Project
    Remote URL: https//github.com/
    Shalewaabdulkareem.git/Project
]