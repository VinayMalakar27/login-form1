/*const Login = document.getElementById('Login');
Login.addEventListener('click', () => {
alert("Login succecfully");
});
*/
/*
document.addEventListener('DOMContentLoaded', function() {
const Login = document.getElementById('Login');
Login.addEventListener('click',() ==> {}
)
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');

Login.addEventListener('click',() => {
    if (usernameInput.value.trim() !=='' && passwordInput.value.trim() !==''){
        alert('Login successful');
    }
    else{
        alert('please fill username and password.');
    }

});
});
*/

// Using DOMContentLoaded event to ensure the script runs after the DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    const Login = document.getElementById('Login');

    // Adding a click event listener to the login button
    Login.addEventListener('click', () => {
        const usernameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        // Checking if both username and password fields are filled
        if (usernameInput.value.trim() !== '' && passwordInput.value.trim() !== '') {
            // Showing an alert message when both fields are filled
            alert('Login successful!');
        }
        else {
            // Showing an alert if either username or password is not filled
            alert('Please fill username and password.');
        }
    });
});


