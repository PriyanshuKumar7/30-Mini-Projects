let speech = new SpeechSynthesisUtterance();



let voices = [];
let voicesSelect = document.querySelector("select");


// changing voices event on this drop down
voicesSelect.addEventListener("change", () => {
    speech.voice = voices[voicesSelect.value];
});
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];


    // Each voices for drop-down menu 
    voices.forEach((voice, i) => (voicesSelect.options[i] = new Option(voice.name, i)))
};


// for listen 
document.querySelector("button").addEventListener("click", () => {
    speech.text = document.querySelector("textarea").value;
    window.speechSynthesis.speak(speech);
});

