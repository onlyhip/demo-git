function checkFirstNumber() {
    var myElement = document.getElementById("first-number");
    var firstNumber = myElement.value;
    var firstMessage = document.querySelector('#first-message');

    myElement.classList.remove("success-message");
    myElement.classList.remove("error-message");
    firstMessage.innerHTML = "";

    if (firstNumber == "") {
        myElement.classList.add("error-message");
        firstMessage.innerHTML = "error message";
        return false;
    } else {
        if (!isNaN(firstNumber)) {
            myElement.classList.add("success-message");
            return true;
        } else {
            myElement.classList.add("error-message");
            firstMessage.innerHTML = "error message";
            return false;
        }
    }
}

function checkSecondNumber() {
    var myElement = document.getElementById("second-number")
    var secondNumber = myElement.value;
    var secondMessage = document.querySelector('#second-message');

    myElement.classList.remove("success-message");
    myElement.classList.remove("error-message");
    secondMessage.innerHTML = "";

    if (secondNumber == "") {
        myElement.classList.add("error-message")
        secondMessage.innerHTML = "error message";
        return false;
    } else {

        if (!isNaN(secondNumber)) {
            myElement.classList.add("success-message")
            return true;
        } else {
            myElement.classList.add("error-message")
            secondMessage.innerHTML = "error message";
            return false;
        }
    }
};

function checkDivideZero() {
    var myElement = document.getElementById("second-number")
    var secondNumber = myElement.value;
    var secondMessage = document.querySelector('#second-message');

    myElement.classList.remove("success-message");
    myElement.classList.remove("error-message");
    secondMessage.innerHTML = "";

    if (secondNumber == "") {
        myElement.classList.add("error-message")
        secondMessage.innerHTML = "error message";
        return false;
    } else {
        if (!isNaN(secondNumber)) {
            if (secondNumber != 0) {
                myElement.classList.add("success-message")
                return true;
            } else {
                myElement.classList.add("error-message")
                secondMessage.innerHTML = "error message";
                return false;
            }
        } else {
            myElement.classList.add("error-message")
            secondMessage.innerHTML = "error message";
            return false;
        }
    }
}

function addNumber() {
    if (checkFirstNumber() & checkSecondNumber()) {
        var firstNumber = document.getElementById("first-number").value;
        var secondNumber = document.getElementById("second-number").value;
        var result = parseFloat(firstNumber) + parseFloat(secondNumber);
        document.getElementById("result").innerHTML = result;
    } else {
        document.getElementById("result").innerHTML = "Error Addition";
    }
}

function subNumber() {
    if (checkFirstNumber() & checkSecondNumber()) {
        var firstNumber = document.getElementById("first-number").value;
        var secondNumber = document.getElementById("second-number").value;
        var result = parseFloat(firstNumber) - parseFloat(secondNumber);
        document.getElementById("result").innerHTML = result;
    } else {
        document.getElementById("result").innerHTML = "Error Subtraction";
    }

}

function mulNumber() {
    if (checkFirstNumber() & checkSecondNumber()) {
        var firstNumber = document.getElementById("first-number").value;
        var secondNumber = document.getElementById("second-number").value;
        var result = parseFloat(firstNumber) * parseFloat(secondNumber);
        document.getElementById("result").innerHTML = result;
    } else {
        document.getElementById("result").innerHTML = "Error Multiplication";
    }
}

function divNumber() {
    if (checkFirstNumber() & checkDivideZero()) {
        var firstNumber = document.getElementById("first-number").value;
        var secondNumber = document.getElementById("second-number").value;
        var result = parseInt(firstNumber) / parseInt(secondNumber);
        document.getElementById("result").innerHTML = result;

    } else {
        document.getElementById("result").innerHTML = "Error Division";
    }
}