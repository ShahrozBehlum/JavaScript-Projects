let emoji_input = document.querySelector(".emoji-search input");
let translate_btn = document.querySelector(".Translate-btn");
let result = document.querySelector(".result-msg");

let emoji = {
    "happy" : "😊",
    "laugh" : "😂",
    "smile" : "😊",
    "smart" : "😎",
    "cry"   : "😢",
    "think" : "🤔",
    "sleep" : "😴",
    "party" : "🥳",
    "start" : "🤩",
    "heart" : "❤️",
    "hundred" : "💯",
    "thumbs up" : "👍",
    "thumbs down" : "👎",
    "raised hand" : "✋",
};

function emojitranslator(text) {
    let input = text.toLowerCase();
    return emoji[input] || "No emoji found!";
};

translate_btn.addEventListener("click" , () => {
    let userInput = emoji_input.value;
    result.innerText = emojitranslator(userInput);
});

emoji_input.addEventListener("click" , () => {
    emoji_input.value = "";
});
