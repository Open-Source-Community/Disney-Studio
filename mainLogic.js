(function () {
  const wheel = document.querySelector(".wheel");
  const result = document.getElementById("result")

  let deg = 0;
  let sector = 45;

  const characters = {
    1: "./pngegg (2).png",
    2: "./pngegg (4).png",
    3: "./pngegg (10).png",
    4: "./merida.png",
    5: "./merida.png",
    6: "./merida.png",
    7: "./merida.png",
    8: "./merida.png",
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