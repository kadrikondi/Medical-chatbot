function store(){

    var name = document.getElementById('name');
    var pw = document.getElementById('pw');
    var loginname= document.getElementById('loginname')
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in email');

    }else if(pw.value.length == 0){
        alert('Please fill in password');
     }else if (loginname.value.length == 0) {
            alert('Please enter oruko');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in email and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter to your password');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter to your password');

    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('pw', pw.value);
        localStorage.setItem('loginname', loginname.value);
           window.location.assign("/login");
        alert('Your account has been created');
    //    window.location.assign("/login");

        // Assigns a new URL to the current window.
        // window.location.assign("https://www.example.com");
    }
}

//checking
function check(){
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');
    var userRemember = document.getElementById("rememberMe");

    if(userName.value == storedName && userPw.value == storedPw){
         window.location.assign("/chatbot");
                alert('You are logged in.');
                
             
    }else{
        alert('Error on login');
    }
}