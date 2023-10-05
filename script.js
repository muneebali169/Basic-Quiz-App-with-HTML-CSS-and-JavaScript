import { quizQuestions } from './data.js';

document.addEventListener("DOMContentLoaded", function () {
  const ques = document.querySelector('.selection h2');
  const attemptStatus = document.createElement('p');
  const optionsContainer = document.querySelector('.selection ul'); // Updated selector to target the <ul>
  const resultContainer = document.createElement('div'); // Container for displaying the result
  const tryAgainButton = document.createElement('button'); // "Try Again" button
  const nextButton = document.createElement('button'); // "Next" button
  const startQuizButton = document.querySelector('.start-quiz .start'); // "Start Quiz" button

  let currentLanguage = null;
  let currentQuestionIndex = 0;
  let totalAttempts = 0;
  let correctAnswers = 0;
  let quizStarted = false;

  // Function to show the "Start Quiz" button
  function showStartQuizButton() {
    startQuizButton.style.display = 'block';
  }

  // Function to hide the "Start Quiz" button
  function hideStartQuizButton() {
    startQuizButton.style.display = 'none';
  }

  // Initially hide the "Start Quiz" button
  hideStartQuizButton();
  // Event listener for the "Start Quiz" button
  startQuizButton.addEventListener('click', () => {
    loadQuiz(currentLanguage);
    quizStarted = true;
    hideStartQuizButton();
  });

  function loadQuiz(language) {
    // Clear the existing content
    ques.textContent = '';
    optionsContainer.innerHTML = '';
    resultContainer.innerHTML = '';

    // Check if the language exists in the quizQuestions object
    if (quizQuestions.hasOwnProperty(language) && quizQuestions[language].length > 0) {
      // Update the current language
      currentLanguage = language;

      // Get the current question for the specified language
      const currentQuestion = quizQuestions[language][currentQuestionIndex];

      // Create a new <p> element with the question text and append it to the 'ques' element
      const questionElement = document.createElement('p');
      questionElement.textContent = `Q${currentQuestionIndex+1}. ${currentQuestion.question}`;
      ques.appendChild(questionElement);

      // Create radio buttons and labels for each option
      currentQuestion.options.forEach((option, index) => {
        const optionLi = document.createElement('li');
        const optionInput = document.createElement('input');
        optionInput.type = 'radio';
        optionInput.name = 'answer'; // Ensure the radio buttons share the same name to make them mutually exclusive
        optionInput.id = `ans${index + 1}`;
        optionInput.classList.add('answer');
        const optionLabel = document.createElement('label');
        optionLabel.textContent = option.text;
        optionLabel.htmlFor = `ans${index + 1}`;

        // Add an event listener to each radio button to handle the user's selection
        optionInput.addEventListener('click', () => {
          totalAttempts++;

          // Determine if the option is correct or not
          const isCorrect = option.correct;

          // Shade the labels based on correctness
          currentQuestion.options.forEach((opt, i) => {
            const label = optionsContainer.children[i].querySelector('label');
            if (opt.correct) {
              label.classList.add('correct');
            } else if (i === index) {
              label.classList.add(isCorrect ? 'correct' : 'incorrect');
            }
          });

          // Display "Correct" or "Incorrect" with explanation
          const reason = document.createElement('p');
          if (isCorrect) {
            const correctExplanation = currentQuestion.explanation;
            reason.innerHTML = `<br>Correct!<br>Explanation: ${correctExplanation}<br>`;
            correctAnswers++;
          } else {
            const correctAnswer = currentQuestion.options.find(opt => opt.correct).text;
            const correctExplanation = currentQuestion.explanation;
            reason.innerHTML = `<br>Incorrect! The correct answer is "${correctAnswer}."<br>Explanation: ${correctExplanation}<br>`;
          }
          optionsContainer.appendChild(reason);

          // Display the "Next" button
          optionsContainer.appendChild(nextButton);
          nextButton.id = 'next-button';
          nextButton.textContent = 'Next';

          // Disable radio buttons after selection
          currentQuestion.options.forEach((opt, i) => {
            optionsContainer.children[i].querySelector('input').disabled = true;
          });

          // Update the attemptStatus element
          attemptStatus.textContent = `Attempted ${totalAttempts} out of ${quizQuestions[language].length}`;
        });

        // Append the radio input and label to the list item
        optionLi.appendChild(optionInput);
        optionLi.appendChild(optionLabel);

        // Append the list item to the options container
        optionsContainer.appendChild(optionLi);
      });
    } else {
      // Handle the case where no questions are found for the specified language
      ques.textContent = 'No questions found for ' + language;
    }
  }

  function displayResult() {
    // Clear the existing content
    ques.textContent = '';
    optionsContainer.innerHTML = '';

    // Display the number of correct answers
    const resultHeader = document.createElement('h2');
    resultHeader.textContent = `Quiz Result: ${correctAnswers}/${quizQuestions[currentLanguage].length}`;
    resultContainer.appendChild(resultHeader);

    // Display the "Try Again" button
    tryAgainButton.id = 'try-again';
    tryAgainButton.textContent = 'Try Again';
    tryAgainButton.addEventListener('click', () => {
      // Reset variables and load the quiz again
      currentQuestionIndex = 0;
      totalAttempts = 0;
      correctAnswers = 0;
      loadQuiz(currentLanguage);
      resultContainer.innerHTML = ''; // Clear the result
      showStartQuizButton(); // Show the "Start Quiz" button again
      quizStarted = false; // Reset quizStarted flag
    });

    resultContainer.appendChild(tryAgainButton);

    // Append the result container to the content
    content.appendChild(resultContainer);
  }

  // Add event listeners to language labels
  const languageLabels = document.querySelectorAll('.selection label');
  languageLabels.forEach(label => {
    label.addEventListener('click', function () {
      if (!quizStarted) {
        const selectedLanguage = label.textContent;
        currentLanguage = selectedLanguage; // Update currentLanguage
        showStartQuizButton(); // Show the "Start Quiz" button
      }
    });

    // Add an event listener to the associated radio button to trigger the label click event
    const radioButton = label.previousElementSibling;
    radioButton.addEventListener('click', () => {
      label.click();
    });
  });


  // Add event listener to "Next" button
  nextButton.addEventListener('click', () => {
    // Check if there are more questions
    if (currentQuestionIndex < quizQuestions[currentLanguage].length - 1) {
      currentQuestionIndex++;
      loadQuiz(currentLanguage);
    } else {
      // All questions have been answered, display the result
      displayResult();
    }
  });

  // Append the attemptStatus element below h2
  const content = document.querySelector('.content');
  content.insertBefore(attemptStatus, content.children[2]); // Insert it after h2
});