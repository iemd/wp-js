/**
 * 8. Certification Project (Build a Palindrome Checker Project)
 */

const button = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result");

function palindrome(input) {

    let resultMsg;

    if (input === "") {
        alert("Please input a value");
        return;
    }

    // Remove the previous result.
    result.replaceChildren();

    const alphanumeric = input.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase();
    const alphanumericReversed = [...alphanumeric].reverse().join("");
    if (alphanumeric === alphanumericReversed) {
        resultMsg = `${input} is a palindrome.`;
    } else {
        resultMsg = `${input} is not a palindrome.`;
    }

    const pTag = document.createElement("p");
    pTag.className = "user-input";
    pTag.innerText = resultMsg;
    result.appendChild(pTag);

    // Show the result.
    result.classList.remove("hidden");
}

button.onclick = () => {
    palindrome(input.value);
    input.value = "";
}

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        palindrome(input.value);
        input.value = "";
    }
});
