const pianoKeys = document.querySelectorAll(".piano-keys .key")

let audio = new Audio("tunes/a.wav"); // by default, audio src is a tune

const playTune = (key) => {
    audio.src = 'tunes/${key}.wav';
    audio.play(); // playing audio

}

pianoKeys.forEach(key => {
   // calling playTune function with passing data-key value as an argument
    key.addEventListener("click", () =>playTune(key.dataset.key));
}); 