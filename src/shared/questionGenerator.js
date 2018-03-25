import quizData from './topicDataConfig';

const generateQuestion = (topic, questionIndex) => {
  let topics = quizData.filter(quiz => {
    return quiz.topic === topic;
  });

  if (questionIndex >= topics.length) {
    return { topic: { question: 'DONE!', answer: 'DONE...', topic: topic }, progress: 100 };
  }

  // TODO: Set up for random question later using the random logic below
  //let arrayIndex = questionIndex ? questionIndex : Math.floor(Math.random() * topics.length);

  return { topic: topics[questionIndex], progress: Math.floor(questionIndex / topics.length * 100) };
};

export default generateQuestion;