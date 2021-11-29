//Getting the input from the user
function getValue(){

    //Ensuring that the alert is invisible 
    document.getElementById("alert").classList.add("invisible");

    //Getting the user string 
    let userString = document.getElementById("userString").value;

    //Test for a palindrome
    let returnObj = checkForPalindrome(userString);

    //Displaying the result to the user
    displayMessage(returnObj);
}

//Test if the string is a palindrome
function checkForPalindrome(userString){

    //Ensuring that the input will be converted to lower case if it is not
    userString = userString.toLowerCase();

    //Ensuring that special characters and spaces are removed
    let regex = /[^a-z0-9]/gi;
    userString = userString.replace(regex, "");

    let revString = [];
    let returnObj = {};

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    //Checking if usterString = revString
    if (revString == userString) {
        returnObj.msg = "Fantastic! You have entered a palindrome"
    }
    else{
        returnObj.msg = "You did not enter a palindrome! Try again"
    }

    returnObj.reversed = revString;

    return returnObj;

}
//Display a message to the string
function displayMessage(returnObj){

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your reversed word/ phrase is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");

}