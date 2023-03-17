var Qoutes = [
  "I am unapologetic for who I am.",
  "I deserve to be happy and confident.",
  "Though times are tough, I am resilient.",
  "I am empowered by my awesomeness.",
  "One day at a time.",
  "Treat yourself. You totally deserve it.",
  "I am enough.",
  "Good vibes are coming your way.",
  "You have accomplished a lot. Keep it up!",
  "You are a kind, honest, loving soul. I believe in you.",
  "My life is meaningful.",
  "No matter the obstacle, I am brave.",
  "Take a deep breath. You are going to figure this out.",
  "I am growing, like a fabulous sunflower.",
  "I am optimistic about what the universe will bring.",
  "You are loved.",
  "I control what I feel is a fun, comfortable activity for me.",
  "I am allowed to cry and feel sad. I will make it through.",
  "You are a survivor. I applaud you for your courage.",
  "I have my own way to achieve my goals.",
  "I allow myself time and space to heal.",
  "I will get through this.",
  "I am proud of myself.",
  "I choose to be happy and to love myself today.",
  "My possibilites are endless.",
  "I am strong and intelligent. My obstacles stand no chance.",
  "I believe in myself and my potential.",
];

var quotation = Qoutes;

var backgroundColor = new Array();

// background colors
backgroundColor[0] = "rgb(86, 203, 249)";
backgroundColor[1] = "rgb(209, 179, 196)";
backgroundColor[2] = "rgb(0, 191, 178)";
backgroundColor[3] = "rgb(232, 233, 235)";
backgroundColor[4] = "rgb(158, 227, 125)";
backgroundColor[5] = "rgb(170, 239, 223)";
backgroundColor[6] = "rgb(234, 217, 76)";
backgroundColor[7] = "rgb(235, 130, 88)";
backgroundColor[8] = "rgb(236, 157, 237)";
backgroundColor[9] = "rgb(119, 163, 234)";
backgroundColor[10] = "rgb(138, 249, 134)";
backgroundColor[11] = "rgb(143,149,211)";
backgroundColor[12] = "rgb(209,245,255)";
backgroundColor[13] = "rgb(255,202,212)";
backgroundColor[14] = "rgb(207,255,229)";
backgroundColor[15] = "rgb(153,139,244)";

// Default HTML
document.getElementById("quote").innerHTML = `You are worthy.`;
document.body.style.backgroundColor = "rgb(167, 190, 211)";

// for desktop users, when a user press the space bar
document.addEventListener("keyup", (event) => {
  if (event.code == "Space") {
    // Store current quote in an array
    var newArray = [];
    var currentQuote = document.getElementById("quote").innerHTML;
    newArray.push(currentQuote);

    // Randomize the upcoming quote and store in new array
    var random = Math.floor(Math.random() * quotation.length);
    var newArray2 = [];
    newArray2.push(quotation[random]);

    // Conditional

    // if the current quote is the same as the upcoming quote, redo random
    if (JSON.stringify(newArray) == JSON.stringify(newArray2)) {
      var nextRandom = Math.floor(Math.random() * quotation.length);
      document.getElementById("quote").innerHTML = quotation[nextRandom];
    }

    // if not, stick with randomized upcoming quote
    else {
      document.getElementById("quote").innerHTML = quotation[random];
    }

    // Store current background color in an array
    var currentBackgroundBody = document.body.style.backgroundColor;
    var newbgArray = [];
    newbgArray.push(currentBackgroundBody);

    // Randomize the upcoming background color and store in new array
    var randomBackground = Math.floor(Math.random() * backgroundColor.length);
    var newbgArray2 = [];
    newbgArray2.push(backgroundColor[randomBackground]);

    // Conditional

    // if current background color is the same as the next bg color, redo random
    if (JSON.stringify(newbgArray) == JSON.stringify(newbgArray2)) {
      var nextRandomBackground = Math.floor(Math.random() * quotation.length);
      document.body.style.backgroundColor =
        backgroundColor[nextRandomBackground];
    }

    // if not, stick with randomized upcoming bg color
    else {
      document.body.style.backgroundColor = backgroundColor[randomBackground];
    }
  }
});

// for mobile devices, when a user taps the screen
document.addEventListener("touchend", (event) => {
  // Store current quote in an array
  var newArray = [];
  var currentQuote = document.getElementById("quote").innerHTML;
  newArray.push(currentQuote);

  // Randomize the upcoming quote and store in new array
  var random = Math.floor(Math.random() * quotation.length);
  var newArray2 = [];
  newArray2.push(quotation[random]);

  // Conditional

  // if the current quote is the same as the upcoming quote, redo random
  if (JSON.stringify(newArray) == JSON.stringify(newArray2)) {
    var nextRandom = Math.floor(Math.random() * quotation.length);
    document.getElementById("quote").innerHTML = quotation[nextRandom];
  }

  // if not, stick with randomized upcoming quote
  else {
    document.getElementById("quote").innerHTML = quotation[random];
  }

  // Store current background color in an array
  var currentBackgroundBody = document.body.style.backgroundColor;
  var newbgArray = [];
  newbgArray.push(currentBackgroundBody);

  // Randomize the upcoming background color and store in new array
  var randomBackground = Math.floor(Math.random() * backgroundColor.length);
  var newbgArray2 = [];
  newbgArray2.push(backgroundColor[randomBackground]);

  // Conditional

  // if current background color is the same as the next bg color, redo random
  if (JSON.stringify(newbgArray) == JSON.stringify(newbgArray2)) {
    var nextRandomBackground = Math.floor(Math.random() * quotation.length);
    document.body.style.backgroundColor = backgroundColor[nextRandomBackground];
  }

  // if not, stick with randomized upcoming bg color
  else {
    document.body.style.backgroundColor = backgroundColor[randomBackground];
  }
});
