function adduser(){
      user_name = document.getElementById("user_name").value;
      

      localStorage.setItem("username",user_name);

      window.location="Kwitter_room.html";
}
function login(){
      window.location="Kwitter_room.html";
}