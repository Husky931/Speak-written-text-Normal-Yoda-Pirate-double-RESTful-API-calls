
var button = document.querySelector('.button');
var bigBox = document.querySelector('.bigBox');
var para = document.querySelector('.par');
var para2 = document.querySelector('.par2');
var speakText = document.getElementById('speakBigBox');
var yodaButton = document.getElementById('yodaButton');
var pirateButton = document.getElementById('pirateButton');

// var voicelist = responsiveVoice.getVoices();
// console.log(voicelist)

function speakItNow() {
    alert('There are only 5 free API calls per hour allowed, keep that in mind. 1.Type the text and click on the button below the div to hear it with normal voice. Then you can choose the Yoda or pirate version')
    responsiveVoice.speak("Please type your text and check how many words you have typed.");
    responsiveVoice.speak("After you are done click one of the buttons to listen to the text as Yoda or a drunken pirat would say it");
}
 
function focus(){
    bigBox.focus();
}
focus();

bigBox.addEventListener('input', updateValue);
function updateValue() {
    para.textContent='Real time total characters = ' + bigBox.textContent.length;
};


button.addEventListener('click', function showNumberOfWords() {
    var numberOfWords = bigBox.textContent.split(' ').length;
    para2.textContent = 'Total number of words =' + numberOfWords;
    
    responsiveVoice.speak(speakBigBox.textContent);
    getTheDivWords = bigBox.textContent
})

yodaButton.addEventListener('click', function speakLikeYoda() {
    var getTheWordsFromTheBigBox = document.querySelector('.bigBox').textContent;

    const proxy = 'https://cors-anywhere.herokuapp.com/';
    fetch(`${proxy}https://api.funtranslations.com/translate/yoda`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            text: getTheWordsFromTheBigBox
        })
    })
    .then(res => res.json())
    .then(data => {
        var transformedYodaText = data.contents.translated;
        responsiveVoice.speak(transformedYodaText,'US English Male', {rate:0.5});
    })
})

pirateButton.addEventListener('click', function speakLikePirat() {
    var getTheWordsFromTheBigBox = document.querySelector('.bigBox').textContent;
    const proxy2 = 'https://cors-anywhere.herokuapp.com/';
    
    fetch(`${proxy2}https://api.funtranslations.com/translate/pirate`, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            text: getTheWordsFromTheBigBox
        })
    })
    .then(res => res.json())
    .then(data => {
        var transformedPirateText = data.contents.translated;
        responsiveVoice.speak(transformedPirateText,'US English Male', {rate:0.5});
    })
})
