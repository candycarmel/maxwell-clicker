var cost;
var angry;
var froze;
var resultin;
var newRandom;
var axwes = 0;
var axweHealth;
var axweDamage;
var internalAutoAx = 0;
var enemyHealth;
var enemyDamage;
var currentGoop;
var fixedNumber;
var first = true;
var toyOwned = 0;
var lastSave = 0;
var treeOwned = 0;
var postOwned = 0;
var goopCosty = 0;
var goopOwned = [];
var goldBuff = false;
var petterOwned = 0;
var midGame = false;
var acceleratorOwned = 0;
var currentEvilGoop = "none";




//ELEMENTS
var mute = document.getElementById("mute");
var axweTheme = new Audio("maxwell.mp3");
var tip = document.getElementById("tip");
var shh = document.getElementById("shh");
var goop = document.getElementById("goop");
var gimmes = document.getElementById("gimme");
var saves = document.getElementById("saves");
var close = document.getElementById("close");
var cheat = document.getElementById("cheat");
var redBuy = document.getElementById("redBuy");
var redOwn = document.getElementById("redOwn");
var axweHp = document.getElementById("axweHp");
var extras = document.getElementById("extras");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var choice1 = document.getElementById("choice1");
var maxwell = document.getElementById("maxwell");
var blueBuy = document.getElementById("blueBuy");
var blueOwn = document.getElementById("blueOwn");
var goopOwn = document.getElementById("goopOwn");
var axweDmg = document.getElementById("axweDmg");
var mainPage = document.getElementById("mainMax");
var Ascensions = document.getElementById("Ascensions");
var devButton = document.getElementById("devButton");
var evilTurn = document.getElementById("evilTurn");
var greenBuy = document.getElementById("greenBuy");
var greenOwn = document.getElementById("greenOwn");
var axweText = document.getElementById("axweText");
var dateImage = document.getElementById("dateImg");
var resulting = document.getElementById("resulting");
var yellowBuy = document.getElementById("yellowBuy");
var yellowOwn = document.getElementById("yellowOwn");
var axweMagic = document.getElementById("axweMagic");
var normalTurn = document.getElementById("axweTurn");
var resultPage = document.getElementById("resultPage");
var goopCost = document.getElementById("axweGoopCost");
var axwePerSec = document.getElementById("axwePerSec");
var evilAxweHp = document.getElementById("evilAxweHp");
var dayOrEvent = document.getElementById("dayOrEvent");
var battlePage = document.getElementById("battleThing");
var evilMaxwell = document.getElementById("evilMaxwell");
var startThingy = document.getElementById("startThingy");
var axweToyCost = document.getElementById("axweToyCost");
var evilAxweDmg = document.getElementById("evilAxweDmg");
var axweToyOwned = document.getElementById("axweToyOwned");
var axweTreeCost = document.getElementById("axweTreeCost");
var axwePostCost = document.getElementById("axwePostCost");
var axweTreeOwned = document.getElementById("axweTreeOwned");
var axwePostOwned = document.getElementById("axwePostOwned");
var evilAxweMagic = document.getElementById("evilAxweMagic");
var axwePetterCost = document.getElementById("axwePetterCost");
var axwePetterOwned = document.getElementById("axwePetterOwned");
var axweMagicButton = document.getElementById("axweMagicButton");
var axweAttackButton = document.getElementById("axweAttackButton");
var backgroundMaxwell = document.getElementById("backgroundMaxwell");
var gameStartContainer = document.getElementById("gameStartContainer");
var axweAcceleratorCost = document.getElementById("axweAcceleratorCost");
var gameMiddleContainer = document.getElementById("gameMiddleContainer");
var axweAcceleratorOwned = document.getElementById("axweAcceleratorOwned");
var middles = document.getElementById("middles");

//PART 2 VARIABLES
var day = 1;
var choicez = 0;
var cheated = false;
var otherFirst = false;
var firstCode = true;
var ascensions = 0;
var maxwellLove = 0;
//stupid middle game stuff
var choices = ["You have the weekend to get your girlfriend to love you", "You got out of bed late and you have breakfast very soon with your girlfriend so you need to get ready", "okay. you then did your normal hygiene routine, and ate an orange, then got out of the house and started on your way to the diner", "you arrive after grabbing your forgotten item and you look for your girlfriend", "you sit down and she asks you where you acquired your foriegn attire", "her: oh, thats cool. the waitress walks over and asks What are you ordering?", "her: sounds good, I'll have a 19 dollar fortnite card \nwaitress: Thank you for your patronage! and she walks off", "ehh okay, How's school been", "sounds interesting. oh our food's here.", "her: well that was nice want to meet up for dinner aswell?", "you walk out of the diner and back to your house and get pulled into an alley by some random shady guy with a fedora", "Hey. you still owe me the money for those \"goods\" you purchased from my boss three months ago", "yeah yeah i know, you have two more days. after that, you arent safe from me.", "you exit the alley and head back to your house, where you then look for the cash you owed them. you found around 200 dollars in a huge jar of change you keep, and you wanted to use that for the dates you take with her", "you decide to take a nap to hopefully sleep off your distressing situation after eating some lunch, but you wake up late and only have 10 minutes until your dinner date.", "You barely make it on time and she also seems to be running a bit late becuase you dont see her", "her: hey sorry im a bit late lets head in shall we", "you are seated at a table and she asks you what you usually get here", "her: that sounds good I'll probably try that too", "You two order and after some simple small talk she asks you a question:\nWhat was the humorous rivalry between the 370th and 371st Infantry Regiments during World War I, involving distinctive ecorations, that became a symbol of French unity during the conflict?", "Oh yeah it was the hat war thanks for reminding me\n you finish up the date and pay the bill and she says: thanks for paying and coming to dinner with me", "lets have lunch tommorow?", "you head back home and sleep. you wake up to a beautiful morning and remember: this is the final day to get your girlfriend to love you.", "after wasting your time and eating some breakfast you watch some tv until its time for lunch", "you arrive at the resteraunt and she is there waiting for you", "you two head in and discuss the biblical chapter of john", "You are then seated and decide to order the chicken salad with extra food, and she orders something you dont know how to pronounce", "her: pretty good! its been nice seeing you so much this weekend", "you two finish up lunch and you feel compelled to ask her to dinner", "her: sure sounds great!\nyou traverse back home and get your nice clothes out. a few hours later and its finally time to leave", "you arrive and she is there too. you both walk in and get seated and you order", "her: yeah. yknow i still think its wierd how pineapples grow", "you notice something out of the window. its the creepy dude from earlier. he is pointing to his watch and smiling maniacly (uh oh hes coming to pick the money up early)", "you run all the way to your backyard, where becuase you expected this; you left a rocket ship in your backyard for an escape.\nyou and your girlfriend rush on the rocket and she says\nwow you really are the best boyfriend ever (and she reveals her true form)", "wow i love you so much now lets go fly away forever."];
var choice1s = ["What?", "Put on your best drip", "I forgot my wallet", "there she is", "I got this at walmart", "Scrambled eggs", "so... how's your week been?", "Okay, i have pretty good grades", "eat the food you ordered", "sure", "uh oh", "hey man just give me two more days", "uh bye", "ruh roh", "AHH GET DRESSED FANCY", "thank goodness, rather her be late than me", "sounds good", "the steak is pretty good", "ok", "psh that one's easy its the hat war or the guerre des chapeaux", "no problem it was fun", "sure", "I should go eat breakfast, then shower and clean up the house", "wow i am actually on time this time", "i forgot my girlfriend at home brb", "yeah that was one of the guys", "erm, how was your morning?", "thanks, you too", "ask her to dinner", "ok leave time", "hey, its been nice seeing you so much this weekend", "yeah it looks like really fake", "you usher your girlfriend out of a side door", "nani?!?", "sounds awesome"];
var choice2s = ["I thought I was playing a clicker game with a cat?", "Just put on some casual attire", "I mightve forgotten my pants", "shes the one with the wierd looking face", "this is all gucci", "pancakes", "I love your hat", "Horrible, im failing everything!", "throw the food back at her", "yep", "please dont hurt me", "I still have two more days to get you that money", "ok thanks?", "i hate moral delemmas", "ok", "Hope she gets here soon", "you first", "i love the salad", "ok", "that one was the christmas-tree conflict or the conflit d'arbre de noël", "it was awesome coming to dinner with u", "yep", "I should go back to sleep", "lets head out", "Lets head in", "Yokhanan is my favorite apostle", "how was ur afternoon", "i hate you", "wanna go to dinner?", "bye bye time for leaving", "Your face is disproportional with the rest of your head", "Thanks developer for spending so much time on this stupid game", "you ask to speak with her in the \"bathroom\" (sneak out)", "what~!?", "screw you."];
var choice3s = ["okay", "clothes are for losers", "I forgot nothing, confidence is key", "shes the pretty one", "My style is very similar to my uncles", "waffles", "Your face, its so intereseting", "Not too good", "sit there like an npc", "sounds great", "love your hat", "idk something about two days", "kthxbai", "dang it", "its gonna be okay, just get ready in some casual wear", "spin around in circles in hopes that it will make her appear sooner", "*sneeze for no reason*", "This place's food tastes horrible", "sure", "bruh how am I supposed to know", "thanks for coming too", "yep", "okay the house is pretty messy i should clean it up", "i leave", "letsa go!", "John pork?", "how was your day", "It was nice seeing you too", "lets go to dinner", "leave", "love your outfit", "seriously, like no one would think it grows like that", "option 2", "huh", "ok"];
var choice4s = ["okay?", "I can stay in my pajamas", "I forgot to get her flowers that I left on the counter", "shes the one with an ar-15", "Just grabbed something simple from my wardrobe", "I'll have everything", "option four", "Whats school?", "seriously just eat the food like a normal person", "that would be quite delectable m'lady", "please let go", "I'll have it in two days", "sounds good", "not again!", "im fine right now, just teleport over.", "I'll just wait calmly", "walk in with her", "I usually order prime rib", "AHHHHHHHHHHHHHHHHHHHHHHHH", "hey sorry I'm not really sure", "yep, that food was awesome", "ok", "i should eat orange juice with toothpaste", "im so hunger", "...", "Oh yeah, john bible, maker of bible!", "How are you?", "Yep", "dinner?", "button 4", "thanks for spending so much time with me", "yell run to your girlfriend and leave franticly", "no way!", "yippe!", "okay"];
var tips = ["Click your guy!", "Some of maxwell's other names are Bingus, Big 😳, and \"his\" real name is Jess", "Maxwell is cool", "Worship axwe or phase the consequences!", "you spin me right round baby right round", "Credits to ryan stark for a certain cool image", "Peter mickle smells like cream cheese.", "Thanks for playing!", "certain buildings may increase stats in the [redacted] mode", "Scroll Down! Please! I'm horrible at coding! Theres more content down there! Do it! Scroll Down!"];
var muted = false;
//ugh idk lol lol this is a checkpoint do random
maxwell.addEventListener("mousedown", function() {
  maxwell.style.height = "110px";
  gimmes.style.display = "none";
});
window.addEventListener("pagehide", function() {
  if (midGame && choicez == 17) {
    cheated = true;
  }
});
maxwell.addEventListener("mouseup", function() {
  maxwell.style.height = "100px";
});
loadSaveMaybe();
updateText();
if (midGame) {
  gameMiddleContainer.style.display = "block";
} else {
  gameMiddleContainer.style.display = "none";
}
if (!midGame) {
  resultPage.style.display = "none";
  battlePage.style.display = "none";
  shh.style.display = "none";
  axwePerSec.innerHTML = "Auto maxwells per second: " + generateAutoAx(internalAutoAx) * 10;
}
axweTheme.play();
//lets check if its the first time running, and then if so dont change the defualt variables
function middleTime() {
  console.log("switch to middle game");
  gameStartContainer.style.display = "none";
  midGame = true;
  gameMiddleContainer.style.display = "block";
  console.log(gameMiddleContainer.style.display);
  choice1.innerHTML = choice1s[choicez];
  choice2.innerHTML = choice2s[choicez];
  choice3.innerHTML = choice3s[choicez];
  choice4.innerHTML = choice4s[choicez];
  dayOrEvent.innerHTML = choices[choicez];
}
function loadSaveMaybe() {
  resultin = localStorage.getItem("resultin");
  acceleratorOwned = parseInt(localStorage.getItem("acceleratorOwned_")) || acceleratorOwned;
  axwes = parseFloat(localStorage.getItem("axwes_")) || axwes;
  toyOwned = parseInt(localStorage.getItem("toyOwned_")) || toyOwned;
  petterOwned = parseInt(localStorage.getItem("petterOwned_")) || petterOwned;
  treeOwned = parseInt(localStorage.getItem("treeOwned_")) || treeOwned;
  postOwned = parseInt(localStorage.getItem("postOwned_")) || postOwned;
  internalAutoAx = parseFloat(localStorage.getItem("internalAutoAx_")) || internalAutoAx;
  //stupid arrays. stupid arrays with their stupid dumb not string-ness
  goopOwned = JSON.parse(localStorage.getItem("goopOwned_")) || goopOwned;
}
setInterval(function() {
  if (!muted) {
    axweTheme.play();
  }
}, 10);
setInterval(function() {
  thingSave();
}, 300000);

setInterval(() => {
  tip.innerHTML = tips[gimmeRandom(0, tips.length - 1)];
}, 30000);
setInterval(function() {
  if (axwes > 10000 && first) {
    shh.style.display = "block";
    close.style.display = "none";
    console.log("die");
    first = false;
  }
  if (axwes > 6900000) {
    middles.style.display = "block";
  }
}, 10);
setInterval(function() {
  fixedNumber = internalAutoAx;
  internalAutoAx = fixMe(100);
  axwes += generateAutoAx(internalAutoAx);
  fixedNumber = axwes;
  axwes = fixMe(100);
  axweText.innerHTML = "Your maxwell happiness: " + Math.floor(axwes);
  var tempor = gimmeRandom(0, 4200);
  // console.log(tempor);
  if (tempor == 3) {
    console.log("magic golden maxwell");
    maxwellTrail(true);
  }
}, 100);
setInterval(function() {
  lastSave++;
  saves.innerHTML = "Last save: " + lastSave + "s (the game autosaves every 300 seconds)";
}, 1000);
function maxwellClick() {
  console.log("maxwell clickey");
  maxwellTrail(false);
  axwes++;
  axweText.innerHTML = "Your maxwell happiness: " + Math.floor(axwes);
}
function fixMe(howMuch) {
  fixedNumber *= howMuch;
  fixedNumber = Math.round(fixedNumber);
  fixedNumber /= howMuch;
  return fixedNumber;
}
function gimme() {
  axwes += 50000;
  battlePage.style.display = "grid";
}
function choiceThing(numba) {
  if (choicez == 3) {
    dateImage.changeImage("breakfast.png");
  } else if (choicez == 10) {
    dateImage.changeImage("scary.png");
  } else if (choicez == 13) {
    dateImage.changeImage("house.png");
  } else if (choicez == 15) {
    dateImage.changeImage("dinner.png");
  } else if (choicez == 21) {
    dateImage.changeImage("house.png");
  } else if (choicez == 23) {
    dateImage.changeImage("lunch.png");
  } else if (choicez == 28) {
    dateImage.changeImage("house.png");
  } else if (choicez == 29) {
    dateImage.changeImage("dinner.png");
  }
  saveMid();
  if (choicez > 34) {
    if (maxwellLove > 10) {
      dateImage.changeImage("good.png");
    } else if (maxwellLove > 0) {
      dateImage.changeImage("wierd.png");
    } else {
      dateImage.changeImage("bad.png");
    }
    setTimeout(function() {
      choicez = 0;
      maxwellLove = 0;
      saveMid();
      gameMiddleContainer.style.display = "none";
      gameStartContainer.style.display = "grid";
      restartThing(false);
      ascensions++;
      Ascensions.innerHTML = "Ascensions: " + ascensions;
    }, 5000);
  }
  if (numba == 1) {
    switch (choicez) {

      case 1:
        console.log("numba 1 case 1");
        maxwellLove += 2;
        break;
      case 2:
        console.log("numba 1 case 2");
        maxwellLove += 0;
        break;
      case 3:
        maxwellLove += 0;
        break;
      case 4:
        maxwellLove += 0;
        break;
      case 5:
        maxwellLove += 0;
        break;
      case 6:
        maxwellLove += 1;
        break;
      case 7:
        maxwellLove += 2;
        break;
      case 8:
        maxwellLove += -2;
        break;
      case 9:
        maxwellLove += 0;
        break;
      case 10:
        maxwellLove += 0;
        break;
      case 11:
        maxwellLove += 0;
        break;
      case 12:
        maxwellLove += 0;
        break;
      case 13:
        maxwellLove += 0;
        break;
      case 14:
        maxwellLove += 2;
        break;
      case 15:
        maxwellLove += 0;
        break;
      case 16:
        maxwellLove += 0;
        break;
      case 17:
        if (!cheated) {
          maxwellLove += 5;
        } else {
          maxwellLove -= 3;
        }
        break;
      case 18:
        maxwellLove += 1;
        break;
      case 19:
        maxwellLove += 0;
        break;
      case 20:
        maxwellLove += 1;
        break;
      case 21:
        maxwellLove += 0;
        break;
      case 22:
        maxwellLove += -1;
        //forgot girlfriend
        break;
      case 23:
        maxwellLove += 1;
        break;
      case 24:
        maxwellLove += 2;
        break;
      case 25:
        maxwellLove += 0;
        break;
      case 26:
        maxwellLove += 0;
        break;
      case 27:
        maxwellLove += 1;
        break;
      case 28:
        maxwellLove += 0;
        break;
      case 29:
        maxwellLove += 0;
        break;
      case 30:
        maxwellLove += 0;
        break;
      case 31:
        maxwellLove += 0;
        break;
      case 32:
        maxwellLove += 0;
        break;
      case 33:
        maxwellLove += 0;
        break;
      case 34:
        maxwellLove += 0;
        break;
    }
  } else if (numba == 2) {
    switch (choicez) {
      case 1:
        console.log("numba 2 case 1");
        maxwellLove += 1;
        break;
      case 2:
        console.log("numba 2 case 2");
        maxwellLove += -2;
        break;
      case 3:
        maxwellLove += -3;
        break;
      case 4:
        maxwellLove += -1;
        break;
      case 5:
        maxwellLove += 0;
        break;
      case 6:
        maxwellLove += 2;
        break;
      case 7:
        maxwellLove += -1;
        break;
      case 8:
        maxwellLove += 1;
        break;
      case 9:
        maxwellLove += 0;
        break;
      case 10:
        maxwellLove += 0;
        break;
      case 11:
        maxwellLove += 0;
        break;
      case 12:
        maxwellLove += 0;
        break;
      case 13:
        maxwellLove += 0;
        break;
      case 14:
        maxwellLove += 0;
        break;
      case 15:
        maxwellLove += 1;
        break;
      case 16:
        maxwellLove += 0;
        break;
      case 17:
        maxwellLove += 1;
        break;
      case 18:
        maxwellLove += 1;
        break;
      case 19:
        maxwellLove += 0;
        break;
      case 20:
        maxwellLove += -1;
        break;
      case 21:
        maxwellLove += 0;
        break;
      case 22:
        maxwellLove += 0;
        break;
      case 23:
        maxwellLove += 2;
        break;
      case 24:
        maxwellLove += -4;
        break;
      case 25:
        maxwellLove += 0;
        break;
      case 26:
        maxwellLove += 0;
        break;
      case 27:
        maxwellLove += -2;
        break;
      case 28:
        maxwellLove += 3;
        break;
      case 29:
        maxwellLove += 0;
        break;
      case 30:
        maxwellLove += 0;
        break;
      case 31:
        maxwellLove += 0;
        break;
      case 32:
        maxwellLove += 0;
        break;
      case 33:
        maxwellLove += 0;
        break;
      case 34:
        maxwellLove += 0;
        break;
    }
  } else if (numba == 3) {
    switch (choicez) {
      case 1:
        maxwellLove += -2;
        break;
      case 2:
        maxwellLove += 1;
        break;
      case 3:
        maxwellLove += 2;
        break;
      case 4:
        maxwellLove += 0;
        break;
      case 5:
        maxwellLove += 0;
        break;
      case 6:
        maxwellLove += -1;
        break;
      case 7:
        maxwellLove += 0;
        break;
      case 8:
        maxwellLove += 1;
        break;
      case 9:
        maxwellLove += 0;
        break;
      case 10:
        maxwellLove += 0;
        break;
      case 11:
        maxwellLove += 0;
        break;
      case 12:
        maxwellLove += 0;
        break;
      case 13:
        maxwellLove += 0;
        break;
      case 14:
        maxwellLove += 1;
        break;
      case 15:
        maxwellLove += 1;
        break;
      case 16:
        maxwellLove += -1;
        break;
      case 17:
        maxwellLove += -1;
        break;
      case 18:
        maxwellLove += 1;
        break;
      case 19:
        maxwellLove += 0;
        break;
      case 20:
        maxwellLove += 0;
        break;
      case 21:
        maxwellLove += 0;
        break;
      case 22:
        maxwellLove += 1;
        break;
      case 23:
        maxwellLove += 1;
        break;
      case 24:
        maxwellLove += 2;
        break;
      case 25:
        maxwellLove += 0;
        break;
      case 26:
        maxwellLove += 0;
        break;
      case 27:
        maxwellLove += 1;
        break;
      case 28:
        maxwellLove += 0;
        break;
      case 29:
        maxwellLove += 0;
        break;
      case 30:
        maxwellLove += 0;
        break;
      case 31:
        maxwellLove += 0;
        break;
      case 32:
        maxwellLove += 0;
        break;
      case 33:
        maxwellLove += 0;
        break;
      case 34:
        maxwellLove += 0;
        break;
    }
  } else if (numba == 4) {
    switch (choicez) {
      case 1:
        maxwellLove += 0;
        break;
      case 2:
        maxwellLove += 3;
        break;
      case 3:
        maxwellLove += 1;
        break;
      case 4:
        maxwellLove += 1;
        break;
      case 5:
        maxwellLove += -2;
        break;
      case 6:
        maxwellLove += 0;
        break;
      case 7:
        maxwellLove += -1;
        break;
      case 8:
        maxwellLove += 0;
        break;
      case 9:
        maxwellLove += 0;
        break;
      case 10:
        maxwellLove += 0;
        break;
      case 11:
        maxwellLove += 0;
        break;
      case 12:
        maxwellLove += 0;
        break;
      case 13:
        maxwellLove += 0;
        break;
      case 14:
        maxwellLove += 0;
        break;
      case 15:
        maxwellLove += 0;
        break;
      case 16:
        maxwellLove += 1;
        break;
      case 17:
        maxwellLove += 0;
        break;
      case 18:
        maxwellLove += 1;
        break;
      case 19:
        maxwellLove += 0;
        break;
      case 20:
        maxwellLove += -4;
        break;
      case 21:
        maxwellLove += 0;
        break;
      case 22:
        maxwellLove += 0;
        break;
      case 23:
        maxwellLove += 0;
        break;
      case 24:
        maxwellLove += 2;
        break;
      case 25:
        maxwellLove += 0;
        break;
      case 26:
        maxwellLove += 0;
        break;
      case 27:
        maxwellLove += 1;
        break;
      case 28:
        maxwellLove += 0;
        break;
      case 29:
        maxwellLove += 0;
        break;
      case 30:
        maxwellLove += 0;
        break;
      case 31:
        maxwellLove += 0;
        break;
      case 32:
        maxwellLove += 0;
        break;
      case 33:
        maxwellLove += 0;
        break;
      case 34:
        maxwellLove += 0;
        break;
    }
  }
  choicez++;
  choice1.innerHTML = choice1s[choicez];
  choice2.innerHTML = choice2s[choicez];
  choice3.innerHTML = choice3s[choicez];
  choice4.innerHTML = choice4s[choicez];
  dayOrEvent.innerHTML = choices[choicez];
  if (cheated) {
    dayOrEvent.innerHTML = "I KNOW YOU CHEATED.";
    choice1.innerHTML = "I KNOW YOU CHEATED.";
    choice2.innerHTML = "I KNOW YOU CHEATED.";
    choice3.innerHTML = "I KNOW YOU CHEATED.";
    choice4.innerHTML = "I KNOW YOU CHEATED.";
    cheated = false;
  }
}
function buyThing(thing) {
  if (thing == "toy") {
    cost = 10;
    for (var i2 = 0; i2 <= toyOwned; i2++) {
      cost += i2;
    }
    if (cost <= axwes) {
      internalAutoAx += 0.01;
      axwes -= cost;
      toyOwned++;
      fixedNumber = internalAutoAx * 10;
      axwePerSec.innerHTML = "Auto maxwells per second: " + generateAutoAx(fixMe(10));
      axweToyOwned.innerHTML = "Currently owned: " + toyOwned;
      axweText.innerHTML = "Your maxwell happiness: " + Math.floor(axwes);
      axweToyCost.innerHTML = "Buy a maxwell cat toy (cost: " + (cost + toyOwned) + ")";
    }
  } else if (thing == "petter") {
    cost = 150;
    for (var i3 = 0; i3 <= petterOwned; i3++) {
      cost += i3 * 5;
    }
    if (cost <= axwes) {
      internalAutoAx += 0.1;
      axwes -= cost;
      petterOwned++;
      fixedNumber = internalAutoAx * 10;
      axwePerSec.innerHTML = "Auto maxwells per second: " + generateAutoAx(fixMe(10));
      axwePetterOwned.innerHTML = "Currently owned: " + petterOwned;
      axweText.innerHTML = "Your maxwell happiness: " + Math.floor(axwes);
      axwePetterCost.innerHTML = "Buy a petter for maxwell (cost: " + (cost + petterOwned * 5) + ")";
    }
  } else if (thing == "tree") {
    cost = 2000;
    for (var i4 = 0; i4 <= treeOwned; i4++) {
      cost += i4 * 50;
    }
    if (cost <= axwes) {
      internalAutoAx += 2;
      axwes -= cost;
      treeOwned++;
      fixedNumber = internalAutoAx * 10;
      axwePerSec.innerHTML = "Auto maxwells per second: " + generateAutoAx(fixMe(10));
      axweTreeOwned.innerHTML = "Currently owned: " + treeOwned;
      axweText.innerHTML = "Your maxwell happiness: " + Math.floor(axwes);
      axweTreeCost.innerHTML = "Buy a tree for maxwell (cost: " + (cost + treeOwned * 50) + ")";
    }
  } else if (thing == "post") {
    cost = 15000;
    for (var i5 = 0; i5 <= postOwned; i5++) {
      cost += i5 * 200;
    }
    if (cost <= axwes) {
      internalAutoAx += 10;
      axwes -= cost;
      postOwned++;
      fixedNumber = internalAutoAx * 10;
      axwePerSec.innerHTML = "Auto maxwells per second: " + generateAutoAx(fixMe(10));
      axwePostOwned.innerHTML = "Currently owned: " + postOwned;
      axweText.innerHTML = "Your maxwell happiness: " + Math.floor(axwes);
      axwePostCost.innerHTML = "Buy a scratching post for maxwell (cost: " + (cost + postOwned * 200) + ")";
    }
  } else if (thing == "accelerator") {
    // cost = 15000;
    // for (var i5 = 0; i5 <= postOwned; i5++) {
    //   cost += i5 * 200;
    // }
    // if (cost <= axwes) {
    //   internalAutoAx += 10;
    //   axwes -= cost;
    //   postOwned++;
    //   fixedNumber = internalAutoAx * 10;
    //   axwePerSec.innerHTML = "Auto maxwells per second: " + generateAutoAx(fixMe(10));
    //   axwePostOwned.innerHTML = "Currently owned: " + postOwned;
    //   axweText.innerHTML = "Your maxwell happiness: " + Math.floor(axwes);
    //   axwePostCost.innerHTML = "Buy a scratching post for maxwell (cost: " + (cost + postOwned * 200) + ")";
    // }
    cost = 50000;
    for (var i6 = 0; i6 <= postOwned; i6++) {
      cost += i6 * 1000;
    }
    if (cost <= axwes) {
      internalAutoAx += 100;
      axwes -= cost;
      acceleratorOwned++;
      fixedNumber = internalAutoAx * 10;
      axwePerSec.innerHTML = "Auto maxwells per second: " + generateAutoAx(fixMe(10));
      axweAcceleratorOwned.innerHTML = "Currently owned: " + acceleratorOwned;
      axweText.innerHTML = "Your maxwell happiness: " + Math.floor(axwes);
      axweAcceleratorCost.innerHTML = "Buy a particle accelerator for maxwell (cost: " + (cost + acceleratorOwned * 2000) + ")";
    }
  }
}
function costUpdateNow() {
  if (goop.value == "red") {
    goopCost.innerHTML = "Buy goop (cost: 10000)"
    goopCosty = 10000;
  } else if (goop.value == "blue") {
    goopCost.innerHTML = "Buy goop (cost: 20000)"
    goopCosty = 20000;
  } else if (goop.value == "green") {
    goopCost.innerHTML = "Buy goop (cost: 15000)"
    goopCosty = 15000;
  } else if (goop.value == "yellow") {
    goopCost.innerHTML = "Buy goop (cost: 25000)"
    goopCosty = 25000;
  }
}
function buyGoop() {
  if (goopCosty <= axwes) {
    axwes -= goopCosty;
    if (goop.value == "red") {
      redBuy.style.visibility = "hidden";
      redOwn.style.visibility = "visible";
      goopOwned.value = "red";
      goopOwned.push("red");
    } else if (goop.value == "blue") {
      blueBuy.style.visibility = "hidden";
      blueOwn.style.visibility = "visible";
      goopOwned.value = "blue";
      goopOwned.push("blue");
    } else if (goop.value == "green") {
      greenBuy.style.visibility = "hidden";
      greenOwn.style.visibility = "visible";
      goopOwned.value = "green";
      goopOwned.push("green");
    } else if (goop.value == "yellow") {
      yellowBuy.style.visibility = "none";
      yellowOwn.style.visibility = "visible";
      goopOwned.value = "yellow";
      goopOwned.push("yellow");
    }
    goop.value = "nun";
    goopCost.innerHTML = "Buy goop (cost: 0)"
    goopCosty = 0;
  }
}
function thingSave() {
  lastSave = 0;
  localStorage.setItem("acceleratorOwned_", acceleratorOwned);
  localStorage.setItem("ascensions_", ascensions);
  localStorage.setItem("resultin_", resultin);
  localStorage.setItem("axwes_", axwes);
  localStorage.setItem("toyOwned_", toyOwned);
  localStorage.setItem("petterOwned_", petterOwned);
  localStorage.setItem("treeOwned_", treeOwned);
  localStorage.setItem("internalAutoAx_", internalAutoAx);
  localStorage.setItem("postOwned_", postOwned);
  //stupid arrays. stupid arrays with their stupid dumb not string-ness
  localStorage.setItem("goopOwned_", JSON.stringify(goopOwned));
  localStorage.setItem("confirmation", 1);
}
function generateAutoAx(numberThing) {
  return numberThing + (ascensions / 10) * numberThing;
}
function fight() {
  thingSave();
  resultPage.style.display = "none";
  mainPage.style.display = "none";
  battlePage.style.display = "grid";
  shh.style.display = "none";
  axweAttackButton.style.display = "block";
  normalTurn.innerHTML = "nothing";
  evilTurn.innerHTML = "nothing";
  startBattle();
}
function muting() {
  if (!muted) {
    muted = true;
    mute.innerHTML = "Unmute music";
    axweTheme.pause();
  } else if (muted) {
    muted = false;
    mute.innerHTML = "Mute music";
    axweTheme.play();
  }
}
function restartThing(fullStop) {
  if (!fullStop)
  {
  cost = 0;
  axwes = 0;
  internalAutoAx = 0;
  first = true;
  toyOwned = 0;
  lastSave = 0;
  treeOwned = 0;
  goopOwned = [];
  petterOwned = 0;
  goopCosty = 10000;
  resultin = "";
  localStorage.setItem("acceleratorOwned_", acceleratorOwned);
  localStorage.setItem("axwes_", axwes);
  localStorage.setItem("toyOwned_", toyOwned);
  localStorage.setItem("petterOwned_", petterOwned);
  localStorage.setItem("treeOwned_", treeOwned);
  localStorage.setItem("internalAutoAx_", internalAutoAx);
  //stupid arrays. stupid arrays with their stupid dumb not string-ness
  localStorage.setItem("goopOwned_", JSON.stringify(goopOwned));
  localStorage.setItem("confirmation", 1);
  localStorage.setItem("resultin_", resultin);
  updateText();
  } else {
      if (confirm("are you sure you want to reset?")) {
        ascensions = 0;
        localStorage.setItem("ascensions_", ascensions);
        cost = 0;
        axwes = 0;
        internalAutoAx = 0;
        first = true;
        toyOwned = 0;
        lastSave = 0;
        treeOwned = 0;
        goopOwned = [];
        petterOwned = 0;
        goopCosty = 10000;
        resultin = "";
        localStorage.setItem("acceleratorOwned_", acceleratorOwned);
        localStorage.setItem("axwes_", axwes);
        localStorage.setItem("toyOwned_", toyOwned);
        localStorage.setItem("petterOwned_", petterOwned);
        localStorage.setItem("treeOwned_", treeOwned);
        localStorage.setItem("internalAutoAx_", internalAutoAx);
        //stupid arrays. stupid arrays with their stupid dumb not string-ness
        localStorage.setItem("goopOwned_", JSON.stringify(goopOwned));
        localStorage.setItem("confirmation", 1);
        localStorage.setItem("resultin_", resultin);
        updateText();
      }
  }
}
function newGoop() {
  console.log(goopOwn.value);
  if (goopOwn.value == "red") {
    currentGoop = "red";
  } else if (goopOwn.value == "blue") {
    currentGoop = "blue";
    console.log("new is blue!");
  } else if (goopOwn.value == "green") {
    currentGoop = "green";
    console.log("new is green!");
  } else if (goopOwn.value == "yellow") {
    currentGoop = "yellow";
    console.log("new is yellow!");
  } else {
    currentGoop = "none";
    console.log("new is none!");
  }
}
function startBattle() {
  console.log("starting up the new battle");
  var isThereGoop = true;
  if (currentGoop == "red") {
    console.log("current goop is red");
    axweMagicButton.style.display = "block";
    axweMagic.innerHTML = "Maxwell Magic: Angry";
  } else if (currentGoop == "blue") {
    console.log("current goop is blue");
    axweMagicButton.style.display = "block";
    axweMagic.innerHTML = "Maxwell Magic: Ice";
  } else if (currentGoop == "green") {
    console.log("current goop is green");
    axweMagicButton.style.display = "block";
    axweMagic.innerHTML = "Maxwell Magic: Heal";
  } else if (currentGoop == "yellow") {
    console.log("current goop is yellow");
    axweMagicButton.style.display = "block";
    axweMagic.innerHTML = "Maxwell Magic: Thunder";
  } else {
    console.log("current goop is none");
    axweMagicButton.style.display = "none";
    currentGoop = "none";
    isThereGoop = false;
  }
  axweHealth = 10 + treeOwned;
  axweHp.innerHTML = "Maxwell HP: " + axweHealth;
  axweDamage = 1 + Math.floor(postOwned / 2);
  axweDmg.innerHTML = "Maxwell Damage: " + axweDamage;
  enemyHealth = 10 + gimmeRandom(treeOwned / 2, treeOwned * 1.5);
  evilAxweHp.innerHTML = "Evil Maxwell HP: " + enemyHealth;
  enemyDamage = 1 + Math.floor(gimmeRandom(postOwned / 2, postOwned * 1.5) / 2);
  evilAxweDmg.innerHTML = "Evil Maxwell Damage: " + enemyDamage;
  if (isThereGoop) {
    newRandom = gimmeRandom(0, 3);
    if (newRandom == 0) {
      currentEvilGoop = "blue";
      evilAxweMagic.innerHTML = "Evil Maxwell Magic: Ice";
    } else if (newRandom == 1) {
      currentEvilGoop = "green";
      evilAxweMagic.innerHTML = "Evil Maxwell Magic: Heal";
    } else if (newRandom == 2) {
      currentEvilGoop = "yellow";
      evilAxweMagic.innerHTML = "Evil Maxwell Magic: Thunder";
    } else {
      console.log("no current evil goop");
      currentEvilGoop = "none";
      evilAxweMagic.innerHTMl = "Evil Maxwell Magic: none";
    }
  } else {
    newRandom = gimmeRandom(0, 4);
    if (newRandom == 0) {
      newRandom = gimmeRandom(0, 3);
      if (newRandom == 0) {
        currentEvilGoop = "blue";
        evilAxweMagic.innerHTML = "Evil Maxwell Magic: Ice";
      } else if (newRandom == 1) {
        currentEvilGoop = "green";
        evilAxweMagic.innerHTML = "Evil Maxwell Magic: Heal";
      } else if (newRandom == 2) {
        currentEvilGoop = "yellow";
        evilAxweMagic.innerHTML = "Evil Maxwell Magic: Thunder";
      } else {
        evilAxweMagic.innerHTMl = "Evil Maxwell Magic: none";
        console.log("current evil goop is none");
      }
    } else {
      console.log("current evil goop is none");
      evilAxweMagic.innerHTMl = "Evil Maxwell Magic: none";
    }
  }
}
function turn(type) {
  if (type == "attack") {
    newRandom = gimmeRandom(0, 3);
    if (newRandom == 0) {
      if (angry) {
        enemyHealth -= axweDamage * 6;
        normalTurn.innerHTML = "You attacked doing " + axweDamage * 6 + ". Critical Hit AND rage!";
      } else {
        enemyHealth -= axweDamage * 2;
        normalTurn.innerHTML = "You attacked doing " + axweDamage * 2 + ". Critical Hit!";
      }
    } else {
      if (angry) {
        enemyHealth -= axweDamage * 3;
        normalTurn.innerHTML = "You attacked doing " + axweDamage * 3 + " WITH RAGE";
      } else {
        enemyHealth -= axweDamage;
        normalTurn.innerHTML = "You attacked doing " + axweDamage;
      }
    }
  } else {
    if (currentGoop == "red") {
      angry = true;
      normalTurn.innerHTML = "You are filled with PURE RAGE!! Next attack will do x3 damage (doesnt stack)";
    } else if (currentGoop == "blue") {
      froze = true;
      normalTurn.innerHTML = "You froze the enemy!";
      evilMaxwell.src = "evilIce.png";
    } else if (currentGoop == "green") {
      normalTurn.innerHTML = "You healed yourself for " + Math.floor(axweDamage / 2) + " health!";
      axweHealth += Math.floor(axweDamage / 2);
    } else if (currentGoop == "yellow") {
      newRandom = gimmeRandom(0, 2);
      if (newRandom == 0) {
        normalTurn.innerHTML = "You accidentally thundered all over yourself dealing " + axweDamage * 2 + " damage!";
        axweHealth -= axweDamage * 2;
      } else {
        normalTurn.innerHTML = "You thundered all over the enemy dealing " + axweDamage * 3 + " damage!";
        enemyHealth -= axweDamage * 3;
      }
    }
  }
  evilAxweHp.innerHTML = "Evil Maxwell HP: " + enemyHealth;
  axweHp.innerHTML = "Maxwell HP: " + axweHealth;
  axweAttackButton.style.display = "none";
  axweMagicButton.style.display = "none";
  setTimeout(function() {
    if (!froze) {
      console.log("not frozen");
      if (currentEvilGoop == "none") {
        //enemy attacks
        console.log("enemy attack");
        newRandom = gimmeRandom(0, 1);
        if (newRandom == 0) {
          axweHealth -= enemyDamage;
          evilTurn.innerHTML = "Enemy attacked doing " + enemyDamage;
        } else {
          axweHealth -= enemyDamage * 2;
          evilTurn.innerHTML = "Enemy attacked doing " + enemyDamage * 2 + ". Critical hit!";
        }
      } else {
        if (currentEvilGoop == "blue") {
          axweHealth -= enemyDamage * 2;
          evilTurn.innerHTML = "Enemy froze you then attacked, doing " + enemyDamage * 2 + " damage!";
        } else if (currentEvilGoop == "green") {
          enemyHealth += Math.floor(enemyDamage / 2);
          evilTurn.innerHTML = "Enemy healed itself for " + Math.floor(enemyDamage / 2) + " health!";

        } else if (currentEvilGoop == "yellow") {
          newRandom = gimmeRandom(0, 2);
          if (newRandom == 0) {
            evilTurn.innerHTML = "Enemy accidentally thundered all over themselves dealing " + enemyDamage * 2 + " damage!";
            enemyHealth -= enemyDamage * 2;
          } else {
            evilTurn.innerHTML = "Enemy thundered all over you dealing " + axweDamage * 3 + " damage!";
            axweHealth -= enemyDamage * 3;
          }
        }
        console.log("enemy magic attack");
      }
    } else {
      console.log("frozen");
      newRandom = gimmeRandom(0, 2);
      if (newRandom == 0) {
        froze = false;
        evilTurn.innerHTML = "Enemy broke free from the ice!";
        evilMaxwell.src = "evilMaxwell.png";
      } else {
        evilTurn.innerHTML = "Enemy is still frozen!";
      }
    }
    axweHp.innerHTML = "Maxwell HP: " + axweHealth;
    evilAxweHp.innerHTML = "Evil Maxwell HP: " + enemyHealth;
    if (enemyHealth <= 0) {
      console.log("huh?");
      resultin = "You won!";
      axwes += generateAutoAx(internalAutoAx) * 10 * 30;
      resulting.innerHTML = resultin;
      extras.innerHTML = "You won so you get 30 seconds worth of your auto axwes";
      battlePage.style.display = "none";
      resultPage.style.display = "block";
    } else if (axweHealth <= 0) {
      console.log("you loser");
      resultin = "You lost!";
      axwes -= generateAutoAx(internalAutoAx) * 10 * 60;
      resulting.innerHTML = resultin;
      extras.innerHTML = "You lose one minute worth of your auto axwes";
      battlePage.style.display = "none";
      resultPage.style.display = "block";
    }
  }, 1500);
  setTimeout(function() {
    axweAttackButton.style.display = "block";
    console.log(currentGoop);
    if (currentGoop != "none") {
      axweMagicButton.style.display = "block";
    } else {
      axweMagicButton.style.display = "none";
    }
  }, 3000);
}
function goldenTime(magicPotato, isPotato) {
  console.log("gold clickey");
  document.body.removeChild(magicPotato);
  isPotato = true;
  if (!goldBuff) {
    goldBuff = true;
    internalAutoAx *= 9;
  setTimeout(function() {
    goldBuff = false;
    internalAutoAx /= 9;
  }, 60000);
  }
}
//okay this is an annoying big one, lets add that funny trail effect thats in cookie clicker
function maxwellTrail(golden) {
  var fadingCookie = document.createElement("IMG");
  var removed = false;
  var time;
  if (!golden) {
    fadingCookie.src = "maxwell.gif";
    time = 100;
  } else {
    fadingCookie.src = "goldenAxwe.png";
    fadingCookie.onclick = function () { goldenTime(fadingCookie, removed); };;
    time = 500;
  }
  fadingCookie.classList.add("backgroundMaxwell");
  fadingCookie.style.right = Math.floor(Math.random() * 101) + "%";
  var fallAmt = Math.floor(Math.random() * 101);
  var startOp = 100 - fallAmt;
  fadingCookie.style.top = "0%";
  if (!removed) {
  document.body.appendChild(fadingCookie); //append the element to the document
  }
  function animate() {
    if (parseInt(fadingCookie.style.top) < fallAmt) {
      fadingCookie.style.top = (parseInt(fadingCookie.style.top) + 1) + "%";
      fadingCookie.style.opacity = (startOp - parseInt(fadingCookie.style.top)) / 100;
      setTimeout(animate, time);
    } else {
      // Animation is done, bye bye element
      document.body.removeChild(fadingCookie);
    }
  }

  animate();
}

//okay this is your chance to change it AAAAAAAAAWEIWeywieuwyeiuweiwieyuw
function home() {
  battle = false;
  mainPage.style.display = "grid";
  resultPage.style.display = "none";
  battlePage.style.display = "none";
  shh.style.display = "block";
  updateText();
}
function saveMid() {
  localStorage.setItem("choicez_", choicez);
  localStorage.setItem("maxwellLove_", maxwellLove);
}
function loadMid() {
  choicez = localStorage.getItem("choicez_");
  maxwellLove = localStorage.getItem("maxwellLove_");
}
function gimmeRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function checkCode() {
  console.log(cheat.value);
  if (cheat.value.toLowerCase() == "axwe" && firstCode) {
    axwes += 1000;
    firstCode = false;
  } else if (cheat.value == "1923") {
    console.log("correct");
    gimmes.style.display = "block";
  } else if (cheat.value.toLowerCase() == "starkmode") {
    //make everyhint angry eventually
  } else if (cheat.value.toLowerCase() == "midus") {
    maxwellTrail(true);
  }
  cheat.value = "";
}
function updateText() {
  redOwn.style.visibility = "hidden";
  redBuy.style.visibility = "visible";
  blueOwn.style.visibility = "hidden";
  blueBuy.style.visibility = "visible";
  greenOwn.style.visibility = "hidden";
  greenBuy.style.visibility = "visible";
  yellowOwn.style.visibility = "hidden";
  yellowBuy.style.visibility = "visible";
  axwePostOwned.innerHTML = "Currently owned: " + postOwned;
  axweTreeOwned.innerHTML = "Currently owned: " + treeOwned;
  axwePetterOwned.innerHTML = "Currently owned: " + petterOwned;
  axweToyOwned.innerHTML = "Currently owned: " + toyOwned;
  axwePerSec.innerHTML = "Auto maxwells per second: " + generateAutoAx(internalAutoAx) * 10;
  //calculate costs
  cost = 15000;
  for (var i5 = 0; i5 <= postOwned; i5++) {
    cost += i5 * 200;
  }
  axwePostCost.innerHTML = "Buy a scratching post for maxwell (cost: " + (cost) + ")";
  cost = 2000;
  for (var i4 = 0; i4 <= treeOwned; i4++) {
    cost += i4 * 50;
  }
  axweTreeCost.innerHTML = "Buy a tree for maxwell (cost: " + (cost) + ")";
  cost = 150;
  for (var i3 = 0; i3 <= petterOwned; i3++) {
    cost += i3 * 5;
  }
  axwePetterCost.innerHTML = "Buy a petter for maxwell (cost: " + (cost) + ")";
  cost = 10;
  for (var i2 = 0; i2 <= toyOwned; i2++) {
    cost += i2;
  }
  axweToyCost.innerHTML = "Buy a maxwell cat toy (cost: " + (cost) + ")";
  for (var i = 0; i < goopOwned.length; i++) {
    console.log(goopOwned[i]);
    if (goopOwned[i] == "red") {
      redBuy.style.visibility = "hidden";
      redOwn.style.visibility = "visible";
    } else if (goopOwned[i] == "blue") {
      blueBuy.style.visibility = "hidden";
      blueOwn.style.visibility = "visible";
    } else if (goopOwned[i] == "green") {
      greenBuy.style.visibility = "hidden";
      greenOwn.style.visibility = "visible";
    } else if (goopOwned[i] == "yellow") {
      yellowBuy.style.visibility = "hidden";
      yellowOwn.style.visibility = "visible";
    }
    goop.value = "nun";
  }
}