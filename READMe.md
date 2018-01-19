### Better Doctor

_This website help users finding a doctor that provides the care they need. The user may enter a medical issue into a form and specify their location from drop down menu options (Portland, OR or Seattle, WA) and optionally a doctor name it could be first or last name and they will receive a list of doctors that matches their search criteria_

### Specs

##### User enters medical issue and location Portland, OR
* Input: stomach
* Output: A list of doctors who can provide care for this medical issue

##### User enters doctor name and location Portland, OR
* Input: Matthew
* Output: A list of doctors that their names contain Matthew

##### User enters doctor name and location Seattle, WA
* Input: David
* Output: A list of doctors that their names contain David

##### User enters a medical issue that doesn't match a records
* Input: Toothache
* Output: No matches found

### Setup
### Instructions:
In order for this project to work, make sure you have NodeJS installed of your machine. To install NodeJS visit this URL: https://nodejs.org/en/ and follow the installing Instructions.

To be able to make API calls, you will need to make an account and get an API key visit this URL: https://developer.betterdoctor.com/
and login if you have an account or sign up for one and get you API key.

In terminal:
```
$ cd Desktop
$ git clone https://github.com/JohnSawiris/betterDoctor.git
$ cd betterDoctor
$ npm install
$ bower install
```
_Now you have all the project dependencies are installed. Now all you need to have is API key and it should be saved in a variable inside a file called .env, this file should be on the top level of the project directory._
## Follow the following instructions to create the .env:
#### These instructions assumes you have atom text editor installed on your machine
At the top level of the project directory
```
$ touch .env
$ atom .env
```
This should open the file in atom text editor, inside of the .env file type the following to save your API key
```
exports.apiKey=[YOUR API KEY HERE];
```
### Bugs
_There's no known bugs_

### Improvements
* Add functionality to sort doctors based on the location
* List insurance providers


### Technologies
* HTML
* JavaScript & jQuery
* AJAX
* Sass
* NodeJs
* Bootstrap

### License
Copyright (c) 2017 _**John Sawiris**_  All Rights Reserved.
_This software is licensed under the MIT license_
