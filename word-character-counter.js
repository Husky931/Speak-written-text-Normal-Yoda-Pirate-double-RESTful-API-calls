
var button = document.querySelector('.button');
var bigBox = document.querySelector('.bigBox');
var para = document.querySelector('.par');
var para2 = document.querySelector('.par2');


function focus(){
    bigBox.focus();
}
focus();

bigBox.addEventListener('input', updateValue);
function updateValue() {
    para.textContent='Real time total characters = ' + bigBox.textContent.length;
};

bigBox.addEventListener('input', numberOfWords);
function numberOfWords() {
var fullText = bigBox.textContent;
var textSplit = fullText.split(' ');
var wordsCount = textSplit.length;
button.addEventListener('click', showNumberOfWords);
function showNumberOfWords() {
para2.textContent ='Total number of words = ' + wordsCount;
}
};

