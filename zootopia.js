(function () {

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "What do Juddy's parrents do for a living?",
      answers: {
        a: "Carrot farming",
        b: "Fishing",
        c: "Sales"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the type of the animals work in DMV?",
      answers: {
        a: "Sloths",
        b: "Elephants",
        c: "Lions"
      },
      correctAnswer: "a"
    },
    {
      question: "What does nick con juddy into Buying?",
      answers: {
        a: "A jumbo pop",
        b: "Chocolate",
        c: "Candies",
      },
      correctAnswer: "a"
    },
    {
      question: "How many tickets does juddy write pefore lunch?",
      answers: {
        a: "100",
        b: "200",
        c: "500",
      },
      correctAnswer: "b"
    },
    {
      question: "What does Judy proclaim when Nick bites her neck?",
      answers: {
        a: "Blood blood everywhere",
        b: "You hurt me",
        c: "She did not say something",
      },
      correctAnswer: "a"
    },
    {
      question: "In the subway, who does the renegade sheep refer to his business partners as?",
      answers: {
        a: "Woolter and Jesse",
        b: "Judy",
        c: "Sloths",
      },
      correctAnswer: "a"
    },
    {
      question: "What does Benjamin Clawhouser have stuck at his nickline?",
      answers: {
        a: "A chocolate donut",
        b: "Loly pops",
        c: "Candies",
      },
      correctAnswer: "a"
    },
    {
      question: "What is the name of the streetracer tearing it up?",
      answers: {
        a: "John",
        b: "Gazelle",
        c: "Flash",
      },
      correctAnswer: "b"
    }
  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);

  // Functions
  function buildQuiz() {
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for (letter in currentQuestion.answers) {

          // ...add an HTML radio button
          answers.push(
            `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'green';
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = 'none';
    }
    else {
      previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else {
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

})();
