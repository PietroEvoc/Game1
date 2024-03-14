// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAGxOXZNWDmwzUyyHlcQ4MsjdtHtXC5E00",
    authDomain: "castlecrawlers-f0369.firebaseapp.com",
    projectId: "castlecrawlers-f0369",
    storageBucket: "castlecrawlers-f0369.appspot.com",
    messagingSenderId: "137343873527",
    appId: "1:137343873527:web:d52d121d4d926a16fbbef2",
    measurementId: "G-GH33G5MCFP"
  };
  
firebase.initializeApp(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const database = getDatabase(app);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // Firebase is initialized, you can now call the register function
        console.log("Firebase initialized:", user);
    } else {
        // No user is signed in, handle this case if necessary
        console.log("Firebase not initialized");
    }
});

// Register function
function register () {
    // Get all input fields
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    // Validate email, password, and username
    if (!validate_email(email) || !validate_password(password) || !validate_username(username)) {
        alert("Please provide a valid email, password, and username.");
        return;
    }

    // Create new user with email and password
    auth.createUserWithEmailAndPassword(email, password)
    .then(function() {

        var user = auth.currentUser

        var database_ref = database.ref()

        var user_data = {
            email : email,
            username : username,
            last_login : Date.now()
        }

        database_ref.child('users/' + user.uid).set(user_data)


        alert('User created successfully!');
    })
    // .then((userCredential) => {
    //     // User creation successful, add user data to the database
    //     const user = userCredential.user;

    //     const userData = {
    //         email: email,
    //         username: username,
    //         last_login: Date.now()
    //     };

    //     // Add user data to the database
    //     const databaseRef = database.ref();
    //     databaseRef.child('users/' + user.uid).set(userData);

    // })
    .catch((error) => {
        // User creation failed, display error message
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    });
}

// Validation functions
function validate_email(email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    return expression.test(email);
}

function validate_password(password) {
    return password.length >= 6;
}

function validate_username(username) {
    return username.length > 0;
}
