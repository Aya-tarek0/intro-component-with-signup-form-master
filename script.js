let form = document.getElementById("btn");

form.addEventListener('click', function(event) {
    event.preventDefault();

    let fname = document.getElementById('name1').value;
    let lname = document.getElementById('name2').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    let fnameError = document.getElementById("fname");

    if (fname === "") {
        if (!fnameError) {
            fnameError = document.createElement("div");
            fnameError.id = "fname";
            document.querySelector(".fname").appendChild(fnameError);
        }
        fnameError.innerHTML = `<span style="color: red;">First Name Can not be empty</span>`;
    } else{
        fnameError.innerHTML = "";
    }

 
let lnameError = document.getElementById("lname");

if(lname === ""){
    if(!lnameError){

        lnameError = document.createElement("div");
        lnameError.id = "lname";
        document.querySelector(".lname").appendChild(lnameError);
    }
    lnameError.innerHTML = `<span style="color: red;">last Name Can not be empty</span>`;
    }

else{
        lnameError.innerHTML = "";
    }

    let emailError = document.getElementById("emailError");
     if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
        
        if (!emailError) {
             emailError = document.createElement("div"); 
             emailError.id = "emailError"; 
             document.querySelector(".emaill").appendChild(emailError);
             } 
             emailError.innerHTML = `<span style="color: red;">looks like this is not an email</span>`;

             }
   else{
   
        emailError.innerHTML = "";
    
   }

   let passError = document.getElementById("passError");
     if (password === "") {
        
        if (!passError) {
             passError = document.createElement("div"); 
            passError.id = "passError"; 
             document.querySelector(".pass").appendChild(passError);
             } 
             passError.innerHTML = `<span style="color: red;">password Can not be empty</span>`;

             }
   else{
   
        passError.innerHTML = "";
    
   }
});



