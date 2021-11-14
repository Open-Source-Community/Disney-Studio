
(function () {

    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');

    const imageCharacter = document.getElementById('result');

    const characters = {
        sad: "./images/sad.png",
        joy: "./images/joy.png",
        fear: "./images/fear.png",
        anger: "./images/anger.png",
        disgust: "./images/Disgust.png",
    }

    const myQuestions = [
        {
            question: "BROCCOLI ON PIZZA IS",
            answers: {
                a: "a great idea!",
                b: "more than I deserve",
                c: "HOW DAER YOU??",
                d: "probably poison"
            },
            Joy: "a",
            Sadness: "b",
            Anger: "c",
            Disgust: "d"
        },
        {
            question: "MY FRIENDS THINK I AM",
            answers: {
                a: "A little hot headed but always have their back",
                b: "What friends?",
                c: "Reliable, upbeat and always looking to find the fun!",
                d: "Brutally honest but only because I love them"
            },
            Anger: "a",
            Sadness: "b",
            Joy: "c",
            Disgust: "d"
        },
        {
            question: "MY WORST NIGHTMARE INVOLVES",
            answers: {
                a: "Sharks. Also vampires. Also public speaking",
                b: "Having a day that somehow isn't the greatest day in history",
                c: "Saying the wrong thing and looking like an unmistakable fool",
                d: "A giant crowd of laughter and hugs that I'm forced to participate in"
            },
            Fear: "a",
            Joy: "b",
            Disgust: "c",
            Sadness: "d"
        },
        {
            question: "THE BEST PART OF MY DAY IS",
            answers: {
                a: "Living every moment to the fullest",
                b: "Tucking myself into bed at the end",
                c: "When justice is served to ne'er-do-wells",
                d: "Anytime I can make a quick escape"
            },
            Joy: "a",
            Sadness: "b",
            Anger: "c",
            Fear: "d"
        },
        {
            question: "THE WORLD NEEDS MORE",
            answers: {
                a: "Safety goggles",
                b: "Anger management",
                c: "Fashion sense",
                d: "Alone time"
            },
            Fear: "a",
            Anger: "b",
            Disgust: "c",
            Sadness: "d"
        },
        {
            question: "MY MAIN SOURCE OF EXERCISE IS",
            answers: {
                a: "Running from various hazards",
                b: "Smiling wide at everyone I meet",
                c: "Pacing and muttering to myself",
                d: "Shaking my head 'no' with conviction"
            },
            Fear: "a",
            Joy: "b",
            Anger: "c",
            Disgust: "d"
        },
        {
            question: "THE HOTTEST ACCESSORY FOR SUMMER IS",
            answers: {
                a: "My couch",
                b: "My fiery personality",
                c: "HOW DAER YOU??",
                d: "probably poison"
            },
            Sadness: "a",
            Anger: "b",
            Disgust: "c",
            Fear: "d"
        },
        {
            question: "AT PARTIES YOU CAN FIND ME",
            answers: {
                a: "Warning people to watch their step on the stairs",
                b: "Amusing a crowd with my strong opinions",
                c: "Dancing while people stand in a circle around me and clap",
                d: "Plotting to overthrow the DJ and change the music"
            },
            Fear: "a",
            Disgust: "b",
            Joy: "c",
            Anger: "d"
        },
  
        {
            question: "MY SPIRIT ANIMAL IS A",
            answers: {
                a: "Sloth",
                b: "Chihuahua",
                c: "Peacock",
                d: "Bear"
            },
            Sadness: "a",
            Fear: "b",
            Disgust: "c",
            Anger: "d"
        },
  
        {
            question: "THE NUMBER THAT BEST DESCRIBES MY CURRENT MOOD IS",
            answers: {
                a: "-24",
                b: "1.27",
                c: "3",
                d: "23,938,247"
            },
            Sadness: "a",
            Fear: "b",
            Joy: "c",
            Anger: "d"
        },
  
        {
            question: "MY FAVORITE SONG THAT EXISTS IN THE PUBLIC DOMAIN IS",
            answers: {
                a: '"Danny Boy"',
                b: '"Row, Row, Row Your Boat"',
                c: '"This Old Man"',
                d: '"Take Me Out to the Ballgame"'
            },
            Sadness: "a",
            Joy: "b",
            Fear: "c",
            Disgust: "d"
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
        let joy = 0;
        let sadness = 0;
        let anger = 0;
        let disgust = 0;
        let fear = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.Fear) {
                // add to the Fear
                fear++;
            }
            else if (userAnswer === currentQuestion.Anger) {
                // add to the Anger
                anger++;
            }
            else if (userAnswer === currentQuestion.Sadness) {
                // add to the Sadness
                sadness++;
            }
            else if (userAnswer === currentQuestion.Disgust) {
                // add to the Disgust
                disgust++;
            }
            else if (userAnswer === currentQuestion.Joy) {
                // add to the Joy
                joy++;
            }
        });

        let character = { fear, anger, sadness, disgust, joy };

        const showCharacter = () => {
            const maxVal = Math.max(...Object.values(character));
            const key = Object.keys(character).find(key => character[key] === maxVal);

            imageCharacter.src = characters[key];
        }
        // show number of correct answers out of total

        showCharacter();

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
