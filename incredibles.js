
(function () {

    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "What color is Violet hair?",
        answers: {
          a: "Violet",
          b: "Black",
          c: "Blue"
        },
        correctAnswer: "b"
      },
      {
        question: "What did Bob see as he was talking to his manager?",
        answers: {
          a: "Robbery",
          b: "Murder",
          c: "Snake"
        },
        correctAnswer: "a"
      },
      {
        question: "What is the first thing Edna Mode says when she sees Bob?",
        answers: {
          a: "So...How's the wife and kids?",
          b: "My god you've gotten fat.",
          c: "She doesn't say anything",
        },
        correctAnswer: "b"
      },
      {
        question: "Violet & Tony managed to meet. When and where?",
        answers: {
          a: "On Monday, at the park",
          b: "On Wednesday, at the club",
          c: "On Friday, at the cinema",
        },
        correctAnswer: "c"
      },
      {
        question: "What was the old suit's color?",
        answers: {
          a: "Red",
          b: "Blue",
          c: "Orange",
        },
        correctAnswer: "b"
      },
      {
        question: "What did Mr. Incredible forget before his wedding?",
        answers: {
          a: "Marriage ring",
          b: "He was wearing his mask",
          c: "He was wearing his power suit",
        },
        correctAnswer: "b"
      },
      {
        question: "At the beginning, Mr. Incredible saves an old woman's pet. What is it?",
        answers: {
          a: "A hamster",
          b: "A dog",
          c: "A cat",
        },
        correctAnswer: "c"
      },
      {
        question: "What was Mr. Incredibles work in his civilian identity?",
        answers: {
          a: "In an insurance company",
          b: "In a hospital",
          c: "Truck driver",
        },
        correctAnswer: "a"
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
  