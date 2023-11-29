const questions = [
  {
    question: 'How long have you been traning?',
    choices: [
      { id: 0, text: 'I am just startring', points: 0 },
      { id: 1, text: ' Less than a month', points: 1 },
      { id: 2, text: 'More than a month', points: 2 },
      { id: 3, text: 'More than a year', points: 3 }
    ]
  },
  {
    question: 'Do you exrecise according to the traning plan',
    choices: [
      { id: 0, text: 'yes', points: 1 },
      { id: 1, text: 'no', points: 0 }
    ]
  },
  {
    question: 'How long your warm-up takes?',
    choices: [
      { id: 0, text: "I don't warm up", points: 0 },
      { id: 1, text: '5 minutes', points: 1 },
      { id: 2, text: '20-30 minutes', points: 2 }
    ]
  },
  {
    question: 'How strong you are',
    choices: [
      { id: 0, text: 'You can deadlift 2.5x bodyweight', points: 2 },
      { id: 1, text: 'I can deadlift 2x bodyweight', points: 1 },
      { id: 2, text: ' You have no meaningful trained strength', points: 0 }
    ]
  }
];
export default questions;
