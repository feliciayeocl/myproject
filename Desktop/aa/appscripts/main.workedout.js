require(
   // Use this library to "fix" some annoying things about Raphel paper and graphical elements:
    //     a) paper.put(relement) - to put an Element created by paper back on a paper after it has been removed
    //     b) call element.addEventListener(...) instead of element.node.addEventListner(...)
    ["../jslibs/raphael.lonce"],  // include a custom-built library

    function () {

        console.log("Yo, I am alive!");

        var audio = new Audio("haiku.wav");

          function enableAutoplay() { 
            console.log("play sound");
            audio.autoplay = true;
            audio.loop = true;
            audio.load();
        }

        enableAutoplay();
  });


    // ABOUT - INTERACTIVE STORYTELLING
    // If click on alphabet A, shows blood. Else, keep it at A
    function changeImage() {
        var image = document.getElementById('myImage');
        if (image.src.match("blood")) {
            image.src = "http://www.tau.ac.il/~ayali/arg-a-5O-tRyA.gif";
        } else {
            image.src = "http://rs1266.pbsrc.com/albums/jj529/pixelypoo/Red/original3.gif~c200";
        }
    }

    // If click on blood, returns to alphabet A. Else, keep it at blood. 
    function changeImage() {
        var image = document.getElementById('myImage');
        if (image.src.match("A")) {
            image.src = "http://rs1266.pbsrc.com/albums/jj529/pixelypoo/Red/original3.gif~c200";
        } else {
            image.src = "http://www.tau.ac.il/~ayali/arg-a-5O-tRyA.gif";
        }
    }

    // Reveal lastwords when click button
    function myFunction() {
        document.getElementById("lastwords").innerHTML = "Why am I the last to die?";
        document.getElementById("lastwords").style.color = "red";
    }

    // To blackout The end when onclick
    function changeColor(id)
    {
      document.getElementById(id).style.color = "#000000"; // forecolor
      document.getElementById(id).style.backgroundColor = "#000000"; // backcolor
    }
 

    // GAME CHALLENGE 
    // create array of sentences for bne (b - beginner, n - novice, e - expert) 
    var msg = new Array("Practice typing can help the phalanx bones of your fingers.",
    "The skeleton of the human hand consists of 27 bones.",
    "What causes the noise when you crack a joint?",
    "Perplexing phrases, like this one, are tougher to type.")
    word = 10

    function b() {
    var msg = new Array("To succeed, you need to have backbone.",
    "Can you activate your phalanx rather quickly?",
    "Who will have a bone fracture?",
    "To be proud of your phalanx bones!")
    word = 7
    }

    function n() {
    var msg = new Array("Practice typing can help the phalanx bones of your fingers.",
    "The skeleton of the human hand consists of 27 bones.",
    "What causes the noise when you crack a joint?",
    "Perplexing phrases, like this one, are tougher to type.")
    word = 10
    }

    function e() {
    var msg = new Array("If you can correctly, and quickly, type this perplexing sentence, please thank your phalanx bones!",
    "You have superb phalanx if you can correctly, and quickly, typing this long phrase.",
    "I believe you've good phalanx bones', so I believe you will correctly copy this statement!",
    "Because this is not a fairly simple phrase, could you swiftly, and precisely, copy it?")
    word = 15
    }

    //random message type 
    function startgame() {
    randNum = Math.floor((Math.random() * 10)) % 4
    msgType = msg[randNum]

    //time run from start 
    day = new Date();
    startType = day.getTime();

    //3 possibilities to message: as per question - given.value, typed entry - typed.value, selecting question - typed.focus
    document.theForm.given.value = msgType
    document.theForm.typed.value();
    document.theForm.typed.focus();
    }

    //stop players from copying text, to pop alert box 
    function cheat() {
    alert("You can not change that!");
    document.theForm.typed.focus();
    }

    //timer results when game stops
    function stopIt() {
    dayTwo = new Date();
    endType = dayTwo.getTime();
    totalTime = ((endType - startType) / 1000)

    //if typed correctly, show results and time. if typed wrongly, show results and time. 
    spd = Math.round((word/totalTime) * 60)
    if (document.theForm.typed.value == document.theForm.given.value) {
    alert("\nYou typed a " + word + " word sentence in "
    + totalTime + " seconds, a speed of about " + spd + " words per minute!")
    }
    else {
    alert("You made an error, but typed at a speed of " + spd + " words per minute.")
       }
    }


  

