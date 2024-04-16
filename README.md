# Introduction
The purpose of this project is to automate tests for the UI, using an open-source framework. I decided to use [Cypress](https://www.cypress.io/) as I have extesive expereience using this framework, it's very readable, straight forward, light and simple to install and run, We can easily integrate it to almost all CI/CD tools, and it's perfectly fit the requirement for the task.



# Testing Approach
I tried to make it simple, but also I tried to kept scalablity of the project in my mind, and that can be seen in using commands for repeated functions and folder structure, using environment variables to make it CI/CD ready
The task is pretty simple, so I didn't expand much on it.
I tried to use Cypress and testing best practices as much as I can.


## Installation

You can use npm to install it.
First you need to make sure you have [node](https://nodejs.org/en/download) installed and then you need to install the dependencies from packages.json:


```bash
npm install
```

## Usage
First you need to navigate to the application folder through the console.
To run the test you have two ways:

1. Interactive mood where you can lunch the browser and see the tests running:

```bash
npm run cypress:open
```
2. Headless mood where you can find a report after finishing the test and screenshots/videos for the failing tests:
```bash
npm run cypress:run
```


## Reporting

Currently when running the tests on headless mode a report will be generated using `mochawesome` as an html file. In order to view the results you can check the folder `/cypress/results` and open the required report in your browser. 

![Cypress Test Harness Run](<Screenshot 2024-04-16 at 3.23.42 PM.png>)

![Report Example](<Screenshot 2024-04-16 at 3.35.12 PM.png>)
