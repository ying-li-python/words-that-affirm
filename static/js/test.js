var quotation = new Array();

quotation[0] = "I am unapologetic for who I am.";
quotation[1] = "I deserve to be happy and confident.";
quotation[2] = "Though times are tough, I am resilient.";
quotation[3] = "I am empowered by my awesomeness.";
quotation[4] = "I am proud to be where I am today.";
quotation[5] = "Treat yourself. You totally deserve it.";
quotation[6] = "I am thriving.";
quotation[7] = "Good vibes are coming your way.";
quotation[8] = "You have accomplished a lot. Keep it up!";
quotation[9] = "You are a kind, honest, loving soul. I believe in you.";
quotation[10] = "My path is not set in stone; I am the architect.";
quotation[11] = "My life is meaningful.";
quotation[12] = "No matter the obstacle, I am brave.";
quotation[13] = "Take a deep breath. You are going to figure this out.";
quotation[14] = "I am growing, like a fabulous sunflower.";
quotation[15] = "I am optimistic about what the universe will bring.";
quotation[16] = "You are loved."
quotation[17] = "I control what I feel is a fun, comfortable activity for me."
quotation[18] = "I am allowed to cry and feel sad. I will make it through."
quotation[19] = "You are a survivor. I applaud you for your courage."
quotation[20] = "I have my own way to achieve my goals."
quotation[21] = "I allow myself time and space to heal."

var backgroundColor = new Array();

backgroundColor[0] = "rgb(86, 203, 249)";
backgroundColor[1] = "rgb(209, 179, 196)";
backgroundColor[2] = "rgb(0, 191, 178)";
backgroundColor[3] = "rgb(232, 233, 235)";
backgroundColor[4] = "rgb(158, 227, 125)";
backgroundColor[5] = "rgb(170, 239, 223)";
backgroundColor[6] = "rgb(234, 217, 76)";
backgroundColor[7] = "rgb(235, 130, 88)";
backgroundColor[8]= "rgb(236, 157, 237)";

// Default HTML
document.getElementById("quote").innerHTML = `You are worthy.`
document.body.style.backgroundColor = "rgb(167, 190, 211)";

// for desktop users, when a user press the space bar 
document.addEventListener('keyup', event => {

    if (event.code == "Space") {

        // Store current quote in an array
        var newArray = [];
        var currentQuote = document.getElementById("quote").innerHTML;
        newArray.push(currentQuote);

        // Randomize the upcoming quote and store in new array
        var random = Math.floor(Math.random()*(quotation.length));
        var newArray2 = [];
        newArray2.push(quotation[random])

        // Conditional 

        // if the current quote is the same as the upcoming quote, redo random
        if (JSON.stringify(newArray)==JSON.stringify(newArray2)) {
            var nextRandom = Math.floor(Math.random()*(quotation.length));
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
        var randomBackground = Math.floor(Math.random()*(backgroundColor.length));
        var newbgArray2 = [];
        newbgArray2.push(backgroundColor[randomBackground]);

    
        // Conditional 

        // if current background color is the same as the next bg color, redo random
        if (JSON.stringify(newbgArray)==JSON.stringify(newbgArray2)) {
            var nextRandomBackground = Math.floor(Math.random()*(quotation.length));
            document.body.style.backgroundColor = backgroundColor[nextRandomBackground];
        }
    
        // if not, stick with randomized upcoming bg color
        else {
            document.body.style.backgroundColor = backgroundColor[randomBackground];
        }

    }

  })

// for mobile devices, when a user taps the screen
document.addEventListener('touchend', event => {
   // Store current quote in an array
   var newArray = [];
   var currentQuote = document.getElementById("quote").innerHTML;
   newArray.push(currentQuote);

   // Randomize the upcoming quote and store in new array
   var random = Math.floor(Math.random()*(quotation.length));
   var newArray2 = [];
   newArray2.push(quotation[random]);

   // Conditional 

   // if the current quote is the same as the upcoming quote, redo random
   if (JSON.stringify(newArray)==JSON.stringify(newArray2)) {
       var nextRandom = Math.floor(Math.random()*(quotation.length));
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
   var randomBackground = Math.floor(Math.random()*(backgroundColor.length));
   var newbgArray2 = [];
   newbgArray2.push(backgroundColor[randomBackground]);

   // Conditional 

   // if current background color is the same as the next bg color, redo random
   if (JSON.stringify(newbgArray)==JSON.stringify(newbgArray2)) {
       var nextRandomBackground = Math.floor(Math.random()*(quotation.length));
       document.body.style.backgroundColor = backgroundColor[nextRandomBackground];
   }

   // if not, stick with randomized upcoming bg color
   else {
       document.body.style.backgroundColor = backgroundColor[randomBackground];
   }

})

