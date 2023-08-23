//variables
let title = document.querySelector('#title');
let names = document.querySelector('#nameField');
let name1 = document.querySelector('#nameField1');
let number = document.querySelector('#numField');
let forgot = document.querySelector('#forgot');
let signup = document.querySelector('#signupBtn');
let signin = document.querySelector('#signinBtn');
let submit = document.querySelector("#submit");
let input = document.querySelector('.input-grp');
let pass = document.querySelector('.password');
let mail = document.querySelector('.email');
let btnField = document.querySelector('#btn-field');
let corz = 'https://cors-anywhere.herokuapp.com/';
let signinBase ='http://localhost:28217/api/Auth/Login';
let signupBase ='http://localhost:28217/api/Auth/Register';
let forgotpass ='http://localhost:28217/api/Auth/Forgot?Password';
//var count = 0;
//var counts = 0;
//events
signin.onclick = function(){
    names.style.maxHeight = "0";
    name1.style.maxHeight = "0";
    number.style.maxHeight = "0";
    pass.style.height = "2px";
    mail.style.height = "2px";
   // btnField.style.marginTop = '0';
    title.innerHTML = "Sign In";
    signup.classList.add("disable");
    signin.classList.remove("disable");

}
signup.onclick = function(){
    names.style.maxHeight = "60px";
    name1.style.maxHeight = "60px";
    number.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signup.classList.remove("disable");
    signin.classList.add("disable");
    
}

/*let init = () => {
    if (count > 1 && count <3){
        document.getElementById("frm").submit();
    }
}
init();*/


function changePass(){
    submit.style.backgroundColor = "#eaeaea";
    submit.style.color = "#555";
    
}


//functions
fetch(signupBase).then(function (response) {
    if (response.ok) {
        return response.json();
    } else {
        return Promise.reject(response);
    }
}).then(function (data) {
    console.log(data);
}).catch(function (error) {
    console.warn('Something went wrong.', error);
});
/*function onget() {
    fetch(signupBase)
    .then((response) => {
        if (!response.ok){
            throw new(response.error)
        }
        console.log( response.json());
    })
    
    .then(data => {
        names.value= data.firstName;
    })
    .catch(function(error){
        names.value = error;
    })
}*/
/*window.addEventListener('load', () =>{
fetch(signupBase)
   .then(response => response.json())
   .then(responseJson => console.log(responseJson));
});*
window.addEventListener('load',
async function endpoint() {
    let response = await fetch(signupBase);
    let data = response.json();
    console.log(data);
   }
)
   
let response =  async () => {
    await fetch(signupBase);
    if (response.ok){
        let json =await response.json();
        console.log(json);
    } else {
       alert('HTTP-Error: ' + response.status)
    }

}*/