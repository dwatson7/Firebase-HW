// Initialize Firebase
var config = {
  apiKey: "AIzaSyAIL-zHk5PQtKU0siYPKNRZ9IMlc0tTJo0",
  authDomain: "fir-train-e46f7.firebaseapp.com",
  databaseURL: "https://fir-train-e46f7.firebaseio.com",
  projectId: "fir-train-e46f7",
  storageBucket: "fir-train-e46f7.appspot.com",
  messagingSenderId: "1090285805008"
};
firebase.initializeApp(config);
console.log("if the javascript is there????");


//Create a variable to reference the database
var database= firebase.database();


//Whenever a user clicks the submit-bid button
$("#submit").on("click", function(event){
console.log(event);
//Prevent the inout values
event.preventDefault();
//Get the input values
name = $("#inputName").val().trim();
destination = $("#inputDestination").val().trim();
firstTrain = $("#inputFirstTrain").val().trim();
frequency = $("#inputFrequency").val().trim();
//pushes the data onto the end of the end of the database
$(".table").push(event);

database.ref().push({
name: name,
destination: destination,
frequency: frequency,
FirstTrain: firstTrain,
dateAdded: firebase.database.ServerValue.TIMESTAMP
});
});

database.ref().on("child_added", function(childsnapshot) {



console.log(childsnapshot.val().name);
console.log(childsnapshot.val().destination);
console.log(childsnapshot.val().frequency);
console.log(childsnapshot.val().nextArrival);
console.log(childsnapshot.val().minutesAway);




console.log(lastObj.name);
console.log(lastObj.destination);
console.log(lastObj.frequency);
console.log(lastObj.nextArrival);
console.log(lastObj.minutesAway);






}, function(errorObject) {
console.log("Erros handled: " + errorObject.code);

});
