const firebaseConfig = {
    apiKey: "AIzaSyCSro01EC3D1HFTNGKvmY20misObx5v2Yo",
    authDomain: "kwitter-4c103.firebaseapp.com",
    databaseURL: "https://kwitter-4c103-default-rtdb.firebaseio.com",
    projectId: "kwitter-4c103",
    storageBucket: "kwitter-4c103.appspot.com",
    messagingSenderId: "688022624306",
    appId: "1:688022624306:web:b5d0e2d83073289bae842b",
    measurementId: "G-DB8KLCFZW3"
  };
  
      
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
