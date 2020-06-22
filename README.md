# Question interface spike

Two things I wanted to explore 

- Creating a conversational interface rather than the classic form approach
- Creating a simple approach to form validation use the browser inputs checkValidity() methods

Sections below

* Installation
* To run the development build
* To create and run the production build
* General approach

# Installation

Built with node v13.9.0 (developed on OSX) run 

```
npm i
```

## To run the development build

In another terminal window run
```
npm start
```

Open your browser on http://localhost:9000

## General approach

### Data

The questions data is the entity that dictates the order and content. Example can be found at

```
src/public/js/data/questions.js
```
A single question would look like this

```
  {
    id: '0001',
    displayCondition: {  // This section outlines the condition where the question should displayed
      start: true,
    },
    question: 'What is your first name?', // text for the question
    answer: {
      propertyName: 'firstName', // the property name that this will create in the user data
      type: 'string', // this denotes the type of question to display
      validation: { // used to validate the the users input
        required: true,
        pattern: '^(?!\\s*$).+',
        errorMessage: 'Enter your name to continue', // message to display when the answer is incorrect
      },
    },
  },
```

The user data is outlined here..
```
src/public/js/data/user.js
```

Previously answered data can be added so that it will appear in the set of questions like so..

```
export const user = {
  firstName: 'John',
  age: '30',
  hasSignificantOther: 'true',
  significantOtherName: 'Jill'
};
```

### Code Structure

App is the top level React component.

```
src/public/js/components/App/index.js
```
QuestionsView presents most of the logic around the viewing and sequencing of questions

```
src/public/js/components/QuestionsView
```

A custom hook is used here to mange most of the logic around navigating the display of questions

The `type` in the question data maps to the components via the QuestionTypes factory.

```
src/public/js/components/QuestionTypes
```

This has been mocked out to be `async` so you could start with the first question and then fetch new questions from a server

Data mapping is handle on a component level, mapping to the form controls. Take a look at..

```
src/public/js/components/QuestionTypes/StringAnswered/index.js
```

The base form controls live in the Form folder
```
src/public/js/components/Form
```
components here make use of shared code to manage validation, touch state and display of validation messages as well as controlling callback execution.

I think the approach to forms here warrants more exploration.
