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

Test: It should return 0 for an empty string.
Code: wordCounter("");
Expected Output: 0

Test: It should return 0 for strings that has only spaces.
Code: wordCounter(" ");
Expected Output: 0
