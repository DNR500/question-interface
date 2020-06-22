export const questions = [
  {
    id: '0001',
    displayCondition: {
      start: true,
    },
    question: 'What is your first name?',
    answer: {
      propertyName: 'firstName',
      type: 'string',
      validation: {
        required: true,
        pattern: '^(?!\\s*$).+',
        errorMessage: 'Enter your name to continue',
      },
    },
  },
  {
    id: '0002',
    question: 'How old are you?',
    displayCondition: {
      id: '0001',
    },
    placeholder: 'Enter 18 to 65',
    answer: {
      propertyName: 'age',
      type: 'int',
      validation: {
        required: true,
        min: 18,
        max: 65,
        errorMessage: 'Enter a valid age between 18 and 65',
      },
    },
  },
  {
    id: '0003',
    question: 'Do you have a significant other?',
    displayCondition: {
      id: '0002',
    },
    answer: {
      propertyName: 'hasSignificantOther',
      type: 'singleOption',
      options: [
        {
          value: '',
          label: 'Select an option',
        },
        {
          value: 'true',
          label: 'True',
        },
        {
          value: 'false',
          label: 'False',
        },
      ],
      validation: {
        required: true,
        errorMessage: 'Select an option to continue',
      },
    },
  },
  {
    id: '0004',
    question: 'What is your significant other’s name?',
    displayCondition: {
      id: '0003',
      match: {
        value: 'true',
      },
    },
    answer: {
      propertyName: 'significantOtherName',
      type: 'string',
      validation: {
        required: true,
        pattern: '^(?!\\s*$).+',
        errorMessage: 'Enter their name to continue',
      },
    },
  },
];
