import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-database.js';


// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAGxOXZNWDmwzUyyHlcQ4MsjdtHtXC5E00",
    authDomain: "castlecrawlers-f0369.firebaseapp.com",
    projectId: "castlecrawlers-f0369",
    storageBucket: "castlecrawlers-f0369.appspot.com",
    messagingSenderId: "137343873527",
    appId: "1:137343873527:web:d52d121d4d926a16fbbef2",
    databaseURL: "https://castlecrawlers-f0369-default-rtdb.firebaseio.com/"
};



// Initialize Firebase app
const firebaseApp = initializeApp(firebaseConfig);

// Get Auth and Database instances
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);

// Event listener for login button
document.getElementById('login-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sign in with email and password
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            alert('Login successful');
            // You can redirect to another page or perform other actions here
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});

// Event listener for register button
document.getElementById('register-btn').addEventListener('click', function() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;

    // Create user with email and password
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            // Store additional user data in Realtime Database
            set(ref(database, 'users/' + user.uid), {
                email: user.email,
                username: username
            });
            alert('User registered successfully');
            // You can redirect to another page or perform other actions here
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage);
        });
});