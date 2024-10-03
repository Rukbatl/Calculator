const screen = document.getElementById("screen")

document.querySelectorAll(".buttons button").forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.textContent;
        switch (value) {
            case "0":
                screen.value += 0;
                break;
            case "1":
                screen.value += 1;
                break;
            case "2":
                screen.value += 2;
                break;
            case "3":
                screen.value += 3;
                break;
            case "4":
                screen.value += 4;
                break;
            case "5":
                screen.value += 5;
                break;
            case "6":
                screen.value += 6;
                break;
            case "7":
                screen.value += 7;
                break;
            case "8":
                screen.value += 8;
                break;
            case "9":
                screen.value += 9;
                break;
            case ".":
                screen.value += ".";
                break;
            
            case "=":
                screen.value = eval(screen.value);
                break;
            case "+":
                lastCharIsANumber(value);
                break;
            case "-":
                lastCharIsANumber(value);
                break;
            case "*":
                lastCharIsANumber(value);
                break;
            case "/":
                lastCharIsANumber(value);
                break;
                          

            default:
                //pass
        }
    });
});

function addValue(value) {
    screen.value += value;
}




function lastCharIsANumber(value) {
    let lastChar = screen.value[screen.value.length-1];
    let isNumber = !isNaN(parseInt(lastChar));

    if (!isNumber) {
        screen.value = screen.value.substring(0, screen.value.length - 1) + value;
    } else {
        screen.value += value;
    }
}
