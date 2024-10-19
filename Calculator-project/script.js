function getHistory() {
    return document.getElementById("history-value").innerText;
};

function printHistory(num) {
    document.getElementById("history-value").innerText = num;
};

function getOutput() {
    return document.getElementById("output-value").innerText;
};

function printOutput(num) {
    document.getElementById("output-value").innerText = num ? getFormattedNumber(num) : num;
};

function getFormattedNumber(num) {
    if (num === "-") return "";
    return Number(num).toLocaleString("en")
};

function reverseNumberFormat(num) {
    return Number(num.replace(/,/g, ''));
};

document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", function() {
        let output = reverseNumberFormat(getOutput()).toString();
        let history = getHistory();

        if (this.id === "clear") {
            printHistory("");
            printOutput("");
        } else if (this.id === "backspace") {
            if (output) {
                output = output.slice(0, -1);
                printOutput(output)
            }
        }else {
            if (output !== "" || history !== "") {
                output = output === "" ? output : reverseNumberFormat(output);
                history = history + output;

                if (this.id === "=") {
                    let result = eval(history);
                    printOutput(result);
                    printHistory("")
                } else {
                    history += this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
});


document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", function () {
        let output = reverseNumberFormat(getOutput());
        if (!isNaN(output)) {
            output = output + this.id;
            printOutput(output);
        }
    });
});
