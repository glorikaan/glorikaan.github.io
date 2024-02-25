function bigger_button() {
    document.getElementById("textarea").style.fontSize = "2em";
}
  
function applyStyle() {
    let textarea = document.getElementById("textarea");
    textarea.style.fontWeight = "bold";
    textarea.style.color = "blue";
    textarea.style.textDecoration = "underline";
}

function removeStyle() {
    let textarea = document.getElementById("textarea");
    textarea.style.fontWeight = "";
    textarea.style.color = "";
    textarea.style.textDecoration = "";
}

function handleRadioButtonChange() {
    let radioButton = document.querySelector('input[name="radio_button"]:checked').value;
    if (radioButton == "FancyShmancy") {
        applyStyle();
    } else if (radioButton == "BoringBetty") {
        removeStyle();
    }
}

function moo() {
    let textarea = document.getElementById("textarea");
    textarea.value = textarea.value.toUpperCase();
    let parts = textarea.value.split(".")
    textarea.value = parts.join("-Moo.");
}

