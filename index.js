// var header = $("h1");
// // console.log(header);
// header.text("hi my name is Rodrigues");
// // .text changes the actual text of an element



// var header = document.querySelector('h1');    // javascript
//
// var header = $('h1');                         // jQuery

// document.querySelector = $
var indexPos = 0;

var cloud9 = ["Dancing Queen", "Heroes", "FRIENDS", "breathin" , "thank u, next" , "Complicated" , "Halo" , "Don't Let Me Down" , "Rockabye" , "All I Do Is Win" , "New Rules" , "Lights" , "Fergalicious" , "Wild Ones" , "Hoodie" , "Beg For It" , "Whatcha Say" , "Empire State of Mind" , "Welcome to New York" , "Gave Me Something" , "Hold My Hand" , "Don't Stop Believin'" , "Stronger" , "Lip Gloss" , "Lean On" , "Spiderwebs" , "Shower" , "Pumpin Blood" , "Good Time" , "Umbrella" , "Cheap Thrills" , "The Greatest" , "Crank That" , "Dreams" , "Right Now" , "When It's Love" , "Rewrite the Stars" ,"Mamma Mia" , "Super Trouper" , "Lush Life" , "Stay" , "Youngblood" , "Clarity" , "7 Rings" , "break up with your girlfriend" , "Mama" , "What's the Matter Here" , "Thotiana" , "Better" , "Mr. Saxobeat" , "Old Town Road" , "Magic in the Hamptons"];
console.log(cloud9);



// console.log(cloud9[6]);
// console.log(cloud9.length);
// 51 index positions
var button = $('.song');

button.on("click", doSomething);
var change1 = $("h4");
var likey = document.getElementById("likey");
var yes = $('.yes');
var no = $('.no');
var song = "hello";
var songs = document.querySelector("ul");


function doSomething() {

    // var name = $(".name-input").val();
    indexPos = Math.floor(Math.random() * (51 - 0 + 1) + 0);
    // successfully gives all numbers including 0 and 51
  console.log(name);
  // console.log("you clicked the button!");
  console.log(indexPos);
  console.log(cloud9[indexPos]);
  change1.text(cloud9[indexPos]);
  // likey.innerHTML = "Do you like this song?";
  // if (no.on("click", removeSong)){
  //   console.log("the no button works");
  // }
  // else if(yes.on("click", addSong)){
  //   console.log("the yes button works");
  // }
  //
  // else{
  //   console.log("no button clicked");
  // }

  // change previous text to whichever song
}

// clear song request
var button2 = $('.clr')
button2.on("click", clearScreen);
function clearScreen() {
  // console.log("hello");
  change1.text(" ");
  // if (document.querySelector("h6").innerHTML == "hey button3 is working finally!!"){
  //   document.querySelector("h6").innerHTML = " ";
  // }
}
//
// or you can also do this:
//
// var button2 = document.querySelector("")
// button2.on("click", function (){
//   write functions here!
// })

// var button3 = $('#button3')
// // var button3 = document.getElementById("button3");
//
// button3.on("click", replaceText);
//
// function replaceText (){
//   document.querySelector("h6").innerHTML = "hey button3 is working finally!!"
// }
//
// var clearButton = document.getElementById("clearSong");
//
// clearButton.addEventListener("click", doSomething)
//
// function doSomething(){
//   document.querySelector("h4").innerHTML = " ";
// }

function removeSong(){

  cloud9.splice(indexPos, 1);
  console.log(cloud9);
}

function addSong(){
  song = cloud9[indexPos];
  var appendSong = "<li>" + song + "</li>"
  songs.append(appendSong);
}
