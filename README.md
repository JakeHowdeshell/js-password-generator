## Project Title

Javascript Password Generator

## Project Description

GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria

This was achived using Javascript functions and calling them to the web browser using web API's targeted towards specific HTML Id's.

WHEN prompted for password criteria
THEN I select which criteria to include in the password

This is achieved using windows confirm objects.

WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters

In order to achieve this the length variable inside the writePassword function was set equal to a function called getLength. This function defined length as not a number and prompted the user to provided a response in the form of a string that is then parsed to a number.It is then placed through a while loop so that as long as the response returned as NaN less than 8 or greater than 128 the function would require a new response to be provided. Once the correct criteria is met the length provided by the user is then placed into the writePassword function as a number.

WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected

Using a function called writePassword that ran through the windows confirm object for each of the specified criteria the user is prompted to confirm or reject the criteria they would like to use by using the 'okay' button to return a boolian response of true and the 'cancel' to return the boolian response of false with the true criteria passing through to be used in the generated password. these were all placed in an if statement to make sure that at least one of the criteria returned true or an alert was provided.

WHEN all prompts are answered
THEN a password is generated that matches the selected criteria

WHEN the password is generated
THEN the password is either displayed in an alert or written to the page

After The user confirms their specified criteria through windows confirm objects and a password length is picked that fits within the 8-128 character length criteria, the function generatePassword is then called which adds all the different character criteria in to a single character pool and runs it though a for loop that picks a random index to add a random character using the math.random method and places it in a string until the loop runs though the user defined length. This random password with select criteria is then returned in a prompt stating its contents, and then written on the page using the id password provided in the HTML.

## Screenshots

Recording: https://watch.screencastify.com/v/EEqpX9t0wg5XmcRobmXt

## Deployed Website

https://jakehowdeshell.github.io/js-password-generator/
