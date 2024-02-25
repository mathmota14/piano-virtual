const pianoKeys = document.querySelectorAll(".piano-keys .key");
let mapedKeys = [];
let audioVolume = document.querySelector(".volume-slider input").value;
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");
let audio;

const playTune = (key) => {
    audio = new Audio(`src/tunes/${key}.wav`);
    audio.volume = audioVolume;
    audio.play();

    const clickedKey = document.querySelector(`[data-key = "${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (keybind) => {
    if (mapedKeys.includes(keybind.key)) {
        playTune(keybind.key);
    }
});

const handleVolume = (position) => {
    audioVolume = position.target.value;
};

volumeSlider.addEventListener("input", handleVolume);

const showHideKeys = () => {
    pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

keysCheck.addEventListener("click", showHideKeys);
