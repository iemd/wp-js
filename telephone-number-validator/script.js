/**
 * 18. Certification Project (Build a Telephone Number Validator Project)
 */

const userInput = document.getElementById("user-input");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");

function checkValidNumber(input) {
    if (input === "") {
        alert("Please provide a phone number");
        return;
    }

    const countryCode = "^(1\\s?)?";
    const areaCode = "(\\([0-9]{3}\\)|[0-9]{3})";
    const spacesDashes = "[\\s\\-]?";
    const phoneNumber = "[0-9]{3}[\\s\\-]?[0-9]{4}$";

    const phoneRegex = new RegExp(
        `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
    );

    const pTag = document.createElement("p");
    pTag.className = "results-text";
    phoneRegex.test(input) ? (pTag.style.color = "#00471b") : (pTag.style.color = "#4d3800");

    pTag.appendChild(
        document.createTextNode(
            `${phoneRegex.test(input) ? "valid" : "invalid"} US Number: ${input}`
        )
    );

    resultsDiv.appendChild(pTag);
}

checkButton.addEventListener("click", () => {
    checkValidNumber(userInput.value);
    userInput.value = "";
});

userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkValidNumber(userInput.value);
        userInput.value = "";
    }
});

clearButton.addEventListener("click", () => {
    resultsDiv.textContent = "";
});
