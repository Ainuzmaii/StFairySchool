
var firebaseConfig = {
      apiKey: "AIzaSyCfotVpN0HY9h5UiH3l279JtnV5umbNn4A",
      authDomain: "jennakwitter.firebaseapp.com",
      projectId: "jennakwitter",
      storageBucket: "jennakwitter.appspot.com",
      messagingSenderId: "705134286069",
      appId: "1:705134286069:web:358d6ce80ca829b9a121bc"
    };
    
   
     firebase.initializeApp(firebaseConfig);

     user_name = localStorage.getItem("user_name");
     document.getElementById("user_name").innerHTML = "WeLcOmE"+user_name +"!"
     
     function addRoom() {
       room_name = document.getElementById("room_name").value;
       firebase.database().ref("/").child(room_name).update({
         purpose:"tHiS iS kEy tO lOcK"
       }) ;
     localStorage.setItem("room_name" , room_name);
     window.location = "kwitter_page.html"; 
     }
     
     function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
          Room_names = childKey;
         console.log("room_name = "+Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>" 
     document.getElementById("output").innerHTML+=row;
       });});}
     getData();

     
     function redirectToRoomName(name) {
       console.log(name);
       localStorage.setItem("room_name" , name);
       window.location = "kwitter_page.html";
     }



     
