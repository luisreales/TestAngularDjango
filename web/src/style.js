const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const regusername = document.getElementById("regusername");
const regpassword = document.getElementById("_regpassword");
const regemail = document.getElementById("regemail");

const logusrname = document.getElementById("logusrname");
const logpassword = document.getElementById("logpassword");


signUpButton.addEventListener('click', () => {
   
    regusername.value = null;
    regpassword.value = null;
    regemail.value = null;
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    
    logusrname.value = null;
    logpassword.value = null;
    container.classList.remove("right-panel-active");
    
});