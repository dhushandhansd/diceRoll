
var luckList = {
    1: "GrateFull Day",
    2: "Happy Face",
    3: "Kinda Sus",
    4: "Once in a BlueMoon",
    5: "CareFull",
    6: "God saves you",
}

function topicChanger() {
    const word = document.getElementById("magicWord");
    var theText = word.innerHTML;
    theText = theText.replace("Luck", "Magic");
    word.innerHTML = theText;
}

function diceRoller() {
    const img = document.getElementById("img");
    let diceNumber = Math.floor(Math.random() * 6) + 1;
    img.setAttribute("src", `${diceNumber}.png`);

    const sentence = document.getElementById("senten");
    let senChange = sentence.replace("Click the Button and Try your Luck", "Shree")
    sentence.innerHTML = senChange;
}