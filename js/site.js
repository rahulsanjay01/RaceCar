//Getting the input from the user
function getValues(){

    //Ensuring that the alert is invisible 
    document.getElementById("alert").classList.add("invisible");

    //Getting the user string 
    let userString = document.getElementById("userString").value;

    if (userString.length > 2) {
    //Test for a palindrome
    let returnObj = checkForPalindrome(userString);

    //Displaying the result to the user
    displayMessage(returnObj);
    }
    else {
    alert("You must enter three or more characters!");
    }
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
    let blankString = "";

    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }

    //Checking if usterString = revString
    if (revString == userString & revString != blankString) {
        returnObj.msg = "Fantastic! You have entered a palindrome"
    }
    else{
        returnObj.msg = "You did not enter a palindrome! Please try again"
    }

    returnObj.reversed = revString;

    return returnObj;

}
//Display a message to the string
function displayMessage(returnObj){

    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    document.getElementById("msg").innerHTML = `Your reversed word or phrase is: ${returnObj.reversed}`;
    document.getElementById("alert").classList.remove("invisible");

}