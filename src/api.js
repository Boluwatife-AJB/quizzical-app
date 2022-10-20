import { shuffleArray } from './util';

// export const getTrivialApi = async function () {
//   const res = await fetch('https://opentdb.com/api.php?amount=7&category=9');

//   const data = await res.json();

//   const values = data.results;

//   console.log(values);

//   const questions = values.map((value) => value.question);
//   const answer = values.map((value) => value.correct_answer);
//   const incorrectAnswer = values.map((value) => value.incorrect_answers);
//   console.log(questions);
//   console.log(answer);
//   console.log(incorrectAnswer);

//   incorrectAnswer.forEach((entry) => {
//     console.log(entry);
//   });
// };

export const fetchQuizQuestions = async (amount, difficulty) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&category=9&difficulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  console.log(
    data.results.map((question) => ({
      ...question,
      options: shuffleArray([
        ...question.incorrect_answers,
        question.correct_answer,
      ]),
    }))
  );
  const trivial = data.results.map((question) => ({
    ...question,
    options: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));

  console.log(trivial);
};
