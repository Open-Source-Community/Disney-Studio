(function () {
  const wheel = document.querySelector(".wheel");
  const result = document.getElementById("result")

  let deg = 0;
  let sector = 45;

  const characters = {
    1: "./images/character1.png",
    2: "./images/character2.png",
    3: "./images/character3.png",
    4: "./images/character4.png",
    5: "./images/character5.png",
    6: "./images/character6.png",
    7: "./images/character7.png",
    8: "./images/character8.png",
  }

  const winner = (actual) => {
    const winning = Math.ceil(actual / sector);
    setTimeout(() => {
      result.src = characters[winning];

    }, 2000);
  }

  wheel.addEventListener('click', () => {
    result.style.display = 'none';
    // Disable button during spin
    wheel.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(5000 + Math.random() * 5000);
    // Set the transition on the wheel
    wheel.style.transition = 'all 10s ease-out';
    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
  });

  wheel.addEventListener('transitionend', () => {
    result.style.display = 'inline';
    // Enable button when spin is over
    wheel.style.pointerEvents = 'auto';
    // Need to set transition to none as we want to rotate instantly
    wheel.style.transition = 'none';
    // Calculate degree on a 360 degree basis to get the "natural" real rotation
    // Important because we want to start the next spin from that one
    // Use modulus to get the rest value
    const actual = deg % 360;
    // Set the real rotation instantly without animation
    wheel.style.transform = `rotate(${actual}deg)`;
    // Calculate and display the winning symbol
    winner(actual);
  });
})();
