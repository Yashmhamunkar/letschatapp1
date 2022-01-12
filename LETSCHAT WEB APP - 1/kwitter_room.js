

var  firebaseConfig = {
  apiKey: "AIzaSyCDTkqYoo2KoW-Jy_hnbQNLFQVnJGYmOeQ",
  authDomain: "letschat-web-app---1-ea9e6.firebaseapp.com",
  projectId: "letschat-web-app---1-ea9e6",
  storageBucket: "letschat-web-app---1-ea9e6.appspot.com",
  messagingSenderId: "780280685179",
  appId: "1:780280685179:web:ca0ea338dcceac819df8de"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("username");
document.getElementsById("user_name").innerhtml = "welcome"+user_name+"!";

function add_room(){
      room_name = document.getElementById("room_name").value;

      localStorage.setItem("roomname",room_name);

      window.location="Kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
