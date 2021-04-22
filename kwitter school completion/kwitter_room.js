
var firebaseConfig = {
      apiKey: "AIzaSyCyLvxG-VfQLymEwcOH5ADZTbPTsdieIiM",
      authDomain: "kwitter-dba09.firebaseapp.com",
      databaseURL: "https://kwitter-dba09-default-rtdb.firebaseio.com",
      projectId: "kwitter-dba09",
      storageBucket: "kwitter-dba09.appspot.com",
      messagingSenderId: "125061496843",
      appId: "1:125061496843:web:e324a8149e0aca6843870e",
    };

    firebase.initializeApp(firebaseConfig);
    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addRoom()
{
   room_name = document.getElementById("room_name").value;
   
   firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
   });

   localStorage.setItem("room_name", room_name);
   window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name -" , Room_names);
row = "<div class='room_name> id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>"
document.getElementById("output").innerHTML += row;
      //End code
      });});}

getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location= "kwitter_page.html";
}

function Logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location="index.html";
      }


